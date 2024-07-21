"use client"

import { getPizzas } from "@/apis/pizza"
import { Pizza } from "@/components/pizza"
import type { PizzaType } from "@/types"
import { useQuery } from "@tanstack/react-query"

type Props = {
  pizzas: PizzaType[]
}

export const Home = (props: Props) => {
  const { data: pizzas } = useQuery({
    queryKey: ["pizzas"],
    queryFn: getPizzas,
    initialData: props.pizzas,
  })

  return (
    <main>
      <div className="container mx-auto">
        {pizzas.map((pizza) => (
          <Pizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </main>
  )
}
