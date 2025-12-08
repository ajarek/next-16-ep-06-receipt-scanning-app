"use server"
import { revalidateTag } from "next/cache"
import prisma from "../db"
import { redirect } from "next/navigation"

export const updateInvoice = async (id: number, formData: FormData) => {
  const seller = formData.get("seller") as string
  const sellerAddress = formData.get("sellerAddress") as string
  const nip = formData.get("nip") as string
  const number = formData.get("number") as string
  const date = formData.get("date") as string
  const name = formData.get("name") as string
  const amount = formData.get("amount") as string
  const ptu = formData.get("ptu") as string
  const paymentMethod = formData.get("paymentMethod") as string
  const status = formData.get("status") as string
  const paymentDate = formData.get("paymentDate") as string

  await prisma.invoice.update({
    where: { id },
    data: {
      seller,
      sellerAddress,
      nip,
      number,
      date: new Date(date),
      name,
      amount: Number(amount),
      ptu: Number(ptu),
      paymentMethod,
      status,
      paymentDate: new Date(paymentDate),
      updatedAt: new Date(),
    },
  })

  revalidateTag("invoices", { expire: 0 })
  redirect("/invoices")
}
