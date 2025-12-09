"use client"
import { Button } from "./ui/button"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { SignedIn, UserButton } from "@clerk/nextjs"

const Footer = () => {
  const pathname = usePathname()
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-10 border-t border-slate-300/50 backdrop-blur-sm ",
        {
          hidden: pathname === "/",
        }
      )}
    >
      <div className='mx-auto flex max-w-md items-center justify-around p-4'>
        <Button
          asChild
          className='h-12 bg-transparent hover:bg-primary/30 flex flex-col items-center gap-1 p-2 '
        >
          <Link href='/dashboard'>
            <Image
              src='/icons/dashboard.svg'
              alt='Dashboard'
              width={24}
              height={24}
            />
            <span className='text-xs text-foreground font-bold'>Panel</span>
          </Link>
        </Button>
        <Button
          asChild
          className='h-12 bg-transparent hover:bg-primary/30 flex flex-col items-center gap-1 p-2 '
        >
          <Link href='/invoices'>
            <Image
              src='/icons/request_quote.svg'
              alt='Request Quote'
              width={24}
              height={24}
            />
            <span className='text-xs text-foreground font-medium'>Faktury</span>
          </Link>
        </Button>
        <Button
          asChild
          className='h-12 bg-transparent hover:bg-primary/30 flex flex-col items-center gap-1 p-2 '
        >
          <Link href='/analysis'>
            <Image
              src='/icons/bar_chart_FFF.svg'
              alt='Bar Chart'
              width={24}
              height={24}
            />
            <span className='text-xs text-foreground font-medium'>Analizy</span>
          </Link>
        </Button>
        <Button
          asChild
          className='h-12 bg-transparent hover:bg-primary/30 flex flex-col items-center gap-1 p-2 '
        >
          <Link href='/settings'>
            <Image
              src='/icons/settings.svg'
              alt='Settings'
              width={24}
              height={24}
            />
            <span className='text-xs text-foreground font-medium'>
              Ustawienia
            </span>
          </Link>
        </Button>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}

export default Footer
