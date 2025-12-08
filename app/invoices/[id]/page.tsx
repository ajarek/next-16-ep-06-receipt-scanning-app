import { getInvoiceById } from "@/lib/actions/getInvoiceById"
import Image from "next/image"
import Link from "next/link"
import PDFClient from "../download/[id]/page"

const InvoicePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const invoice = await getInvoiceById(Number(id))

  if (!invoice) {
    return (
      <div className='flex h-screen w-full items-center justify-center'>
        <h1 className='text-2xl font-bold'>Invoice not found</h1>
      </div>
    )
  }

  return (
    <div className='relative flex h-auto min-h-screen w-full flex-col mb-16 '>
      <div className='sticky top-0 z-10 flex items-center bg-background-light/80 p-4 pb-3 dark:bg-background-dark/80 backdrop-blur-sm'>
        <Link href="/invoices" className='flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 w-12 bg-transparent text-slate-900 dark:text-white -ml-2'>
          <Image
            src='/icons/arrow_back_ios_new.svg'
            alt='arrow_back_ios_new'
            width={24}
            height={24}
          />
        </Link>
        <h1 className='text-xl font-bold text-slate-900 dark:text-white flex-1 text-center'>
          {invoice?.number}
        </h1>
        <button className='flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 w-12 bg-transparent text-slate-900 dark:text-white -mr-2'>
          <Image
            src='/icons/more_vert.svg'
            alt='more_vert'
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className='flex flex-col gap-6 p-4'>
        <div className='flex flex-col gap-4 rounded-lg bg-slate-200/50 p-4 dark:bg-white/10'>
          <div className='flex items-start justify-between'>
            <div>
              <p className='text-sm text-slate-600 dark:text-slate-400'>
                Numer Faktury
              </p>
              <p className='text-lg font-bold text-slate-900 dark:text-white'>
                {invoice?.number}
              </p>
            </div>
            <div className='flex items-center justify-end gap-1.5'>
              <span
                className={`h-2 w-2 rounded-full ${
                  invoice?.status === "zapłacona"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              ></span>
              <p
                className={`text-sm font-medium ${
                  invoice?.status === "zapłacona"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {invoice?.status}
              </p>
            </div>
          </div>
          <div className='border-t border-slate-300/50 dark:border-white/10 pt-3 flex justify-between text-sm text-slate-600 dark:text-slate-400'>
            <div>
              <p className='font-medium'>Data wystawienia:</p>
              <p>{invoice?.date.toISOString().split("T")[0]}</p>
            </div>
            <div className='text-right'>
              <p className='font-medium'>Data płatności:</p>
              <p>{invoice?.paymentDate.toISOString().split("T")[0]}</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 rounded-lg bg-slate-200/50 p-4 dark:bg-white/10'>
          <h2 className='text-base font-bold text-slate-900 dark:text-white'>
            Informacje o sprzedawcy
          </h2>
          <div className='text-sm text-slate-600 dark:text-slate-400 space-y-2'>
            <div className='flex justify-between'>
              <span className='font-medium'>Nazwa:</span>
              <span className='text-slate-900 dark:text-white'>
                {invoice?.seller}
              </span>
            </div>
            <div className='flex justify-between'>
              <span className='font-medium'>NIP:</span>
              <span className='text-slate-900 dark:text-white'>
                {invoice?.nip}
              </span>
            </div>
            <div className='flex justify-between'>
              <span className='font-medium'>Adres:</span>
              <span className='text-slate-900 dark:text-white text-right'>
                {invoice?.sellerAddress}
              </span>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 rounded-lg bg-slate-200/50 p-4 dark:bg-white/10'>
          <h2 className='text-base font-bold text-slate-900 dark:text-white'>
            Pozycje na fakturze:
          </h2>
          <div className='space-y-4'>
            <div className='flex justify-between items-start text-sm'>
              <div>
                <p className='font-bold text-slate-900 dark:text-white'>
                  {invoice?.name}{" "}
                  <span className='text-slate-600 dark:text-slate-400'>
                    - WartośćNetto :
                  </span>
                </p>
              </div>
              <p className='font-bold text-slate-900 dark:text-white'>
                {(invoice.amount - invoice.ptu).toFixed(2) || "0.00"} PLN
              </p>
            </div>
            <div className='flex justify-between items-start text-sm'>
              <div>
                <p className='font-bold text-slate-900 dark:text-white'>PTU</p>
              </div>
              <p className='font-bold text-slate-900 dark:text-white'>
                {invoice?.ptu.toFixed(2)} PLN
              </p>
            </div>
          </div>
          <div className='border-t border-slate-300/50 dark:border-white/10 pt-3 mt-2 text-sm space-y-2'></div>
          <div className='border-t border-slate-300/50 dark:border-white/10 pt-3 flex justify-between'>
            <span className='font-bold text-slate-900 dark:text-white'>
              Całkowita kwota:
            </span>
            <span className='text-lg font-bold text-primary'>
              {invoice?.amount.toFixed(2)} PLN
            </span>
          </div>
        </div>
        {invoice?.status === "niezapłacona" && (
          <div className='flex flex-col gap-2 rounded-lg bg-slate-200/50 p-4 dark:bg-white/10'>
            <h2 className='text-base font-bold text-slate-900 dark:text-white'>
              Warunki płatności
            </h2>
            <p className='text-sm text-center text-slate-600 dark:text-slate-400'>
              Warunki płatności Płatność jest wymagana do dnia{" "}
              {invoice?.paymentDate.toISOString().split("T")[0]}. Opóźnienia w
              płatnościach podlegają miesięcznej opłacie odsetkowej w wysokości
              1,5%.
            </p>
          </div>
        )}
      </div>
      <div className='sticky bottom-20 left-0 right-0 z-10 border-t border-slate-300/50 bg-background-light/80 p-4 dark:border-white/10 dark:bg-background-dark/80 backdrop-blur-sm'>
        <div className='mx-auto flex max-w-md items-center gap-3'>
          <Link
            href={`/invoices/print?id=${invoice?.id}&seller=${invoice?.seller}&sellerAddress=${invoice?.sellerAddress}&sellerNip=${invoice?.nip}&number=${invoice?.number}&date=${invoice?.date.toISOString().split("T")[0]}&paymentDate=${invoice?.paymentDate.toISOString().split("T")[0]}&amount=${invoice?.amount.toFixed(2)}&ptu=${invoice?.ptu.toFixed(2)}&status=${invoice?.status}&name=${invoice?.name}&paymentMethod=${invoice?.paymentMethod}`}
            className='flex h-12 flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-slate-300/50 dark:bg-white/10 px-4 text-sm font-bold leading-normal tracking-tight text-slate-700 dark:text-slate-200'
          >
            <Image src='/icons/print.svg' alt='print' width={24} height={24} />
            <span>Drukuj</span>
          </Link>
          <PDFClient params={params} />
          <Link href={`/invoices/edit?id=${invoice?.id}`} className='flex h-12 flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-primary/20 px-4 text-sm font-bold leading-normal tracking-tight text-primary'>
            <Image src='/icons/edit.svg' alt='edit' width={24} height={24} />
            <span>Edytuj</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default InvoicePage
