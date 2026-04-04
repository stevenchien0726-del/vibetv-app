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

const helperItems = ['🎥 我想找高預算電影', '幫我找18禁BL劇', '🥊 暴力影集']

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-black px-3 pt-4 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-78px)] w-full max-w-[430px] flex-col">
        {/* Top Bar */}
        <div className="mb-5 flex items-center justify-between">
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

        {/* Category Header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="text-[20px] font-semibold text-white">類別</div>

          <button className="flex items-center gap-1 text-[20px] font-medium text-white">
            See ALL
            <ChevronRight className="h-7 w-8" />
          </button>
        </div>

        {/* Category Grid */}
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

        {/* Push lower area downward */}
        <div className="flex-1" />

        {/* Helper Pills */}
        <div className="mb-3 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {helperItems.map((item) => (
            <button
              key={item}
              className="shrink-0 rounded-[12px] bg-[#e9e9e9] px-4 py-3 text-[18px] font-medium text-black"
            >
              {item}
            </button>
          ))}
        </div>

        {/* AI Button */}
        <button className="mb-2 flex w-full items-center rounded-full bg-[#dedede] px-4 py-3 text-left text-[18px] font-medium text-black">
          🤖 AI找片幫手
        </button>
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
      {/* 外框 */}
      <rect
        x="2"
        y="3"
        width="20"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Cast 波紋 */}
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