import Fastify from "fastify";
import cors from "@fastify/cors";
import { qcRoutes } from "./routes/qc.routes";
import { uploadRoutes } from "./routes/upload.routes";
import { authGuard } from "./middlewares/auth.middleware";

export const app = Fastify({ logger: true });

app.register(cors);

// health check (KEEP THIS)
app.get("/", async () => {
  return { status: "ok" };
});

// auth
app.addHook("preHandler", authGuard);

// routes
app.register(uploadRoutes, { prefix: "/api/qc" });
app.register(qcRoutes, { prefix: "/api/qc" });
