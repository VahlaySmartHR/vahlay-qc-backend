import "dotenv/config";
import Fastify from "fastify";

const app = Fastify({ logger: true });

app.get("/", async () => {
  return { status: "ok" };
});

const port = Number(process.env.PORT || 3000);

app.listen({ port, host: "0.0.0.0" }, () => {
  console.log(`SERVER RUNNING ON ${port}`);
});
