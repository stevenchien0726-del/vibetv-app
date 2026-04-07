'use client'

import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from 'react'
import { House, Search, UserRound, type LucideIcon } from 'lucide-react'
import HomePage from '@/components/vibetv/homepage'
import SearchPage from '@/components/vibetv/searchpage'
import ProfilePage from '@/components/vibetv/profilepage'

type AppPage = 'home' | 'search' | 'profile'

export default function Page() {
  const [page, setPage] = useState<AppPage>('home')

  return (
    <main className="min-h-screen bg-[#dcdcdc]">
      <div className="mx-auto min-h-screen w-full max-w-[430px] bg-black text-white">
        <div className="min-h-[calc(100vh-88px)]">
          {page === 'home' && <HomePage />}
          {page === 'search' && <SearchPage />}
          {page === 'profile' && <ProfilePage />}
        </div>

        <BottomNav page={page} setPage={setPage} />
      </div>
    </main>
  )
}

function BottomNav({
  page,
  setPage,
}: {
  page: AppPage
  setPage: Dispatch<SetStateAction<AppPage>>
}) {
  const items: { key: AppPage; icon: LucideIcon }[] = [
    { key: 'home', icon: House },
    { key: 'search', icon: Search },
    { key: 'profile', icon: UserRound },
  ]

  const activeIndex = items.findIndex((item) => item.key === page)
  const [isPressed, setIsPressed] = useState(false)
  const pressTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const triggerTouchFeedback = () => {
    setIsPressed(true)

    if (pressTimeoutRef.current) {
      clearTimeout(pressTimeoutRef.current)
    }

    pressTimeoutRef.current = setTimeout(() => {
      setIsPressed(false)
    }, 160)
  }

  useEffect(() => {
    return () => {
      if (pressTimeoutRef.current) {
        clearTimeout(pressTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="sticky bottom-0 z-50 bg-black px-8 pb-4 pt-2">
      <div
        className={`relative flex h-[58px] items-center rounded-full bg-[#858585] px-[8px] transition-transform duration-150 ease-out ${
          isPressed ? 'scale-[1.025]' : 'scale-100'
        }`}
      >
        <div
          className="absolute top-1/2 h-[45px] w-[120px] -translate-y-1/2 rounded-full bg-[#C4C4C4] transition-[left] duration-300 ease-out"
          style={{
            left: `calc(${activeIndex} * ((100% - 16px) / 3) + ((100% - 16px) / 3 - 120px) / 2 + 8px)`,
          }}
        />

        {items.map(({ key, icon: Icon }) => (
          <button
            key={key}
            onClick={() => {
              triggerTouchFeedback()
              setPage(key)
            }}
            className="relative z-10 flex flex-1 items-center justify-center"
          >
            <Icon
              strokeWidth={page === key ? 2.8 : 2}
              className={`h-6 w-6 transition-all duration-200 ${
                page === key ? 'text-[#C982AE]' : 'text-white'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}