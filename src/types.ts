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
