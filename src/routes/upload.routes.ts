import { prisma } from "../db/prisma";

export async function uploadRoutes(app: any) {
  app.post("/upload", async (req: any) => {
    const { call_id, agent, did, audio_url } = req.body;
    return prisma.call.create({
      data: { call_id, agent, did, audio_url }
    });
  });
}
