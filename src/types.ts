export type PizzaType = {
  id: number
  name: string
  description: string
  image: string
  priceSm: number
  priceMd: number
  priceLg: number
  toppings: ToppingType[]
}

export type ToppingType = {
  image: string
  name: string
  price: number
}

export const PizzaSizeType = {
  small: "small",
  medium: "medium",
  large: "large",
} as const

export type PizzaSizeType = (typeof PizzaSizeType)[keyof typeof PizzaSizeType]

export const CrustType = {
  traditional: "traditional",
  thin: "thin",
} as const

export type CrustType = (typeof CrustType)[keyof typeof CrustType]
