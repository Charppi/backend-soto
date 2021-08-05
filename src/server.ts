import cors from "cors";
import express from "express";

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});
