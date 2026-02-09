import { FastifyRequest, FastifyReply } from "fastify";

export async function authGuard(req: FastifyRequest, reply: FastifyReply) {
  if (req.headers["x-api-key"] !== process.env.API_KEY) {
    reply.code(401).send({ error: "Unauthorized" });
  }
}
