"use server"

import { revalidatePath } from "next/cache"
import prisma from "../db"
import { redirect } from "next/navigation"

export const deleteInvoice = async (id: number) => {
    await prisma.invoice.delete({
        where: {
            id,
        },
    })
    revalidatePath("/invoices")
    redirect("/invoices")
}