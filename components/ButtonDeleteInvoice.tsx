"use client"
import { deleteInvoice } from "@/lib/actions/deleteInvoice"
import Image from "next/image"

const ButtonDeleteInvoice = ({ id }: { id: number }) => {
  const handleDeleteInvoice = async (id: number) => {
    await deleteInvoice(id)
  }
  return (
    <button
      className='flex h-10 flex-1 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-slate-300/50 dark:bg-red-500/50 px-4 text-xs font-bold leading-normal tracking-tight text-slate-700 dark:text-slate-200 hover:bg-slate-400/50 dark:hover:bg-red-500/40'
      onClick={() => handleDeleteInvoice(id)}
    >
      <Image
        src='/icons/delete.svg'
        alt='delete'
        width={24}
        height={24}
        className='text-slate-500'
      />
      <span>Usuń</span>
    </button>
  )
}

export default ButtonDeleteInvoice
