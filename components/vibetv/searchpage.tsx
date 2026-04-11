'use client'

import { Search, ChevronRight } from 'lucide-react'

const categoryItems = [
  '🏎️ 動作',
  '🗺️ 冒險',
  '🎬 劇情',
  '🧬 科幻',
  '🤣 喜劇',
  '🎯 18禁',
  '🔥 HOT30',
  '🚀 即將上線',
]

const vibeChoiceItems = Array.from({ length: 60 }, (_, index) => ({
  id: index + 1,
}))

export default function SearchPage() {
  const topBar = (
    <div className="fixed top-0 left-1/2 z-[120] w-full max-w-[430px] -translate-x-1/2 bg-black/80 px-3 pt-4 pb-3 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <button className="flex h-10 w-10 items-center justify-center">
          <CastScreenIcon />
        </button>

        <img
          src="/logo.png"
          alt="Vibe Logo"
          className="h-[60px] w-auto object-contain"
        />

        <button className="flex h-9 w-9 items-center justify-center rounded-md">
          <Search className="h-8 w-8 text-white" />
        </button>
      </div>
    </div>
  )

  return (
    <div className="relative min-h-screen bg-black px-3 pt-[88px] text-white">
      {topBar}

      <div className="mx-auto w-full max-w-[430px] pb-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-[20px] font-semibold text-white">類別</div>

          <button className="flex items-center gap-1 text-[20px] font-medium text-white">
            See ALL
            <ChevronRight className="h-7 w-8" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {categoryItems.map((item) => (
            <button
              key={item}
              className="flex h-[72px] items-center justify-center rounded-[16px] bg-[#e9e9e9] px-3 text-[18px] font-medium text-black"
            >
              {item}
            </button>
          ))}
        </div>

        {/* VIBE Choice */}
        <div className="mt-10 mb-3">
          <div className="flex items-end gap-2">
            <span className="text-[28px] font-black tracking-[-0.02em] text-[#b14cff]">
              VIBE
            </span>
            <span className="text-[18px] font-semibold text-white mb-[2px]">
              Choice
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {vibeChoiceItems.map((item) => (
            <button
              key={item.id}
              className="aspect-[0.72] w-full overflow-hidden rounded-[6px] bg-[#d9d9d9]"
            >
              <div className="h-full w-full bg-[#d3d3d3]" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function CastScreenIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      className="text-white"
    >
      <rect
        x="2"
        y="3"
        width="20"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M4 15a5 5 0 0 1 5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 11a9 9 0 0 1 9 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="4" cy="19" r="1.5" fill="currentColor" />
    </svg>
  )
}