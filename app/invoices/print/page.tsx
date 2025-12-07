"use client"
import { use, useRef } from "react"

export default function PrintData({searchParams}: {searchParams: Promise<{id: number, seller: string, sellerAddress: string, sellerNip: string, number: string, date: string,name: string, paymentDate: string,amount: number,ptu: number,status: string,paymentMethod: string}>}) {
    const {id, seller, sellerAddress, sellerNip, number, date, name, paymentDate, amount, ptu, status, paymentMethod} = use(searchParams)
    
  const printRef = useRef<HTMLDivElement>(null)

  const handlePrint = () => {
    const printContents = printRef.current?.innerHTML
    if (!printContents) return

    const newWindow = window.open("", "", "width=800,height=600")
    newWindow?.document.write(printContents)
    newWindow?.document.close()
    newWindow?.focus()
    newWindow?.print()
    newWindow?.close()
  }

  return (
    <div className="flex flex-col gap-4 mx-auto w-1/2 p-4 text-2xl">
      <div ref={printRef} id='print-area'>
        <h1>Sprzedawca: {seller}</h1>
        <p>Adres: {sellerAddress}</p>
        <p>NIP: {sellerNip}</p>
        <p>Numer faktury: {number}</p>
        <p>Data wystawienia: {date}</p>
        <p>Towar/Usługa: {name}</p>
        <p>Data płatności: {paymentDate}</p>
        <p>Wartość: {amount}</p>
        <p>PTU: {ptu}</p>
        <p>Status: {status}</p>
        <p>Metoda płatności: {paymentMethod}</p>
      </div>

      <button onClick={handlePrint} className='p-2 bg-blue-600 text-white'>
        Drukuj PDF
      </button>
    </div>
  )
}
