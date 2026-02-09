import "dotenv/config";   // ✅ MUST be first line

import { app } from "./app";

const port = Number(process.env.PORT) || 4000;

app.listen({ port }, () => {
  console.log(`Vahlay QC Bot running on port ${port}`);
});
