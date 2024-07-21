import { NextResponse } from "next/server"
import { pizzas } from "@/data/pizzas"

export async function GET(req: Request) {
  return NextResponse.json(pizzas)
}
