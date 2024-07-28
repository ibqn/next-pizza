import { PizzaSizeType } from "@/types"

export function transformSizeToText(size: PizzaSizeType): string {
  switch (size) {
    case PizzaSizeType.small:
      return "25 cm"
    case PizzaSizeType.medium:
      return "30 cm"
    case PizzaSizeType.large:
      return "35 cm"
  }
}
