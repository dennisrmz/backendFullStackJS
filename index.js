import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import VeterinarioRoutes from "./routes/veterinarioRoutes.js";



const app = express();
dotenv.config();
conectarDB();

app.use('/api/veterinarios', VeterinarioRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
