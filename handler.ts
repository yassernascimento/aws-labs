import * as serverless from "serverless-http";
import * as express from "express";

const app = express();
app.get("/test", (req, res) => res.send({ message: "Testing" }));

exports.app = serverless(app);
