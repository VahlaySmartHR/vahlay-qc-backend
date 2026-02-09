import Fastify from "fastify";

const app = Fastify({ logger: true });

app.get("/", async () => {
  return "railway alive";
});

const port = Number(process.env.PORT || 3000);

app.listen({ port, host: "0.0.0.0" })
  .then(() => {
    console.log("SERVER LISTENING ON", port);
  })
  .catch((err) => {
    console.error("FAILED TO START SERVER", err);
    process.exit(1);
  });
