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
          <button className="flex h-10 w-10 items-center justify-center rounded-md border border-white/40">
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
    <div className="relative h-[18px] w-[22px]">
      <div className="absolute inset-0 rounded-[2px] border-2 border-white" />
      <div className="absolute bottom-[-3px] left-1/2 h-[2px] w-[8px] -translate-x-1/2 bg-white" />
      <div className="absolute left-[3px] bottom-[3px] h-[8px] w-[8px] rounded-bl-[1px] border-l-2 border-b-2 border-white" />
      <div className="absolute left-[3px] bottom-[3px] h-[12px] w-[12px] rounded-bl-[1px] border-l-2 border-b-2 border-white opacity-90" />
    </div>
  )
}