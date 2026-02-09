import Fastify from "fastify";
import cors from "@fastify/cors";
import { authGuard } from "./middlewares/auth.middleware";
import { qcRoutes } from "./routes/qc.routes";
import { uploadRoutes } from "./routes/upload.routes";

export const app = Fastify({ logger: true });

app.register(cors);
app.addHook("preHandler", authGuard);

app.register(uploadRoutes, { prefix: "/api/qc" });
app.register(qcRoutes, { prefix: "/api/qc" });
