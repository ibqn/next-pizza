import { ToppingType } from "@/types"

type Props = {
  topping: ToppingType
}

export const Topping = ({ topping }: Props) => {
  return <div>{topping.name}</div>
}
