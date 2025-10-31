'use client'

import React, { useState } from 'react'
import PhotoReviewModal from './PhotoReviewModal'

export default function BannerSection() {
  const [rotation, setRotation] = useState(0)
  const [isSpinning, setIsSpinning] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)

  // 5칸 룰렛 상품 목록 및 확률 (가중치)
  const prizes = [
    { name: '1000원 할인', color: '#93C5FD', weight: 92 }, // 파란색 92%
    { name: '2000원 할인', color: '#F9A8D4', weight: 10 }, // 분홍색 10%
    { name: '3000원 할인', color: '#C084FC', weight: 5 }, // 보라색 5%
    { name: '5000원 할인', color: '#86EFAC', weight: 3 }, // 녹색 3%
    { name: '10000원 할인', color: '#FDE047', weight: 1 }, // 노란색 1%
  ]

  // 확률 기반 랜덤 선택
  const selectPrizeByProbability = () => {
    const totalWeight = prizes.reduce((sum, prize) => sum + prize.weight, 0)
    let random = Math.random() * totalWeight
    
    for (let i = 0; i < prizes.length; i++) {
      random -= prizes[i].weight
      if (random <= 0) {
        return i
      }
    }
    return 0 // 기본값 (파란색)
  }

  const handleSpin = () => {
    if (isSpinning) return
    
    setIsSpinning(true)
    setResult(null)

    // 확률 기반으로 상품 선택
    const selectedIndex = selectPrizeByProbability()
    const selectedPrize = prizes[selectedIndex]

    // 룰렛을 여러 바퀴 돌리고 선택된 칸에 정착
    const baseRotation = 360 * 8 // 8바퀴 (더 많은 회전)
    const anglePerSegment = 360 / prizes.length
    // 선택된 칸의 중앙 각도 계산 (포인터가 해당 칸의 중앙에 정착)
    const segmentCenterAngle = selectedIndex * anglePerSegment + anglePerSegment / 2
    // 포인터가 상단(0도)에 있으므로, 룰렛을 회전시켜 선택된 칸의 중앙이 상단에 오도록 함
    const targetAngle = 360 - segmentCenterAngle
    const finalRotation = baseRotation + targetAngle + (rotation % 360)

    setRotation(finalRotation)

    // 애니메이션 후 결과 표시 (4초)
    setTimeout(() => {
      setIsSpinning(false)
      setResult(selectedPrize.name)
      alert(`축하합니다! ${selectedPrize.name}을(를) 받으셨습니다!`)
      setTimeout(() => setResult(null), 3000)
    }, 4000)
  }

  // SVG로 룰렛 그리기 (5칸)
  const renderRoulette = () => {
    const segments = prizes.length
    const anglePerSegment = 360 / segments
    const radius = 40

    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        className={isSpinning ? 'transition-transform duration-[4000ms] ease-out' : ''}
        style={{ 
          transform: `rotate(${rotation}deg)`,
          transition: isSpinning ? 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none'
        }}
      >
        <circle cx="50" cy="50" r="50" fill="#fff" />
        {prizes.map((prize, index) => {
          const startAngle = index * anglePerSegment - 90
          const endAngle = (index + 1) * anglePerSegment - 90
          
          const x1 = 50 + radius * Math.cos((startAngle * Math.PI) / 180)
          const y1 = 50 + radius * Math.sin((startAngle * Math.PI) / 180)
          const x2 = 50 + radius * Math.cos((endAngle * Math.PI) / 180)
          const y2 = 50 + radius * Math.sin((endAngle * Math.PI) / 180)

          const largeArcFlag = anglePerSegment > 180 ? 1 : 0

          return (
            <path
              key={index}
              d={`M 50 50 L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
              fill={prize.color}
              stroke="#fff"
              strokeWidth="0.5"
            />
          )
        })}
        {/* 중앙 원 */}
        <circle cx="50" cy="50" r="15" fill="#8B4513" />
        <circle cx="50" cy="50" r="12" fill="#D2691E" />
      </svg>
    )
  }
  return (
    <div className="w-full bg-gray-50 py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-4">
          {/* 카카오톡 채널 쿠폰 배너 */}
          <div className="bg-yellow-400 rounded-lg overflow-hidden relative aspect-square md:aspect-[2/1] cursor-pointer hover:shadow-lg transition-shadow">
            <div className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10">
              <div className="text-white">
                <p className="text-xs md:text-xl font-bold">카카오톡</p>
                <p className="text-[10px] md:text-lg font-semibold">채널 쿠폰</p>
              </div>
            </div>
            <div className="absolute right-2 md:right-4 bottom-2 md:bottom-0 z-10">
              <div className="w-10 h-10 md:w-24 md:h-24 bg-amber-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 md:w-16 md:h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <circle cx="9" cy="9" r="1" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          {/* 베스트 포토 리뷰 배너 */}
          <div 
            className="bg-rose-800 rounded-lg overflow-hidden relative aspect-square md:aspect-[2/1] cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setIsReviewModalOpen(true)}
          >
            <div className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10">
              <div className="text-white">
                <p className="text-xs md:text-xl font-bold">베스트</p>
                <p className="text-[10px] md:text-lg font-semibold">포토 리뷰</p>
              </div>
            </div>
            <div className="absolute right-2 md:right-4 top-2 z-10">
              <div className="w-5 h-5 md:w-8 md:h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 md:w-5 md:h-5 text-rose-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3.5a1 1 0 011.414 0l3.5 3.5a1 1 0 01-1.414 1.414L11 6.914V16a1 1 0 01-2 0V6.914L6.5 8.414A1 1 0 015.5 7l3.5-3.5a1 1 0 011.414 0z" />
                </svg>
              </div>
            </div>
            <div className="absolute right-2 md:right-4 bottom-2 md:bottom-4 z-10">
              <div className="relative">
                <div className="w-9 h-9 md:w-20 md:h-20 bg-amber-300 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-12 md:h-12 text-rose-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2H4zm12 12H4v-8h12v8z" clipRule="evenodd" />
                    <path d="M7 9a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" />
                    <path d="M7 11a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" />
                    <path d="M7 13a1 1 0 011-1h2a1 1 0 110 2H8a1 1 0 01-1-1z" />
                  </svg>
                </div>
                <div className="absolute -top-0.5 -right-0.5 md:-top-2 md:-right-2 bg-red-600 text-white text-[8px] md:text-xs font-bold px-1 md:px-2 py-0.5 md:py-1 rounded transform rotate-12">
                  COUPON
                </div>
              </div>
            </div>
          </div>

          {/* 꽝 없는 룰렛 배너 */}
          <div 
            className="bg-orange-100 rounded-lg overflow-hidden relative aspect-square md:aspect-[2/1] cursor-pointer hover:shadow-lg transition-shadow"
            onClick={handleSpin}
          >
            <div className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10">
              <div className="text-orange-600">
                <p className="text-xs md:text-xl font-bold">꽝 없는</p>
                <p className="text-[10px] md:text-lg font-semibold">룰렛</p>
                {result && (
                  <p className="text-[8px] md:text-sm font-bold text-red-600 mt-0.5 md:mt-1 animate-pulse">
                    {result}
                  </p>
                )}
                {isSpinning && (
                  <p className="text-[8px] md:text-xs text-orange-500 mt-0.5 md:mt-1">돌리는 중...</p>
                )}
              </div>
            </div>
            <div className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10">
              <div className="relative">
                <div className="w-10 h-10 md:w-24 md:h-24 rounded-full border-2 md:border-4 border-amber-700 bg-white relative overflow-hidden">
                  <div className="w-full h-full">
                    {renderRoulette()}
                  </div>
                </div>
                {/* 포인터 (상단 고정) */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] md:border-l-[8px] md:border-r-[8px] md:border-t-[12px] border-t-amber-700"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-1.5 md:top-2 right-6 md:right-12 z-10">
              <div className="w-3 h-3 md:w-6 md:h-6 bg-amber-700 rounded transform rotate-45"></div>
            </div>
            <div className="absolute bottom-2 md:bottom-4 right-6 md:right-12 z-10">
              <div className="w-2.5 h-2.5 md:w-4 md:h-4 bg-amber-700 rounded transform rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 포토 리뷰 모달 */}
      <PhotoReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
      />
    </div>
  )
}
