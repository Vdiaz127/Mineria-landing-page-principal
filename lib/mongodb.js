import mongoose from "mongoose";

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGO_URL;


if (!MONGODB_URI) {
  throw new Error("Por favor, define la variable MONGODB_URI en tu archivo .env.local");
}


export async function connectDB (){
  await mongoose.connect(MONGODB_URI);
}

export default connectDB;
