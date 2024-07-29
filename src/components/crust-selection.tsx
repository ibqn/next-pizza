import { CrustType } from "@/types"
import type { Dispatch, SetStateAction } from "react"

type Props = {
  crust: CrustType
  setCrust: Dispatch<SetStateAction<CrustType>>
}

export const CrustSelection = ({ crust, setCrust }: Props) => {
  return (
    <div className="flex items-center justify-center lg:justify-start">
      <div className="mb-8 flex gap-x-12 font-medium">
        {Object.values(CrustType).map((crustValue: CrustType, index) => (
          <label
            key={index}
            htmlFor={`${crustValue}`}
            className="flex cursor-pointer items-center gap-x-2"
          >
            <input
              className="size-4 cursor-pointer appearance-none rounded-full border border-gray-200 checked:border-secondary checked:bg-gradient-to-r checked:from-primary checked:to-secondary checked:ring-0"
              type="radio"
              name="crust"
              id={`${crustValue}`}
              value={crustValue}
              checked={crust === crustValue}
              onChange={() => setCrust(crustValue)}
            />
            <span className="capitalize">{crustValue}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
