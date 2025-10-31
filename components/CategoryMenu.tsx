'use client'

import React from 'react'
import Link from 'next/link'
import { useCategory } from '@/contexts/CategoryContext'

interface CategoryMenuProps {
  isOpen?: boolean
  onClose?: () => void
}

export default function CategoryMenu({ isOpen, onClose }: CategoryMenuProps) {
  const { selectedCategory, setSelectedCategory } = useCategory()

  const categories = ['상의', '하의', '신발', '악세사리', '아기용품']
  const eventSubCategories = ['특가세일', '렌덤박스']

  return (
    <>
      {/* 배경 오버레이 (모바일에서만) */}
      {isOpen && onClose && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* 고정 사이드 메뉴 */}
      <div className={`
        fixed left-0 top-0 bottom-0 w-64 md:w-72 bg-pink-50 z-40 flex flex-col
        ${isOpen !== false ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        transition-transform duration-300 ease-in-out
      `}>
        {/* 헤더 (네비게이션 바와 같은 높이) */}
        <div className="bg-[#8B4513] text-white px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6 flex-shrink-0 flex items-center justify-between h-[72px] md:h-[80px] lg:h-[88px]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-nanum-brush-script">카테고리</h2>
          {/* 모바일 닫기 버튼 */}
          {onClose && (
            <button
              onClick={onClose}
              className="text-white text-xl md:hidden"
            >
              ✕
            </button>
          )}
        </div>

        {/* 스크롤 가능한 카테고리 목록 */}
        <div className="flex-1 overflow-y-auto">

        {/* 카테고리 목록 */}
        <div className="py-2">
          {/* 이벤트 카테고리 */}
          <div className="border-b border-gray-200">
            <div className="w-full text-left px-4 py-3 text-base md:text-lg font-bold text-gray-900">
              <span className="font-nanum-brush-script">이벤트</span>
            </div>

            {/* 이벤트 하위 카테고리 (고정) */}
            <div className="bg-pink-50">
              {eventSubCategories.map((item) => (
                <Link
                  key={item}
                  href={`/category/${encodeURIComponent(item)}`}
                  className={`block w-full text-left px-8 py-2.5 text-base md:text-lg transition-colors font-nanum-brush-script font-bold ${
                    selectedCategory === item
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-red-500'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    setSelectedCategory(item)
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* 카테고리 목록 */}
          <div className="bg-pink-50">
            {categories.map((item) => (
              <Link
                key={item}
                href={`/category/${encodeURIComponent(item)}`}
                className={`block w-full text-left px-4 py-2.5 text-base md:text-lg transition-colors font-nanum-brush-script font-bold ${
                  selectedCategory === item
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-red-500'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => {
                  setSelectedCategory(item)
                }}
              >
                {item}
              </Link>
            ))}
          </div>

        </div>
        </div>
      </div>
    </>
  )
}

