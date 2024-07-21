import type { PizzaType } from "@/types"
import axios from "axios"

export const getPizzas = async () => {
  const { data } = await axios.get<PizzaType[]>("/api/pizzas")
  return data
}
