"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { ChangeEvent } from "react"

const SortInvoicesByDate = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const dateParam = searchParams.get("date")?.toString() || ""

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams)
    if (event.target.value) {
      params.set("date", event.target.value)
    } else {
      params.delete("date")
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <input
      type='date'
      value={dateParam || new Date().toISOString().split("T")[0]}
      onChange={handleDateChange}
      className='flex h-10 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-slate-200/50 dark:bg-white/10 px-4 text-sm font-medium leading-normal tracking-tight text-slate-600 dark:text-slate-300'
    />
  )
}

export default SortInvoicesByDate
