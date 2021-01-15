import * as serverless from "serverless-http";
import * as express from "express";

const app = express();
app.get("/test/a", (req, res) => res.send({ message: "Test A" }));
app.get("/test/b", (req, res) => res.send({ message: "Test B" }));
app.get("/home", (req, res) => res.send({ message: "Home" }));

exports.app = serverless(app);
