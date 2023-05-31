import express from "express";

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(express.static("../front-end/build"));

app.get("/api/test", (req, res) => {
  res.send({ headline: "It works OMG" });
});

// NUR ZUR VERANSCHAULICHUNG
// vereinfachte darstellung des CRA Proxies
// alle requests gehen weiter auf Proxy (package.json[proxy])
// response geht zurück als port :3000 anstatt :3001
// Und dann ist der Browser (CORS) glücklich
// app.all((req, res) => {
//   fetch("http:localhost:3001" + req.url).then((data) => res.send(data));
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
