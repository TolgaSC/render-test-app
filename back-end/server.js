import express from "express";

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(express.static("../front-end/build"));

app.get("/api/test", (req, res) => {
  res.send({ headline: "It works OMG" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
