"use client"

import Image from "next/image"

import { useRouter, usePathname, useSearchParams } from "next/navigation"

const SortInvoices = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const isSortedAsc = searchParams.get("sort") === "asc"

  const handleSort = () => {
    const params = new URLSearchParams(searchParams)
    if (isSortedAsc) {
      params.delete("sort")
    } else {
      params.set("sort", "asc")
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <button
      className='flex h-10  cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-slate-200/50 dark:bg-white/10 px-4 text-sm font-medium leading-normal tracking-tight text-slate-600 dark:text-slate-300'
      onClick={handleSort}
    >
      <Image
        src='/icons/swap_vert.svg'
        alt='sort'
        width={24}
        height={24}
        className='text-slate-500'
      />
      <span>{isSortedAsc ? "Najstarsze" : "Najnowsze"}</span>
    </button>
  )
}

export default SortInvoices
