import { Home } from "@/components/home"
import type { PizzaType } from "@/types"
import axios from "axios"
import { headers } from "next/headers"

export default async function HomePage() {
  const origin = headers().get("x-origin")

  const response = await axios.get<PizzaType[]>(`${origin}/api/pizzas`)

  const pizzas = await response.data

  return <Home pizzas={pizzas} />
}
