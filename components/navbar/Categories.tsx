"use client"

import Container from "../Container"
import { TbBeach } from "react-icons/tb"
import { GiWindmill } from "react-icons/gi"
import { MdOutlineVilla } from "react-icons/md"
import CategoryBox from "../CategoryBox"

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "Near to beach",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "Windmills",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "Modern property",
  },
]

const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  )
}

export default Categories
