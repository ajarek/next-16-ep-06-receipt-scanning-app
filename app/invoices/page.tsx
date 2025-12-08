import ButtonDeleteInvoice from "@/components/ButtonDeleteInvoice"
import { getInvoices } from "@/lib/actions/getInvoices"
import Image from "next/image"
import Link from "next/link"

const InvoicesPage = async () => {
  const invoices = await getInvoices()
  return (
    <div className='relative flex h-auto min-h-screen w-full flex-col'>
      <div className='sticky top-0 z-10 flex items-center bg-background-light/80 p-4 pb-3 dark:bg-background-dark/80 backdrop-blur-sm'>
        <h1 className='text-3xl font-bold text-slate-900 dark:text-white flex-1'>
          Faktury ({invoices.length})
        </h1>
      </div>
      <div className='flex flex-col gap-4 p-4'>
        <div className='relative'>
          <Image
            src='/icons/search.svg'
            alt='search'
            width={24}
            height={24}
            className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-500'
          />
          <input
            className='w-full h-12 rounded-full border-0 bg-slate-200/50 dark:bg-white/10 pl-10 pr-4 text-slate-900 dark:text-white placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-primary'
            placeholder='Wyszukaj...'
            type='text'
          />
        </div>
        <div className='flex w-full gap-3 overflow-x-auto pb-2 -mx-4 px-4'>
          <button className='flex h-10 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-primary/20 px-4 text-sm font-bold leading-normal tracking-tight text-primary'>
            <Image
              src='/icons/filter_list.svg'
              alt='filter'
              width={24}
              height={24}
              className='text-slate-500'
            />
            <span>Wszystkie statusy</span>
          </button>
          <button className='flex h-10 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-slate-200/50 dark:bg-white/10 px-4 text-sm font-medium leading-normal tracking-tight text-slate-600 dark:text-slate-300'>
            <Image
              src='/icons/calendar_today.svg'
              alt='calendar'
              width={24}
              height={24}
              className='text-slate-500'
            />
            <span>Okres</span>
          </button>
          <button className='flex h-10  cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-slate-200/50 dark:bg-white/10 px-4 text-sm font-medium leading-normal tracking-tight text-slate-600 dark:text-slate-300'>
            <Image
              src='/icons/swap_vert.svg'
              alt='sort'
              width={24}
              height={24}
              className='text-slate-500'
            />
            <span>Sortuj</span>
          </button>
        </div>
        <div className='flex flex-col gap-3'>
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className='flex flex-col gap-4 rounded-lg bg-slate-200/50 p-4 dark:bg-white/10'
            >
              <div className='flex items-start justify-between'>
                <div>
                  <p className='font-bold text-slate-900 dark:text-white'>
                    {invoice.number}
                  </p>
                  <p className='text-sm text-slate-600 dark:text-slate-400'>
                    {invoice.seller}
                  </p>
                </div>
                <div className='text-right'>
                  <p className='text-lg font-bold text-slate-900 dark:text-white'>
                    {invoice.amount.toFixed(2)} PLN
                  </p>
                  <div className='flex items-center justify-end gap-1.5 mt-1'>
                    <span className={'h-2 w-2 rounded-full ' + (invoice.status === 'zapłacona' ? 'bg-green-500' : 'bg-red-500')}></span>
                    <p className={`text-sm font-medium ${invoice.status === 'zapłacona' ? 'text-green-500' : 'text-red-500'}`}>
                      {invoice.status}
                    </p>
                  </div>
                </div>
              </div>
              <div className='border-t border-slate-300/50 dark:border-white/10 pt-3 flex justify-between text-sm text-slate-600 dark:text-slate-400'>
                <div>
                  <p className='font-medium'>Data:</p>
                  <p>{invoice.date.toLocaleString().split("T")[0]}</p>
                </div>
                <div className='text-right'>
                  <p className='font-medium'>Data płatności:</p>
                  <p>{invoice.paymentDate.toLocaleString().split("T")[0]}</p>
                </div>
              </div>
              <div className='flex gap-2'>
                
                <Link href={`/invoices/${invoice.id}`} className='flex h-10 flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-slate-300/50 dark:bg-white/10 px-4 text-xs font-bold leading-normal tracking-tight text-slate-700 dark:text-slate-200 hover:bg-slate-400/50 dark:hover:bg-white/20'>
                  <Image
                    src='/icons/visibility.svg'
                    alt='visibility'
                    width={24}
                    height={24}
                    className='text-slate-500'
                  />
                  <span>Wyświetl</span>
                  </Link>
                
                <ButtonDeleteInvoice id={invoice.id} />
              </div>
            </div>
          ))}
        </div>
        <div className='h-24'></div>
      </div>
    </div>
  )
}

export default InvoicesPage
