import connectDB from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";
import { NextResponse } from "next/server";

export async function GET(request, response) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");
  
    await dbConnect();
  
    try {
      const inquiries = await Inquiry.find();
      return response.status(200).json(inquiries);
    } catch (error) {
      console.error("Error al obtener las consultas:", error);
      return response.status(500).json({ message: "Error al obtener las consultas" });
    }
  }
  
  export async function OPTIONS(request, response) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return response.status(200).end();
  }

export async function POST(request) {
    await connectDB();

    // Parsear los datos del cuerpo de la solicitud
    const data = await request.json();

    const { email, message, source } = data;

    // Validar los datos obligatorios
    if (!email || !message) {
        return NextResponse.json(
            { message: "Faltan datos obligatorios" },
            { status: 400 }
        );
    }

    try {
        // Crear la consulta en la base de datos
        const inquiry = await Inquiry.create({ email, message, source });

        return NextResponse.json({
            message: "Consulta guardada con éxito",
            inquiry,
        });
    } catch (error) {
        console.error("Error al guardar la consulta:", error);
        return NextResponse.json(
            { message: "Error al guardar la consulta", error },
            { status: 500 }
        );
    }
}

