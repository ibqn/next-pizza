import type { ToppingType } from "@/types"
import { cn } from "@/utils/class-names"
import Image from "next/image"
import { useState, type Dispatch, type SetStateAction } from "react"
import { CheckIcon } from "@radix-ui/react-icons"

type Props = {
  topping: ToppingType
  additionalToppings: ToppingType[]
  setAdditionalToppings: Dispatch<SetStateAction<ToppingType[]>>
}

export const Topping = ({
  topping,
  additionalToppings,
  setAdditionalToppings,
}: Props) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckbox = () => {
    setIsChecked((prev) => !prev)

    if (isChecked) {
      setAdditionalToppings((prev) =>
        prev.filter((toppingItem) => toppingItem.name !== topping.name)
      )
    } else {
      setAdditionalToppings((prev) => [...prev, topping])
    }
  }

  return (
    <div
      className={cn(
        isChecked && "border-orange",
        "relative flex h-[150px] w-full max-w-[110px] flex-col items-center justify-center rounded-md border bg-white p-1"
      )}
    >
      <Image
        src={topping.image}
        width={70}
        height={70}
        alt={topping.name}
        className="mb-2"
      />
      <div className="mb-2 text-center text-sm font-medium capitalize leading-4">
        {topping.name}
      </div>

      <div className="text-xs">$ {topping.price}</div>

      <input
        type="checkbox"
        name="topping"
        checked={isChecked}
        onChange={handleCheckbox}
        className="absolute inset-0 cursor-pointer opacity-0"
      />

      <div
        className={cn(
          isChecked ? "opacity-100" : "opacity-0",
          "absolute right-1 top-1"
        )}
      >
        <CheckIcon className="text-xl text-orange" />
      </div>
    </div>
  )
}
