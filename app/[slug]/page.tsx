// app/[slug]/page.tsx
import { notFound } from "next/navigation"
import { slugsName } from "@/data/products"

import ClientChecker from "@/components/ClientChecker"
interface Props {
  params: { slug: string }
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params
  const mapped = slugsName[slug]

  if (!mapped) return notFound()

  return (
    <ClientChecker slug={mapped} />
  )
}
