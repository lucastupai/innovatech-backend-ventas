const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "123456",
  database: process.env.DB_NAME || "innovatech_db",
  port: process.env.DB_PORT || 3306,
};

async function getConnection() {
  return await mysql.createConnection(dbConfig);
}

app.get("/", (req, res) => {
  res.json({
    mensaje: "Backend Innovatech funcionando correctamente",
  });
});

app.get("/api/productos", async (req, res) => {
  try {
    const connection = await getConnection();
    const [rows] = await connection.execute("SELECT * FROM productos");
    await connection.end();

    res.json(rows);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener productos",
      error: error.message,
    });
  }
});

app.post("/api/productos", async (req, res) => {
  try {
    const { nombre, precio } = req.body;

    if (!nombre || !precio) {
      return res.status(400).json({
        mensaje: "Debe enviar nombre y precio",
      });
    }

    const connection = await getConnection();

    await connection.execute(
      "INSERT INTO productos (nombre, precio) VALUES (?, ?)",
      [nombre, precio]
    );

    await connection.end();

    res.status(201).json({
      mensaje: "Producto creado correctamente",
      producto: {
        nombre,
        precio,
      },
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al crear producto",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend ejecutándose en puerto ${PORT}`);
});