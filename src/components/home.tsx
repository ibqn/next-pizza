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
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-[15px] py-12 md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px]">
          {pizzas.map((pizza) => (
            <Pizza key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
    </section>
  )
}
