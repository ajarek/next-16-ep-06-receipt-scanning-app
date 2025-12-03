import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div className='relative flex h-screen w-full flex-row   group/design-root overflow-hidden '>
      <div className=' w-full flex-col flex justify-center items-center px-8 py-12 md:w-1/2 md:px-12 lg:px-24 '>
        <div className='mx-auto w-full max-w-md text-foreground'>
          <h1 className='tracking-tight text-4xl font-bold lg:text-5xl'>
            Welcome to Invoicer
          </h1>
          <p className='mt-4  text-lg leading-relaxed'>
            Invoice management, simplified. Effortlessly download, read, and
            visualize your invoice data with powerful statistics.
          </p>
          <div className='mt-8 grid grid-cols-1 gap-4'>
            <div className='flex items-center gap-4 rounded-lg bg-card p-4'>
              <Image src='/icons/download.svg' alt='Download' width={24} height={24} />
              <div className='flex flex-col'>
                <h2 className=' text-foreground text-lg font-bold'>Download</h2>
                <p className=' text-base text-muted-foreground'>
                  Effortless invoice downloading
                </p>
              </div>
            </div>
            <div className='flex items-center gap-4 rounded-lg bg-black/20 p-4'>
              <Image src='/icons/scanner.svg' alt='Scanner' width={24} height={24} />
              <div className='flex flex-col'>
                <h2 className=' text-foreground text-lg font-bold'>Analyze</h2>
                <p className=' text-base text-muted-foreground'>
                  Automatic data extraction
                </p>
              </div>
            </div>
            <div className='flex items-center gap-4 rounded-lg bg-black/20 p-4'>
              <Image src='/icons/bar_chart.svg' alt='Bar Chart' width={24} height={24} />
              <div className='flex flex-col'>
                <h2 className=' text-foreground text-lg font-bold'>Visualize</h2>
                <p className=' text-base text-muted-foreground'>
                  Insightful statistics display
                </p>
              </div>
            </div>
          </div>
          <div className='h-10'></div>
          <div className='flex w-full flex-col items-stretch gap-4 sm:flex-row'>
            <Button className=' flex min-w-[84px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 text-base font-bold tracking-[0.015em]'>
              <span className='truncate'>Register</span>
            </Button>
            <Button className='bg-secondary text-secondary-foreground flex min-w-[84px] flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5   text-base font-bold tracking-[0.015em]'>
              <span className='truncate'>Login</span>
            </Button>
          </div>
        </div>
      </div>
      <div className='hidden w-1/2 md:block'>
        <div
          className='relative h-screen w-full bg-cover bg-center bg-amber-400'
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
