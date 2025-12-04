import { Button } from "@/components/ui/button"
import Image from "next/image"
import { SignedIn, UserButton } from "@clerk/nextjs"
import React from "react"

const Dashboard = () => {
  return (
    <div className='relative flex h-auto min-h-screen w-full flex-col'>
      {/* Top App Bar */}
      <div className='sticky top-0 z-10 flex items-center bg-background-light/80 p-4 pb-3 dark:bg-background-dark/80 backdrop-blur-sm'>
        <h1 className='text-3xl font-bold text-slate-900 dark:text-white flex-1'>
          Dashboard
        </h1>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <div className='flex flex-col gap-6 p-4'>
        {/* Stats Cards */}
        <div className='flex w-full gap-4 overflow-x-auto pb-2 -mx-4 px-4'>
          <div className='flex min-w-[170px] flex-1 flex-col gap-2 rounded-lg bg-slate-200/50 p-4 dark:bg-white/10'>
            <p className='text-sm font-medium text-slate-600 dark:text-slate-400'>
              Total Invoices
            </p>
            <p className='text-2xl font-bold tracking-tight text-slate-900 dark:text-white'>
              1,234
            </p>
          </div>
          <div className='flex min-w-[170px] flex-1 flex-col gap-2 rounded-lg bg-slate-200/50 p-4 dark:bg-white/10'>
            <p className='text-sm font-medium text-slate-600 dark:text-slate-400'>
              Total Amount
            </p>
            <p className='text-2xl font-bold tracking-tight text-slate-900 dark:text-white'>
              $54,321
            </p>
          </div>
          <div className='flex min-w-[170px] flex-1 flex-col gap-2 rounded-lg bg-slate-200/50 p-4 dark:bg-white/10'>
            <p className='text-sm font-medium text-slate-600 dark:text-slate-400'>
              Avg. Invoice
            </p>
            <p className='text-2xl font-bold tracking-tight text-slate-900 dark:text-white'>
              $440.20
            </p>
          </div>
        </div>
        {/* Button Group */}
        <div className='flex w-full gap-3'>
          <button className='flex h-12 flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-4 text-sm font-bold leading-normal tracking-tight text-background-dark'>
            <Image src='/icons/add.svg' alt='Add' width={24} height={24} />
            <span className='truncate'>New Invoice</span>
          </button>
          <button className='flex h-12 flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-primary/20 px-4 text-sm font-bold leading-normal tracking-tight text-primary'>
            <Image
              src='/icons/download.svg'
              alt='Download'
              width={24}
              height={24}
            />
            <span className='truncate'>Report</span>
          </button>
        </div>
        {/* Charts */}
        <div className='flex w-full flex-col gap-4 rounded-lg bg-slate-200/50 p-4 dark:bg-white/10'>
          <div className='flex flex-col'>
            <p className='text-base font-bold text-slate-900 dark:text-white'>
              Invoices by Status
            </p>
            <p className='text-sm text-slate-600 dark:text-slate-400'>
              Last 30 Days
            </p>
          </div>
          <div className='grid h-40 grid-flow-col items-end gap-4 px-2'>
            <div className='flex h-full flex-col items-center justify-end gap-2'>
              <div className='h-[70%] w-full rounded-md bg-primary/30'></div>
              <p className='text-xs font-bold text-slate-600 dark:text-slate-400'>
                Paid
              </p>
            </div>
            <div className='flex h-full flex-col items-center justify-end gap-2'>
              <div className='h-[25%] w-full rounded-md bg-red-500/30 dark:bg-red-500/50'></div>
              <p className='text-xs font-bold text-slate-600 dark:text-slate-400'>
                Overdue
              </p>
            </div>
            <div className='flex h-full flex-col items-center justify-end gap-2'>
              <div className='h-[45%] w-full rounded-md bg-slate-400/30 dark:bg-slate-500/50'></div>
              <p className='text-xs font-bold text-slate-600 dark:text-slate-400'>
                Draft
              </p>
            </div>
          </div>
        </div>
        {/* Recent Invoices */}
        <div>
          <h3 className='mb-3 text-lg font-bold text-slate-900 dark:text-white'>
            Recent Invoices
          </h3>
          <div className='flex flex-col gap-3'>
            {/* Invoice Item 1 */}
            <div className='flex items-center gap-4 rounded-lg bg-slate-200/50 p-3 dark:bg-white/10'>
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
                  INV-00123
                </p>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                  Quantum Inc.
                </p>
              </div>
              <div className='text-right'>
                <p className='font-bold text-slate-900 dark:text-white'>
                  $1,250.00
                </p>
                <div className='flex items-center justify-end gap-1.5'>
                  <span className='h-2 w-2 rounded-full bg-green-500'></span>
                  <p className='text-sm font-medium text-green-500'>Paid</p>
                </div>
              </div>
            </div>
            {/* Invoice Item 2 */}
            <div className='flex items-center gap-4 rounded-lg bg-slate-200/50 p-3 dark:bg-white/10'>
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
                  INV-00122
                </p>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                  Nexus Solutions
                </p>
              </div>
              <div className='text-right'>
                <p className='font-bold text-slate-900 dark:text-white'>
                  $875.50
                </p>
                <div className='flex items-center justify-end gap-1.5'>
                  <span className='h-2 w-2 rounded-full bg-red-500'></span>
                  <p className='text-sm font-medium text-red-500'>Overdue</p>
                </div>
              </div>
            </div>
            {/* Invoice Item 3 */}
            <div className='flex items-center gap-4 rounded-lg bg-slate-200/50 p-3 dark:bg-white/10'>
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
                  INV-00121
                </p>
                <p className='text-sm text-slate-600 dark:text-slate-400'>
                  Apex Industries
                </p>
              </div>
              <div className='text-right'>
                <p className='font-bold text-slate-900 dark:text-white'>
                  $2,400.00
                </p>
                <div className='flex items-center justify-end gap-1.5'>
                  <span className='h-2 w-2 rounded-full bg-slate-500'></span>
                  <p className='text-sm font-medium text-slate-500'>Draft</p>
                </div>
              </div>
            </div>
          </div>
          <div className='h-24'></div> {/* Spacer for bottom nav */}
        </div>
        {/* Bottom Navigation Bar */}
        <div className='fixed bottom-0 left-0 right-0 z-10 border-t border-slate-300/50 backdrop-blur-sm '>
          <div className='mx-auto flex max-w-md items-center justify-around p-4'>
            <Button className='h-12 bg-transparent hover:bg-primary/30 flex flex-col items-center gap-1 p-2 '>
              <Image
                src='/icons/dashboard.svg'
                alt='Dashboard'
                width={24}
                height={24}
              />
              <span className='text-xs text-foreground font-bold'>
                Dashboard
              </span>
            </Button>
            <Button className='h-12 bg-transparent hover:bg-primary/30 flex flex-col items-center gap-1 p-2 '>
              <Image
                src='/icons/request_quote.svg'
                alt='Request Quote'
                width={24}
                height={24}
              />
              <span className='text-xs text-foreground font-medium'>
                Invoices
              </span>
            </Button>
            <Button className='h-12 bg-transparent hover:bg-primary/30 flex flex-col items-center gap-1 p-2 '>
              <Image
                src='/icons/bar_chart_FFF.svg'
                alt='Bar Chart'
                width={24}
                height={24}
              />
              <span className='text-xs text-foreground font-medium'>
                Analytics
              </span>
            </Button>
            <Button className='h-12 bg-transparent hover:bg-primary/30 flex flex-col items-center gap-1 p-2 '>
              <Image
                src='/icons/settings.svg'
                alt='Settings'
                width={24}
                height={24}
              />
              <span className='text-xs text-foreground font-medium'>
                Settings
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
