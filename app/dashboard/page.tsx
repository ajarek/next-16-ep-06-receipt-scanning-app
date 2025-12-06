import Image from "next/image"


import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getInvoices } from "@/lib/actions/getInvoices"

const Dashboard = async () => {
  const invoices =await getInvoices()
  return (
    <div className='relative flex h-auto min-h-screen w-full flex-col'>
      {/* Top App Bar */}
      <div className='sticky top-0 z-10 flex items-center bg-background-light/80 p-4 pb-3 dark:bg-background-dark/80 backdrop-blur-sm'>
        <h1 className='text-3xl font-bold text-slate-900 dark:text-white flex-1'>
          Panel
        </h1>
      </div>
      <div className='flex flex-col gap-6 p-4'>
        {/* Stats Cards */}
        <div className='flex w-full gap-4 overflow-x-auto pb-2 -mx-4 px-4'>
          <div className='flex min-w-[170px] flex-1 flex-col gap-2 rounded-lg bg-slate-200/50 p-4 dark:bg-white/10'>
            <p className='text-sm font-medium text-slate-600 dark:text-slate-400'>
              Łączna liczba faktur
            </p>
            <p className='text-2xl font-bold tracking-tight text-slate-900 dark:text-white'>
              {invoices.length}
            </p>
          </div>
          <div className='flex min-w-[170px] flex-1 flex-col gap-2 rounded-lg bg-slate-200/50 p-4 dark:bg-white/10'>
            <p className='text-sm font-medium text-slate-600 dark:text-slate-400'>
              Łączna wartość faktur
            </p>
            <p className='text-2xl font-bold tracking-tight text-slate-900 dark:text-white'>
              {invoices.reduce((total, invoice) => total + invoice.amount, 0)}{" "}
              PLN
            </p>
          </div>
          <div className='flex min-w-[170px] flex-1 flex-col gap-2 rounded-lg bg-slate-200/50 p-4 dark:bg-white/10'>
            <p className='text-sm font-medium text-slate-600 dark:text-slate-400'>
              Średnia faktura
            </p>
            <p className='text-2xl font-bold tracking-tight text-slate-900 dark:text-white'>
              {(
                invoices.reduce((total, invoice) => total + invoice.amount, 0) /
                invoices.length
              ).toFixed(2)}{" "}
              PLN
            </p>
          </div>
        </div>
        {/* Button Group */}
        <div className='flex w-full gap-3'>
          <Button asChild className='flex h-12 flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-4 text-sm font-bold leading-normal tracking-tight text-background-dark'>
            <Link href='/add-invoice'>
            <Image src='/icons/add.svg' alt='Add' width={24} height={24} />
            <span className='truncate'>Dodaj nową fakturę</span>
            </Link>
          </Button>
          <button className='flex h-12 flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-primary/20 px-4 text-sm font-bold leading-normal tracking-tight text-primary'>
            <Image
              src='/icons/download.svg'
              alt='Download'
              width={24}
              height={24}
            />
            <span className='truncate'>Pobierz z pliku</span>
          </button>
        </div>
        {/* Charts */}
        <div className='flex w-full flex-col gap-4 rounded-lg bg-slate-200/50 p-4 dark:bg-white/10'>
          <div className='flex flex-col'>
            <p className='text-base font-bold text-slate-900 dark:text-white'>
              Faktury według statusu
            </p>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Ostatnie 30 dni
            </p>
          </div>
          <div className='grid h-40 grid-flow-col items-end gap-4 px-2'>
            <div className='flex h-full flex-col items-center justify-end gap-2'>
              <div className='h-[70%] w-full rounded-md bg-primary/30'></div>
              <p className='text-xs font-bold text-slate-600 dark:text-slate-400'>
                Zapłacone
              </p>
            </div>
            <div className='flex h-full flex-col items-center justify-end gap-2'>
              <div className='h-[25%] w-full rounded-md bg-red-500/30 dark:bg-red-500/50'></div>
              <p className='text-xs font-bold text-slate-600 dark:text-slate-400'>
                Niezapłacone
              </p>
            </div>
            <div className='flex h-full flex-col items-center justify-end gap-2'>
              <div className='h-[45%] w-full rounded-md bg-slate-400/30 dark:bg-slate-500/50'></div>
              <p className='text-xs font-bold text-slate-600 dark:text-slate-400'>
                Wystawione
              </p>
            </div>
          </div>
        </div>
        {/* Recent Invoices */}
        <div>
          <h3 className='mb-3 text-lg font-bold text-slate-900 dark:text-white'>
            Niedawne faktury
          </h3>
          <div className='flex flex-col gap-3'>
            {invoices
              .sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
              )
              .slice(0, 3)
              .map((invoice) => (
                <div
                  key={invoice.id}
                  className='flex items-center gap-4 rounded-lg bg-slate-200/50 p-3 dark:bg-white/10'
                >
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/20'>
                    <Image
                      src='/icons/receipt_long.svg'
                      alt='Receipt'
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className='flex-1'>
                    <p className='font-bold text-slate-900 dark:text-white'>
                      {invoice.number}
                    </p>
                    <p className='text-sm text-slate-600 dark:text-slate-400'>
                      {invoice.seller}
                    </p>
                  </div>
                  <div className='text-right'>
                    <p className='font-bold text-slate-900 dark:text-white'>
                      {invoice.amount.toFixed(2)} PLN
                    </p>
                    <div className='flex items-center justify-end gap-1.5'>
                      <span
                        className={
                          invoice.status === "zapłacona"
                            ? "h-2 w-2 rounded-full bg-green-500"
                            : "h-2 w-2 rounded-full bg-red-500"
                        }
                      ></span>
                      <p
                        className={
                          invoice.status === "zapłacona"
                            ? "text-sm font-medium text-green-500"
                            : "text-sm font-medium text-red-500"
                        }
                      >
                        {invoice.status}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className='h-24'></div> {/* Spacer for bottom nav */}
        </div>
        {/* Bottom Navigation Bar */}
      </div>
    </div>
  )
}

export default Dashboard
