import dotenv from "dotenv";
dotenv.config({ path: "./env" });
import { app } from "./app.js";

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION, SHUTING DOWN .... ", err);
  process.exit(1);
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`server listning at PORT : ${process.env.PORT || 8080}`);
});
