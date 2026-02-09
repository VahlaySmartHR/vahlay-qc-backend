import { prisma } from "../db/prisma";
import { transcribeAudio } from "../services/transcription.service";
import { runQC } from "../services/qc.service";

export async function qcRoutes(app: any) {
  app.post("/run", async (req: any) => {
    const { call_id } = req.body;
    const call = await prisma.call.findUnique({ where: { call_id } });
    if (!call) throw new Error("Call not found");

    const transcript =
      call.transcript ?? (await transcribeAudio(call.audio_url));

    const qc = await runQC(transcript);

    return prisma.qCResult.create({
      data: { call_id, ...qc, qc_version: "v1" }
    });
  });

  app.get("/result", async (req: any) => {
    return prisma.qCResult.findFirst({
      where: { call_id: req.query.call_id },
      orderBy: { created_at: "desc" }
    });
  });
}
