import { unstable_cache } from "next/cache"
import prisma from "../db"

export const getInvoices = unstable_cache(
  async () => {
    return await prisma.invoice.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })
  },
  ["invoices"],
  { tags: ["invoices"] }
)
