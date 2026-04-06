'use client'

import {
  MonitorPlay,
  Menu,
  X,
  Heart,
  Star,
  Clapperboard,
  Bell,
  ChevronRight,
  UserRound,
  LayoutGrid,
  CircleHelp,
  Settings,
  Ticket,
} from 'lucide-react'
import { useState, type ReactNode } from 'react'

const downloadItems = new Array(6).fill(null)
const recentItems = new Array(10).fill(null)

const hubItems = [
  { label: 'VIBELINK', icon: '💜' },
  { label: 'VIBEBOOK', icon: '📖' },
  { label: 'VIBETYPE', icon: '👟' },
]

export default function ProfilePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Fixed Top Bar */}
      <div className="fixed left-1/2 top-0 z-[60] w-full max-w-[430px] -translate-x-1/2 bg-black/92 px-3 pt-4 pb-3 backdrop-blur-md">
        <div className="mx-auto w-full max-w-[430px]">
          <div className="flex items-center justify-between gap-3">
            <button className="flex items-center gap-2 text-[20px] font-medium text-white">
              <MonitorPlay className="h-7 w-7" />
              連接電視
            </button>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="relative z-[70] flex items-center gap-2 text-[20px] font-medium text-white"
            >
              {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              {menuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Content */}
      <div className="mx-auto w-full max-w-[430px] px-3 pt-[92px] pb-6">
        <div className="rounded-[20px] bg-[#7c7c7c] px-4 py-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-[20px] font-medium text-white">下載內容</div>

            <button className="flex items-center gap-1 text-[20px] font-medium text-white">
              See ALL
              <ChevronRight className="h-7 w-7" />
            </button>
          </div>

          <PosterRow items={downloadItems} cardClassName="h-[164px] min-w-[108px]" />
        </div>

        <div className="mt-5 rounded-[22px] bg-[#6f6f6f] px-4 py-5">
          <div className="grid grid-cols-3 gap-3 text-center">
            <QuickAction icon={<Heart className="h-8 w-8" />} label="收藏內容" />
            <QuickAction icon={<Star className="h-8 w-8" />} label="評分內容" />
            <QuickAction icon={<Clapperboard className="h-8 w-8" />} label="提醒項目" />
          </div>
        </div>

        <div className="mt-5">
          <div className="mb-3 text-[18px] font-medium text-white">繼續觀賞</div>
          <PosterRow items={recentItems} cardClassName="h-[140px] min-w-[100px]" />
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-[22px] text-white">VIBE HUB</div>

          <button className="flex items-center gap-1 text-[20px] font-medium text-white">
            See ALL
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 pb-6">
          {hubItems.map((item) => (
            <button
              key={item.label}
              className="flex h-[58px] items-center justify-center gap-2 rounded-[16px] bg-[#efefef] px-4 text-[18px] font-medium text-black"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 z-[50] px-4 pt-[82px] transition-all duration-300 ease-out ${
          menuOpen
            ? 'pointer-events-auto bg-black/10 opacity-100'
            : 'pointer-events-none bg-black/0 opacity-0'
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div className="flex justify-center">
          <div
            className={`h-fit w-full max-w-[360px] rounded-[24px] border-2 border-[#d889c7] bg-[#d9d9d9]/95 px-8 py-7 text-black backdrop-blur-sm transition-all duration-300 ease-out ${
              menuOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-9 text-[20px] font-medium">
              <MenuItem
                icon={<Ticket className="h-6 w-6 stroke-[2]" />}
                label="Vibe會員"
                onClick={() => window.open('https://vibelink-j9m5.vercel.app/', '_blank')}
              />
              <MenuItem icon={<UserRound className="h-6 w-6 stroke-[2]" />} label="我的帳號" />
              <MenuItem icon={<LayoutGrid className="h-6 w-6 stroke-[2]" />} label="Vibe Hub" />
              <MenuItem icon={<CircleHelp className="h-6 w-6 stroke-[2]" />} label="使用說明" />
              <MenuItem icon={<Settings className="h-6 w-6 stroke-[2]" />} label="設定" />
              <MenuItem icon={<Bell className="h-6 w-6 stroke-[2]" />} label="通知" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PosterRow({
  items,
  className = '',
  cardClassName = 'h-[76px] min-w-[78px]',
}: {
  items: unknown[]
  className?: string
  cardClassName?: string
}) {
  return (
    <div
      className={`scrollbar-none flex gap-3 overflow-x-auto pb-1 ${className}`}
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {items.map((_, index) => (
        <div
          key={index}
          className={`${cardClassName} shrink-0 rounded-[6px] bg-[#d9d9d9]`}
        />
      ))}
    </div>
  )
}

function QuickAction({
  icon,
  label,
}: {
  icon: ReactNode
  label: string
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-white">
      {icon}
      <div className="text-[16px] font-medium">{label}</div>
    </div>
  )
}

function MenuItem({
  icon,
  label,
  onClick,
}: {
  icon: ReactNode
  label: string
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-center gap-5 text-center"
    >
      <span className="flex h-6 w-6 items-center justify-center text-black">
        {icon}
      </span>
      <span className="min-w-[140px] text-center text-[20px]">{label}</span>
    </button>
  )
}