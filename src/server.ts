import Fastify from "fastify";

const app = Fastify();

app.get("/", async () => {
  return { status: "ok" };
});

const port = Number(process.env.PORT || 3000);

app.listen({ port, host: "0.0.0.0" })
  .then(() => {
    console.log(`SERVER RUNNING ON ${port}`);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
