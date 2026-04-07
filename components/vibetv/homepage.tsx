'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronRight } from 'lucide-react'

const tabs = ['瀏覽', '電影', '電視節目'] as const

const top10Items = new Array(10).fill(null)
const vibeBookItems = new Array(15).fill(null)
const recommendItems = new Array(20).fill(null)
const vibeStudioItems = new Array(15).fill(null)
const legendaryLeagueItems = new Array(15).fill(null)

const bannerSlides = [
  {
    id: 'b1',
    type: 'studio',
    titleTop: 'VIBE STUDIO',
    main1: 'RED DEAD',
    main2: 'REDEMPTION',
    gradient: 'bg-[linear-gradient(135deg,#4b2e1d_0%,#c17842_35%,#2c1c14_100%)]',
  },
  {
    id: 'b2',
    type: 'movie',
    titleTop: 'VIBE STUDIO',
    main1: 'ANGEL WINGS',
    main2: 'RAVE DOOMSDAYS',
    gradient: 'bg-[linear-gradient(135deg,#000000_0%,#C91882_45%,#141414_100%)]',
  },
  {
    id: 'b3',
    type: 'series',
    titleTop: 'VIBE STUDIO',
    main1: 'THE',
    main2: 'HUNT GAME',
    gradient: 'bg-[linear-gradient(135deg,#1f3327_0%,#000000_45%,#101010_100%)]',
  },
] as const

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('瀏覽')
  const [currentBanner, setCurrentBanner] = useState(0)
  const [isTabsPressed, setIsTabsPressed] = useState(false)

  const bannerRef = useRef<HTMLDivElement | null>(null)
  const pressTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const activeIndex = tabs.findIndex((tab) => tab === activeTab)

  function handleBannerScroll() {
    const slider = bannerRef.current
    if (!slider) return

    const slideWidth = slider.clientWidth
    if (slideWidth === 0) return

    const index = Math.round(slider.scrollLeft / slideWidth)
    setCurrentBanner(index)
  }

  function triggerTabsTouchFeedback() {
    setIsTabsPressed(true)

    if (pressTimeoutRef.current) {
      clearTimeout(pressTimeoutRef.current)
    }

    pressTimeoutRef.current = setTimeout(() => {
      setIsTabsPressed(false)
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
    <div className="min-h-screen bg-black px-3 pt-[70px] pb-[120px] text-white">
      <div className="mx-auto w-full max-w-[430px]">
        {/* Fixed Tabs */}
        <div className="fixed left-1/2 top-0 z-[100] w-full max-w-[430px] -translate-x-1/2 bg-black/80 px-3 pb-2 pt-3 backdrop-blur-md">
          <div
            className={`relative grid grid-cols-3 rounded-full bg-[#858585] p-[3px] transition-transform duration-150 ease-out ${
              isTabsPressed ? 'scale-[1.025]' : 'scale-100'
            }`}
          >
            {/* 滑動膠囊 */}
            <div
              className="absolute bottom-[3px] left-[3px] top-[3px] w-[calc((100%-6px)/3)] rounded-full bg-[#C4C4C4] transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(${activeIndex * 100}%)`,
              }}
            />

            {/* Tabs */}
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  triggerTabsTouchFeedback()
                  setActiveTab(tab)
                }}
                className="relative z-10 flex h-[46px] items-center justify-center rounded-full text-[16px] font-semibold text-white"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 只有瀏覽頁顯示以下內容 */}
        {activeTab === '瀏覽' && (
          <>
            {/* Banner Slider */}
            <div className="overflow-hidden rounded-[18px] bg-[#101010]">
              <div
                ref={bannerRef}
                onScroll={handleBannerScroll}
                className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth scrollbar-none"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                {bannerSlides.map((slide) => (
                  <div key={slide.id} className="w-full min-w-full snap-start">
                    <div className={`relative h-[185px] w-full ${slide.gradient}`}>
                      <div className="absolute inset-0 bg-black/10" />

                      <div className="absolute left-4 top-4 text-[14px] font-semibold tracking-[0.2em] text-white/85">
                        {slide.titleTop}
                      </div>

                      <div className="absolute bottom-6 left-4">
                        <div className="text-[22px] font-extrabold leading-none">
                          {slide.main1}
                        </div>
                        <div className="text-[30px] font-extrabold leading-none text-[#ff5d2f]">
                          {slide.main2}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-1 py-2">
                {bannerSlides.map((_, index) => (
                  <span
                    key={index}
                    className={`h-[6px] w-[6px] rounded-full transition-all duration-200 ${
                      currentBanner === index ? 'bg-[#d46db0]' : 'bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>

            <SectionTitle title="台灣Top10" className="mt-2" />
            <PosterWall items={top10Items} />

            <div className="mt-3 flex items-center justify-between">
              <div className="text-[24px] font-extrabold leading-none">
                <span className="text-[#c13fff]">VIBE</span>
                <span className="ml-1 text-[12px] align-middle text-white">BOOK</span>
              </div>

              <button className="flex items-center gap-1 text-[13px] font-medium text-white">
                OPEN APP
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <PosterWall items={vibeBookItems} className="mt-2" />

            <SectionTitle title="推薦影集" className="mt-3" />
            <PosterWall items={recommendItems} />

            <div className="mt-5">
              <div className="mb-2 text-[22px] font-extrabold leading-none tracking-[0.18em] text-white">
                VIBE STUDIO
              </div>
              <PosterWall items={vibeStudioItems} />
            </div>

            <div className="mt-5 overflow-hidden rounded-[18px] bg-[#202020]">
              <div className="relative h-[215px] w-full bg-[linear-gradient(135deg,#17253f_0%,#4f759d_35%,#0f0f16_100%)]">
                <div className="absolute inset-0 bg-black/18" />

                <div className="absolute left-1/2 top-4 -translate-x-1/2 text-[15px] font-bold tracking-[0.08em] text-[#f0c15f]">
                  LEGENDARY LEAGUE
                </div>

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                  <button className="rounded-full bg-white/45 px-10 py-2 text-[20px] font-semibold text-[#111] backdrop-blur-md">
                    進入
                  </button>
                </div>
              </div>
            </div>

            <SectionTitle title="傳奇聯盟宇宙" className="mt-3" />
            <PosterWall items={legendaryLeagueItems} />
          </>
        )}

        {activeTab === '電影' && (
          <>
            <SectionTitle title="熱門電影" className="mt-2" />
            <PosterWall items={recommendItems} />
            <SectionTitle title="動作電影" className="mt-4" />
            <PosterWall items={top10Items} />
            <SectionTitle title="VIBE STUDIO 電影" className="mt-4" />
            <PosterWall items={vibeStudioItems} />
          </>
        )}

        {activeTab === '電視節目' && (
          <>
            <SectionTitle title="熱門電視節目" className="mt-2" />
            <PosterWall items={recommendItems} />
            <SectionTitle title="推薦影集" className="mt-4" />
            <PosterWall items={top10Items} />
            <SectionTitle title="傳奇聯盟宇宙" className="mt-4" />
            <PosterWall items={legendaryLeagueItems} />
          </>
        )}
      </div>
    </div>
  )
}

function SectionTitle({
  title,
  className = '',
}: {
  title: string
  className?: string
}) {
  return <div className={`mb-2 text-[22px] font-medium text-white ${className}`}>{title}</div>
}

function PosterWall({
  items,
  className = '',
}: {
  items: unknown[]
  className?: string
}) {
  return (
    <div
      className={`flex gap-2 overflow-x-auto pb-1 scrollbar-none ${className}`}
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {items.map((_, index) => (
        <div
          key={index}
          className="h-[140px] min-w-[100px] shrink-0 rounded-[4px] bg-[#d9d9d9]"
        />
      ))}
    </div>
  )
}