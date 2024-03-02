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

const htmlString = `<button> reject </button> <button>puse</button> <button>start</button>`;


app.get("/button", (req, res) => {
  res.json(htmlString);
});

app.listen(3000, () => {
  console.log("server connected!");
});
