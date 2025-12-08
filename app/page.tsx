import { Button } from "@/components/ui/button"
import Image from "next/image"

import { auth } from "@clerk/nextjs/server"
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs"
import { redirect } from "next/navigation"

export default async function Home() {
  const { userId } = await auth()
  if (userId) {
    return redirect("/dashboard")
  }
  return (
    <div className='relative flex min-h-screen w-full flex-row   group/design-root overflow-hidden '>
      <div className=' w-full flex-col flex justify-center items-start md:items-center py-4 px-8 md:py-12 md:w-1/2 md:px-12 lg:px-24 '>
        <div className='mx-auto w-full max-w-md text-foreground'>
          <h1 className='tracking-tight text-4xl font-bold lg:text-5xl'>
            Witamy w skanerze faktur
          </h1>
          <p className='mt-4  text-lg leading-relaxed'>
            Skaner faktur, uproszczony. Bezproblemowo pobieraj, odczytuj i
            wizualizuj dane z faktur dzięki zaawansowanym statystykom.
          </p>
          <div className='mt-8 grid grid-cols-1 gap-4'>
            <div className='flex items-center gap-4 rounded-lg bg-card p-4'>
              <Image
                src='/icons/download.svg'
                alt='Download'
                width={24}
                height={24}
              />
              <div className='flex flex-col'>
                <h2 className=' text-foreground text-lg font-bold'>Pobierz</h2>
                <p className=' text-base text-muted-foreground'>
                  Bezproblemowe pobieranie faktur
                </p>
              </div>
            </div>
            <div className='flex items-center gap-4 rounded-lg bg-black/20 p-4'>
              <Image
                src='/icons/scanner.svg'
                alt='Scanner'
                width={24}
                height={24}
              />
              <div className='flex flex-col'>
                <h2 className=' text-foreground text-lg font-bold'>Skanuj</h2>
                <p className=' text-base text-muted-foreground'>
                  Automatyczne odczytywanie danych z faktur
                </p>
              </div>
            </div>
            <div className='flex items-center gap-4 rounded-lg bg-black/20 p-4'>
              <Image
                src='/icons/bar_chart.svg'
                alt='Bar Chart'
                width={24}
                height={24}
              />
              <div className='flex flex-col'>
                <h2 className=' text-foreground text-lg font-bold'>
                  Wizualizuj
                </h2>
                <p className=' text-base text-muted-foreground'>
                  Wizualizacja statystyk
                </p>
              </div>
            </div>
          </div>
          <div className='h-10'></div>
          <div className='flex w-full flex-col items-stretch gap-4 sm:flex-row'>
            <SignedOut>
              <SignUpButton>
                <Button className=' flex min-w-[84px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 text-base font-bold tracking-[0.015em]'>
                  <span className='truncate'>Register</span>
                </Button>
              </SignUpButton>

              <SignInButton>
                <Button className='bg-secondary hover:bg-secondary/80 text-secondary-foreground flex min-w-[84px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5   text-base font-bold tracking-[0.015em]'>
                  Login
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
      <div className='hidden w-1/2 md:block'>
        <div
          className='relative min-h-screen w-full bg-cover bg-center'
          data-alt='Abstract overlapping geometric shapes in shades of green and dark grey, representing data visualization.'
        >
          <Image
            src='/images/geometric_shapes.png'
            alt='Abstract overlapping geometric shapes in shades of green and dark grey, representing data visualization.'
            fill
            objectFit='cover'
            className='object-cover'
          />
        </div>
      </div>
    </div>
  )
}
