import Image from "next/image"
import { SignOutButton } from "@clerk/nextjs"
import { ModeToggle } from "@/components/ModeToggle"
import Link from "next/link"
import { currentUser } from "@clerk/nextjs/server"
const SettingsPage = async () => {
  const user = await currentUser()

  return (
    <div className='relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden pb-20'>
      <header className='sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm'>
        <div className='flex items-center p-4 pb-2 justify-between'>
          <div className='flex size-12 shrink-0 items-center justify-start'>
            <Image
              src='/icons/arrow_back_ios_new.svg'
              alt='Arrow Back'
              width={24}
              height={24}
            />
          </div>
          <h1 className='text-zinc-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center'>
            Ustawienia
          </h1>
          <div className='flex w-12 items-center justify-end'></div>
        </div>
      </header>
      <main className='flex flex-1 flex-col p-4'>
        <div className='flex flex-col items-center gap-4 py-6'>
          <div className='relative w-60 h-60 flex items-center justify-center'>
            <Image
              src={user?.imageUrl || "/images/unnamed.png"}
              alt='User Avatar'
              width={124}
              height={124}
              className=' rounded-full object-cover '
            />
            <button className='absolute bottom-0 right-1/2 translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary ring-4 ring-background-light dark:ring-background-dark'>
              <Image src='/icons/edit.svg' alt='Edit' width={24} height={24} />
            </button>
          </div>
          <div className='relative'></div>
          <div className='text-center'>
            <h2 className='text-xl font-bold text-zinc-900 dark:text-white'>
              {user?.firstName} {user?.lastName}
            </h2>
            <p className='text-sm text-zinc-500 dark:text-zinc-400'>
              {user?.emailAddresses[0].emailAddress}
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <h3 className='px-4 pb-2 text-sm font-bold uppercase text-zinc-500 dark:text-zinc-400 tracking-wider'>
              Konto
            </h3>
            <div className='flex flex-col overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50'>
              <Link
                className='flex items-center justify-between p-4 transition-colors hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50'
                href='#'
              >
                <div className='flex items-center gap-4'>
                  <Image
                    src='/icons/person.svg'
                    alt='Person'
                    width={24}
                    height={24}
                  />
                  <span className='font-medium text-zinc-900 dark:text-white'>
                    Edytuj profil
                  </span>
                </div>
                <Image
                  src='/icons/arrow_forward_ios.svg'
                  alt='Arrow Forward'
                  width={24}
                  height={24}
                />
              </Link>
              <div className='h-px bg-zinc-200 dark:bg-zinc-800'></div>
              <a
                className='flex items-center justify-between p-4 transition-colors hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50'
                href='#'
              >
                <div className='flex items-center gap-4'>
                  <Image
                    src='/icons/lock.svg'
                    alt='Lock'
                    width={24}
                    height={24}
                  />
                  <span className='font-medium text-zinc-900 dark:text-white'>
                    Zmień hasło
                  </span>
                </div>
                <Image
                  src='/icons/arrow_forward_ios.svg'
                  alt='Arrow Forward'
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
          <div className='flex flex-col'>
            <h3 className='px-4 pb-2 text-sm font-bold uppercase text-zinc-500 dark:text-zinc-400 tracking-wider'>
              Aplikacja
            </h3>
            <div className='flex flex-col overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50'>
              <div className='flex items-center justify-between p-4'>
                <div className='flex items-center gap-4'>
                  <Image
                    src='/icons/dark_mode.svg'
                    alt='Dark Mode'
                    width={24}
                    height={24}
                  />
                  <span className='font-medium text-zinc-900 dark:text-white'>
                    Tryb ciemny
                  </span>
                </div>
                <ModeToggle />
              </div>
              <div className='h-px bg-zinc-200 dark:bg-zinc-800'></div>
              <a
                className='flex items-center justify-between p-4 transition-colors hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50'
                href='#'
              >
                <div className='flex items-center gap-4'>
                  <Image
                    src='/icons/notifications.svg'
                    alt='Notifications'
                    width={24}
                    height={24}
                  />
                  <span className='font-medium text-zinc-900 dark:text-white'>
                    Powiadomienia
                  </span>
                </div>
                <Image
                  src='/icons/arrow_forward_ios.svg'
                  alt='Arrow Forward'
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
          <div className='flex flex-col'>
            <h3 className='px-4 pb-2 text-sm font-bold uppercase text-zinc-500 dark:text-zinc-400 tracking-wider'>
              Dane
            </h3>
            <div className='flex flex-col overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50'>
              <a
                className='flex items-center justify-between p-4 transition-colors hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50'
                href='#'
              >
                <div className='flex items-center gap-4'>
                  <Image
                    src='/icons/backup.svg'
                    alt='Backup'
                    width={24}
                    height={24}
                  />
                  <span className='font-medium text-zinc-900 dark:text-white'>
                    Kopia zapasowa danych
                  </span>
                </div>
                <Image
                  src='/icons/arrow_forward_ios.svg'
                  alt='Arrow Forward'
                  width={24}
                  height={24}
                />
              </a>
              <div className='h-px bg-zinc-200 dark:bg-zinc-800'></div>
              <a
                className='flex items-center justify-between p-4 transition-colors hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50'
                href='#'
              >
                <div className='flex items-center gap-4'>
                  <Image
                    src='/icons/backup.svg'
                    alt='Backup'
                    width={24}
                    height={24}
                  />
                  <span className='font-medium text-zinc-900 dark:text-white'>
                    Eksportuj dane
                  </span>
                </div>
                <Image
                  src='/icons/arrow_forward_ios.svg'
                  alt='Arrow Forward'
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
          <div className='pt-4'>
            <SignOutButton>
              <button className='flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-200/80 dark:bg-zinc-800/50 py-3.5 font-bold text-red-500 dark:text-red-400 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800 cursor-pointer'>
                <Image
                  src='/icons/logout.svg'
                  alt='Logout'
                  width={24}
                  height={24}
                />
                <span>Wyloguj się</span>
              </button>
            </SignOutButton>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SettingsPage
