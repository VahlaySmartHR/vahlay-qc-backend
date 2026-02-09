import "dotenv/config";
import { app } from "./app";

const port = Number(process.env.PORT || 8080);

app.listen({ port, host: "0.0.0.0" })
  .then(() => {
    console.log(`Vahlay QC Bot running on port ${port}`);
  })
  .catch(err => {
    console.error("Server failed to start", err);
    process.exit(1);
  });
