"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

const Logo = () => {
  const router = useRouter()
  return (
    <Image
      onClick={() => router.push("/")}
      alt="Logo"
      className="hidden md:block cursor-pointer"
      width="130"
      height="100"
      src="/images/logo.png"
    />
  )
}

export default Logo
