"use client"

import Image from "next/image"
import { Input } from "./ui/input"
import { useRouter, useSearchParams } from "next/navigation"

interface SearchProps {
  query: string
}

const SelectName = ({ query }: SearchProps) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set(`${query}`, term)
    } else {
      params.delete(`${query}`)
    }
    try {
      replace(`/invoices?${params.toString()}`)
    } catch (error) {
      console.error("Failed to replace URL parameters:", error)
    }
  }

  return (
    <div className='relative'>
      <Image
        src='/icons/search.svg'
        alt='search'
        width={24}
        height={24}
        className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-500'
      />
      <Input
        className='w-full h-12 rounded-full border-0 bg-slate-200/50 dark:bg-white/10 pl-10 pr-4 text-slate-900 dark:text-white placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-primary'
        placeholder='Wyszukaj...'
        type='search'
        name='name'
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get(query)?.toString()}
      />
    </div>
  )
}

export default SelectName
