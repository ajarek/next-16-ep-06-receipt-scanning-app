"use server"
import { revalidateTag } from "next/cache"
import prisma from "../db"

export const createInvoice = async ({
  seller,
  sellerAddress,
  nip,
  number,
  date,
  name,
  amount,
  ptu,
  paymentMethod,
  status,
  paymentDate,
}: {
  seller: string
  sellerAddress: string
  nip: string
  number: string
  date: string
  name: string
  amount: number
  ptu: number
  paymentMethod: string
  status: string
  paymentDate: string
}) => {
  if (
    !seller ||
    !sellerAddress ||
    !nip ||
    !number ||
    !date ||
    !name ||
    !amount ||
    !ptu ||
    !paymentMethod ||
    !status ||
    !paymentDate
  ) {
    throw new Error("All fields are required")
  }
  try {
    const newInvoice = await prisma.invoice.create({
      data: {
        seller,
        sellerAddress,
        nip,
        number,
        date: new Date(date),
        name,
        amount,
        ptu,
        paymentMethod,
        status,
        paymentDate: new Date(paymentDate),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    })

    revalidateTag("invoices", { expire: 0 })
    return newInvoice
  } catch (error) {
    console.error("Error creating invoice:", error)
    throw error
  }
}
