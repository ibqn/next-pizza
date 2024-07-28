"use client"

import type { PizzaType } from "@/types"
import { cn } from "@/utils/class-names"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/dialog"
import { useState } from "react"
import { PizzaDetails } from "@/components/pizza-details"

type Props = {
  pizza: PizzaType
}

export const Pizza = ({ pizza }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="group rounded-xl px-4 py-2 xl:px-2 xl:py-4">
      <Image
        className="mb-8 cursor-pointer transition-all duration-300 lg:group-hover:translate-y-3"
        src={pizza.image}
        width={270}
        height={270}
        alt={pizza.name}
        priority
      />

      <div>
        <div className="mb-3 cursor-pointer text-xl font-bold capitalize">
          {pizza.name}
        </div>
      </div>

      <div className="mb-6 min-h-16 text-sm font-medium">
        {pizza.description}
      </div>

      <div className="mb-6 flex items-center justify-between">
        <div className="hidden text-xl font-semibold lg:flex">
          starts at {pizza.priceSm}
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="gradient btn-sm hidden rounded-lg text-sm font-semibold text-white lg:flex"
        >
          Choose
        </button>

        <button
          className={cn("btn btn-sm gradient px-3 text-sm lg:hidden")}
          onClick={() => setIsOpen(true)}
        >
          starts at {pizza.priceSm}
        </button>
        <Dialog open={isOpen} onOpenChange={(event) => setIsOpen(event)}>
          <DialogContent className="h-full w-full bg-pink-200 lg:max-h-[600px] lg:max-w-[900px] lg:rounded-[30px]">
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
            <PizzaDetails pizza={pizza} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
