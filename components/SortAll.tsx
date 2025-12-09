"use client"
import Image from "next/image"

import { useRouter, usePathname } from "next/navigation"

const SortAll = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleSortAll = () => {
    router.replace(pathname)
  }

  return (
    <button
      className='flex h-10 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-primary/20 px-4 text-sm font-bold leading-normal tracking-tight text-primary'
      onClick={handleSortAll}
    >
      <Image
        src='/icons/filter_list.svg'
        alt='filter'
        width={24}
        height={24}
        className='text-slate-500'
      />
      <span>Wszystkie statusy</span>
    </button>
  )
}

export default SortAll
