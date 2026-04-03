'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

const tabs = ['瀏覽', '電影', '電視節目'] as const

const top10Items = new Array(10).fill(null)
const vibeBookItems = new Array(15).fill(null)
const recommendItems = new Array(20).fill(null)

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('瀏覽')

  const activeIndex = tabs.findIndex((tab) => tab === activeTab)

  return (
    <div className="min-h-screen bg-black px-3 pt-3 text-white">
      <div className="mx-auto w-full max-w-[430px]">
        {/* Tabs */}
        <div className="mb-3">
          <div className="relative grid grid-cols-3 rounded-full bg-[#9a9a9a] p-[3px]">
            <div
              className="absolute top-[3px] bottom-[3px] left-[3px] w-[calc((100%-6px)/3)] rounded-full bg-[#c982ae] transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(${activeIndex * 100}%)`,
              }}
            />

            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative z-10 flex h-[42px] items-center justify-center rounded-full text-[13px] font-medium text-white"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Banner */}
        <div className="overflow-hidden rounded-[18px] bg-[#101010]">
          <div className="relative h-[165px] w-full bg-[linear-gradient(135deg,#4b2e1d_0%,#c17842_35%,#2c1c14_100%)]">
            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute left-4 top-4 text-[14px] font-semibold tracking-[0.2em] text-white/80">
              VIBE STUDIO
            </div>

            <div className="absolute bottom-6 left-4">
              <div className="text-[18px] font-extrabold leading-none">RED DEAD</div>
              <div className="text-[24px] font-extrabold leading-none text-[#ff5d2f]">
                REDEMPTION
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1 py-2">
            <span className="h-[5px] w-[5px] rounded-full bg-[#d46db0]" />
            <span className="h-[5px] w-[5px] rounded-full bg-[#d46db0]" />
            <span className="h-[5px] w-[5px] rounded-full bg-[#ffffff]" />
          </div>
        </div>

        <SectionTitle title="台灣Top10" className="mt-2" />
        <PosterWall items={top10Items} />

        <div className="mt-3 flex items-center justify-between">
          <div className="text-[24px] font-extrabold leading-none">
            <span className="text-[#c13fff]">VIBE</span>
            <span className="ml-1 text-[12px] align-middle text-white">BOOK</span>
          </div>

          <button className="flex items-center gap-1 text-[13px] font-medium text-[#FFFFFF]">
  OPEN APP
  <ChevronRight className="h-4 w-4" />
</button>
        </div>

        <PosterWall items={vibeBookItems} className="mt-2" />

        <SectionTitle title="推薦影集" className="mt-3" />
        <PosterWall items={recommendItems} />
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