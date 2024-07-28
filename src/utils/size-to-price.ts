import { PizzaSizeType, PizzaType } from "@/types"

export function transformSizeToPrice(
  size: PizzaSizeType,
  pizza: PizzaType
): number {
  switch (size) {
    case PizzaSizeType.small:
      return pizza.priceSm
    case PizzaSizeType.medium:
      return pizza.priceMd
    case PizzaSizeType.large:
      return pizza.priceLg
  }
}
