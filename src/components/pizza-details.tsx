"use client"

import { CrustType, PizzaSizeType, PizzaType, ToppingType } from "@/types"
import { transformSizeToPrice } from "@/utils/size-to-price"
import { transformSizeToText } from "@/utils/size-to-text"
import Image from "next/image"
import { useEffect, useState } from "react"
import { SizeSelection } from "./size-selection"
import { CrustSelection } from "./crust-selection"
import { Topping } from "./topping"

type Props = {
  pizza: PizzaType
}

export const PizzaDetails = ({ pizza }: Props) => {
  const [size, setSize] = useState<PizzaSizeType>(PizzaSizeType.small)
  const [crust, setCrust] = useState<CrustType>(CrustType.traditional)
  const [additionalToppings, setAdditionalToppings] = useState<ToppingType[]>(
    []
  )
  const [toppingPrice, setToppingPrice] = useState(0)
  const [price, setPrice] = useState(0)

  useEffect(() => {
    const price = transformSizeToPrice(size, pizza)
    setPrice(parseFloat((price + toppingPrice).toFixed(2)))
  }, [toppingPrice, size, pizza])

  useEffect(() => {
    const toppingPrice = additionalToppings.reduce(
      (acc, topping) => acc + topping.price,
      0
    )
    setToppingPrice(toppingPrice)
  }, [additionalToppings])

  return (
    <div className="flex h-full flex-col md:p-8 lg:flex-row lg:gap-x-8">
      <div className="flex items-center justify-center lg:flex-1">
        <div className="mt-6 max-w-[300px] lg:mt-0 lg:max-w-none">
          <Image
            className="relative mx-auto"
            width={450}
            height={450}
            src={pizza.image}
            alt={pizza.name}
            priority
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex-1 p-2 text-center lg:text-left">
          <div className="h-[46vh] flex-1 overflow-y-scroll bg-white pr-2 scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-200">
            <div className="font-semibold">
              <h2 className="mb-1 text-3xl capitalize">{pizza.name}</h2>

              <div className="mb-6 text-lg font-medium">
                <span>{transformSizeToText(size)}</span>
                {", "}
                <span>{crust} crust</span>
              </div>
            </div>

            <SizeSelection pizza={pizza} size={size} setSize={setSize} />
            <CrustSelection />
            <div>Choose topping</div>

            <div>
              {pizza.toppings.map((topping, index) => {
                return <Topping key={index} topping={topping} />
              })}
            </div>
          </div>
        </div>

        <div className="flex h-full items-center px-2 lg:items-end">
          <button className="btn btn-lg gradient flex w-full justify-center gap-x-2">
            <div>Add to chart for</div>
            <div>$ {price}</div>
          </button>
        </div>
      </div>
    </div>
  )
}
