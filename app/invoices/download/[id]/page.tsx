"use client"

import { getInvoiceById } from "@/lib/actions/getInvoiceById"
import { jsPDF } from "jspdf"
import Image from "next/image"
import { use } from "react"

export default function PDFClient({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)

  const generate = async () => {
    const doc = new jsPDF()

    const fontUrl =
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf"
    const fontBytes = await fetch(fontUrl).then((res) => res.arrayBuffer())

    // Convert to base64
    let binary = ""
    const bytes = new Uint8Array(fontBytes)
    const len = bytes.byteLength
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    const base64Font = window.btoa(binary)

    doc.addFileToVFS("Roboto-Regular.ttf", base64Font)
    doc.addFont("Roboto-Regular.ttf", "Roboto", "normal")
    doc.setFont("Roboto")

    const invoice = await getInvoiceById(Number(id))
    if (!invoice) return
    doc.setFontSize(12)
    let y = 10
    const lineHeight = 10

    doc.text(`Numer faktury: ${invoice.number}`, 10, y)
    y += lineHeight
    doc.text(`Sprzedawca: ${invoice.seller}`, 10, y)
    y += lineHeight
    doc.text(`Adres sprzedawcy: ${invoice.sellerAddress}`, 10, y)
    y += lineHeight
    doc.text(`NIP: ${invoice.nip}`, 10, y)
    y += lineHeight
    doc.text(`Data wystawienia: ${invoice.date.toLocaleDateString()}`, 10, y)
    y += lineHeight
    doc.text(`Nazwa: ${invoice.name}`, 10, y)
    y += lineHeight
    doc.text(`Kwota: ${invoice.amount}`, 10, y)
    y += lineHeight
    doc.text(`PTU: ${invoice.ptu}`, 10, y)
    y += lineHeight
    doc.text(`Metoda płatności: ${invoice.paymentMethod}`, 10, y)
    y += lineHeight
    doc.text(`Status: ${invoice.status}`, 10, y)
    y += lineHeight
    doc.text(
      `Data płatności: ${invoice.paymentDate.toLocaleDateString()}`,
      10,
      y
    )
    y += lineHeight
    doc.text(
      `Data utworzenia: ${invoice.createdAt.toLocaleDateString()}`,
      10,
      y
    )
    doc.save("plik.pdf")
  }

  return (
    <div>
       <button  className='flex h-12 flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-slate-300/50 dark:bg-white/10 px-4 text-sm font-bold leading-normal tracking-tight text-slate-700 dark:text-slate-200'
       onClick={generate}>
            <Image
              src='/icons/download.svg'
              alt='download'
              width={24}
              height={24}
            />
            <span>Pobierz</span>
          </button>
    </div>
  )
}
