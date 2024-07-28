import { PizzaSizeType, type PizzaType } from "@/types"
import { cn } from "@/utils/class-names"
import Image from "next/image"
import type { Dispatch, SetStateAction } from "react"

type Props = {
  pizza: PizzaType
  size: PizzaSizeType
  setSize: Dispatch<SetStateAction<PizzaSizeType>>
}

export const SizeSelection = ({ pizza, size, setSize }: Props) => {
  return (
    <div className="mx-auto flex max-w-sm items-center justify-center lg:max-w-none lg:justify-start">
      <div className="mb-12 flex items-baseline gap-x-12 font-medium">
        {Object.values(PizzaSizeType).map((sizeValue: PizzaSizeType, index) => {
          const imageSize = 60 + 10 * index

          return (
            <label
              key={index}
              htmlFor={`${sizeValue}`}
              className="flex cursor-pointer flex-col items-center gap-x-2"
            >
              <Image
                src={pizza.image}
                width={imageSize}
                height={imageSize}
                alt={`${sizeValue} size`}
                className={cn(
                  size === sizeValue
                    ? "rounded-full border-2 border-orange p-[2px]"
                    : "border-transparent saturate-[.1] filter"
                )}
              />
              <span className="capitalize">{sizeValue}</span>

              <input
                className="appearance-none"
                type="radio"
                id={`${sizeValue}`}
                name="size"
                value={sizeValue}
                checked={size === sizeValue}
                onChange={() => setSize(sizeValue)}
              />
            </label>
          )
        })}
      </div>
    </div>
  )
}
