import { app } from "./app";
import "dotenv/config";

app.listen({ port: Number(process.env.PORT) }, () => {
  console.log("Vahlay QC Bot running");
});
