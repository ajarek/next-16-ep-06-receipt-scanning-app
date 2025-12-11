import { ChartAreaInteractive } from "@/components/ChartArea"
import { ChartPieDonutText } from "@/components/ChartPie"
import Image from "next/image"

const Analysis = () => {
  return (
    <div className='relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden pb-20'>
      {/* Top App Bar */}
      <header className='sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm'>
        <div className='flex items-center p-4 pb-2 justify-between'>
          <div className='flex size-12 shrink-0 items-center justify-start'>
            <Image
              src='/icons/arrow_back_ios_new.svg'
              alt='Back'
              width={24}
              height={24}
            />
          </div>
          <h1 className='text-zinc-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center'>
            Statystyki i raporty
          </h1>
          <div className='flex w-12 items-center justify-end'>
            <p className='text-primary text-base font-bold leading-normal tracking-[0.015em] shrink-0'>
              Export
            </p>
          </div>
        </div>
      </header>
      <main className='flex flex-col gap-4'>
        {/* <!-- Chips --> */}
        <div className='flex gap-3 px-4 pt-2 overflow-x-auto whitespace-nowrap'>
          <button className='flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-zinc-200 dark:bg-zinc-800/50 pl-4 pr-2 text-zinc-900 dark:text-white'>
            <p className='text-sm font-medium leading-normal'>Zakres dat</p>
            <Image
              src='/icons/keyboard_arrow_down.svg'
              alt='Down'
              width={24}
              height={24}
            />
          </button>
          <button className='flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-zinc-200 dark:bg-zinc-800/50 pl-4 pr-2 text-zinc-900 dark:text-white'>
            <p className='text-sm font-medium leading-normal'>Klient</p>
            <Image
              src='/icons/keyboard_arrow_down.svg'
              alt='Down'
              width={24}
              height={24}
            />
          </button>
          <button className='flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-zinc-200 dark:bg-zinc-800/50 pl-4 pr-2 text-zinc-900 dark:text-white'>
            <p className='text-sm font-medium leading-normal'>Status</p>
            <Image
              src='/icons/keyboard_arrow_down.svg'
              alt='Down'
              width={24}
              height={24}
            />
          </button>
        </div>
        {/* <!-- Stats --> */}
        <div className='flex flex-wrap gap-4 p-4'>
          <div className='flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-4 border border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-zinc-900/50'>
            <p className='text-zinc-600 dark:text-zinc-400 text-sm font-medium leading-normal'>
              Całkowita kwota do zapłaty
            </p>
            <p className='text-zinc-900 dark:text-white tracking-light text-2xl font-bold leading-tight'>
              $124,500
            </p>
            <p className='text-green-500 dark:text-green-400 text-sm font-medium leading-normal'>
              +5.2%
            </p>
          </div>
          <div className='flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-4 border border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-zinc-900/50'>
            <p className='text-zinc-600 dark:text-zinc-400 text-sm font-medium leading-normal'>
              Całkowita kwota zapłacona
            </p>
            <p className='text-zinc-900 dark:text-white tracking-light text-2xl font-bold leading-tight'>
              $98,200
            </p>
            <p className='text-green-500 dark:text-green-400 text-sm font-medium leading-normal'>
              +8.1%
            </p>
          </div>
          <div className='flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-4 border border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-zinc-900/50'>
            <p className='text-zinc-600 dark:text-zinc-400 text-sm font-medium leading-normal'>
              Całkowita kwota niewypłacona
            </p>
            <p className='text-zinc-900 dark:text-white tracking-light text-2xl font-bold leading-tight'>
              $26,300
            </p>
            <p className='text-red-500 dark:text-red-400 text-sm font-medium leading-normal'>
              -2.5%
            </p>
          </div>
        </div>
        {/* <!-- Charts --> */}
        <div className='flex flex-wrap gap-4 px-4'>
          <div className='flex w-full flex-col gap-2 rounded-lg border border-zinc-200 dark:border-zinc-800/50 p-6 bg-white dark:bg-zinc-900/50'>
            <p className='text-zinc-900 dark:text-white text-base font-medium leading-normal'>
              Trendy sprzedaży
            </p>
            <p className='text-zinc-900 dark:text-white tracking-light text-[32px] font-bold leading-tight truncate'>
              $98,200
            </p>
            <div className='flex gap-1'>
              <p className='text-zinc-600 dark:text-zinc-400 text-sm font-normal leading-normal'>
                Ostatnie 30 dni
              </p>
              <p className='text-green-500 dark:text-green-400 text-sm font-medium leading-normal'>
                +8.1%
              </p>
            </div>
            <div className='flex min-h-[180px] flex-1 flex-col gap-8 py-4'>
              <ChartAreaInteractive />
            </div>
          </div>
          <div className='flex w-full flex-col gap-4 rounded-lg border border-zinc-200 dark:border-zinc-800/50 p-6 bg-white dark:bg-zinc-900/50'>
            <p className='text-zinc-900 dark:text-white text-base font-medium leading-normal'>
              Status płatności
            </p>
            <div className='flex min-h-[180px] w-full items-center justify-center'>
              <ChartPieDonutText />
            </div>
          </div>
        </div>
        {/* <!-- Section Header --> */}
        <h3 className='text-zinc-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pt-4'>
          Top Klienci
        </h3>
        {/* <!-- List View --> */}
        <div className='flex flex-col gap-px px-4 pb-8'>
          <div className='flex items-center justify-between p-4 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 rounded-t-lg'>
            <div className='flex items-center gap-4'>
              <div className='flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800'>
                <Image
                  src='/icons/corporate_fare.svg'
                  alt='Corporate'
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <p className='font-semibold text-zinc-900 dark:text-white'>
                  Biedronka.
                </p>
                <p className='text-sm text-zinc-500 dark:text-zinc-400'>
                  54 faktury
                </p>
              </div>
            </div>
            <div className='text-right'>
              <p className='font-semibold text-zinc-900 dark:text-white'>
                $45,230.00
              </p>
              <p className='text-sm text-green-500 dark:text-green-400'>
                Zapłacona
              </p>
            </div>
          </div>
          <div className='flex items-center justify-between p-4 bg-white dark:bg-zinc-900/50 border-x border-zinc-200 dark:border-x-zinc-800/50'>
            <div className='flex items-center gap-4'>
              <div className='flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800'>
                <Image
                  src='/icons/corporate_fare.svg'
                  alt='Corporate'
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <p className='font-semibold text-zinc-900 dark:text-white'>
                  Energa SA
                </p>
                <p className='text-sm text-zinc-500 dark:text-zinc-400'>
                  32 faktury
                </p>
              </div>
            </div>
            <div className='text-right'>
              <p className='font-semibold text-zinc-900 dark:text-white'>
                $28,910.50
              </p>
              <p className='text-sm text-green-500 dark:text-green-400'>
                Zapłacona
              </p>
            </div>
          </div>
          <div className='flex items-center justify-between p-4 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 rounded-b-lg'>
            <div className='flex items-center gap-4'>
              <div className='flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800'>
                <Image
                  src='/icons/corporate_fare.svg'
                  alt='Corporate'
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <p className='font-semibold text-zinc-900 dark:text-white'>
                  Sklep Lidl
                </p>
                <p className='text-sm text-zinc-500 dark:text-zinc-400'>
                  41 faktury
                </p>
              </div>
            </div>
            <div className='text-right'>
              <p className='font-semibold text-zinc-900 dark:text-white'>
                $15,750.00
              </p>
              <p className='text-sm text-orange-500 dark:text-orange-400'>
                Niewypłacona
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Analysis
