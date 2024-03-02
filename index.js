import express from "express";
import WebHooks from "node-webhooks";
import cors from "cors";
const app = express();

app.use(
  cors({
    methods: ["GET"],
    origin: "*",
  })
);

const htmlString = `<button> Reject </button> <button>Pause</button> <button>Start</button>`;


app.get("/button", (req, res) => {
  res.json(htmlString);
});

app.listen(3000, () => {
  console.log("server connected!");
});
