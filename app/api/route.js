import connectDB from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";
import { NextResponse } from "next/server";

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

export async function GET() {
    await connectDB();

    try {
        // Obtener todas las consultas
        const inquiries = await Inquiry.find();
        return NextResponse.json(inquiries);
    } catch (error) {
        console.error("Error al obtener las consultas:", error);
        return NextResponse.json(
            { message: "Error al obtener las consultas", error },
            { status: 500 }
        );
    }
}
