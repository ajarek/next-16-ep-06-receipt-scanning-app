"use server"

import prisma from "../db"

export const getInvoiceById = async (id: number) => {
  if (!id || isNaN(id)) return null
  return await prisma.invoice.findUnique({
    where: {
      id,
    },
  })
}
