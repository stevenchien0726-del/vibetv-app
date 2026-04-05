'use client'

import { useEffect, useRef, useState } from 'react'
import { Search, ChevronRight, X } from 'lucide-react'

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
  const [isAiOpen, setIsAiOpen] = useState(false)
  const [shouldRenderAi, setShouldRenderAi] = useState(false)
  const [dragY, setDragY] = useState(0)

  const startYRef = useRef<number | null>(null)
  const draggingRef = useRef(false)

  function openAiHelper() {
    setShouldRenderAi(true)
    setDragY(0)

    requestAnimationFrame(() => {
      setIsAiOpen(true)
    })
  }

  function closeAiHelper() {
    setIsAiOpen(false)
    setDragY(0)
  }

  useEffect(() => {
    if (!isAiOpen && shouldRenderAi) {
      const timer = setTimeout(() => {
        setShouldRenderAi(false)
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [isAiOpen, shouldRenderAi])

  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    startYRef.current = e.touches[0].clientY
    draggingRef.current = true
  }

  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    if (!draggingRef.current || startYRef.current === null) return

    const currentY = e.touches[0].clientY
    const diff = currentY - startYRef.current

    if (diff > 0) {
      setDragY(diff)
    }
  }

  function handleTouchEnd() {
    draggingRef.current = false

    if (dragY > 120) {
      closeAiHelper()
    } else {
      setDragY(0)
    }

    startYRef.current = null
  }

  const topBar = (
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
  )

  return (
    <div className="relative min-h-screen bg-black px-3 pt-4 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-78px)] w-full max-w-[430px] flex-col">
        {/* Top Bar */}
        {topBar}

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
        <button
          onClick={openAiHelper}
          className="mb-2 flex w-full items-center rounded-full bg-[#dedede] px-4 py-3 text-left text-[18px] font-medium text-black"
        >
          🤖 AI找片幫手
        </button>
      </div>

      {shouldRenderAi && (
        <>
          {/* 視窗外可點擊關閉區域，保留頂部 bar */}
          <div
            onClick={closeAiHelper}
            className={`absolute left-0 right-0 bottom-0 z-[90] transition-all duration-300 ease-out ${
              isAiOpen
                ? 'pointer-events-auto bg-black/35 opacity-100'
                : 'pointer-events-none bg-black/0 opacity-0'
            }`}
            style={{ top: '84px' }}
          />

          {/* AI Sheet */}
          <div
            className={`absolute left-0 right-0 bottom-0 z-[100] mx-auto w-full max-w-[430px] transition-all duration-300 ease-out ${
              isAiOpen ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: isAiOpen
                ? `translateY(${dragY}px) scale(${Math.max(
                    0.985,
                    1 - dragY / 2000
                  )})`
                : 'translateY(48px) scale(0.985)',
            }}
          >
            <div
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="rounded-t-[28px] bg-[#d9d9d9] text-black shadow-[0_-12px_40px_rgba(0,0,0,0.35)]"
            >
              {/* Grab Handle */}
              <div className="flex justify-center pt-3">
                <div className="h-[5px] w-[52px] rounded-full bg-[#b5b5b5]" />
              </div>

              {/* Sheet Header */}
              <div className="flex items-center justify-between px-4 pb-3 pt-2">
                <div className="text-[20px] font-semibold">AI找片幫手</div>

                <button
                  onClick={closeAiHelper}
                  className="flex h-10 items-center justify-center rounded-full bg-[#cfcfcf] px-4 text-[18px] font-medium text-[#333]"
                >
                  CLOSE
                </button>
              </div>

              {/* Sheet Content */}
              <div className="max-h-[68vh] overflow-y-auto px-4 pb-4">
                <div className="mb-4 flex justify-end">
                  <div className="max-w-[240px] rounded-[18px] bg-[#cfcfcf] px-4 py-3 text-[16px] leading-[1.35]">
                    我今天下班很累，只想放鬆，不想動腦，但要好看
                  </div>
                </div>

                <div className="text-[16px] leading-[1.5]">
                  <div className="mb-2 text-[20px] font-semibold">
                    推薦①《Emily in Paris》
                  </div>

                  <div className="mb-2">
                    推薦理由
                    <br />
                    節奏輕快、畫面明亮、每集約30分鐘。
                    <br />
                    很適合疲累時觀看，也不容易看一看太累。
                  </div>

                  <div className="mb-3">
                    內容資訊
                    <br />
                    • 類型：愛情 / 喜劇 / 都會生活
                    <br />
                    • 季數：4季
                    <br />
                    • 單集：約30分鐘
                    <br />
                    • IMDb：7.1 ⭐
                  </div>

                  <div className="flex gap-3">
                    <div className="w-[104px] shrink-0 rounded-[10px] bg-[#bfbfbf] px-3 py-3 text-[15px] leading-[1.4]">
                      （點擊該內容海報
                      <br />
                      → 進入作品頁）
                    </div>

                    <div className="flex flex-col justify-center gap-3 text-[16px]">
                      <button className="text-left">▷ 直接播放</button>
                      <button className="text-left">▣ 播放預告</button>
                      <button className="text-left">□ 收藏</button>
                    </div>
                  </div>
                </div>

                {/* Bottom Input */}
                <div className="pt-4">
                  <button className="flex w-full items-center rounded-full bg-[#dedede] px-4 py-3 text-left text-[18px] font-medium text-black">
                    🤖 繼續問 AI 找片幫手
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
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