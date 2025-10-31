'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import CategoryMenu from './CategoryMenu'
import CartModal from './CartModal'
import LoginModal from './LoginModal'
import { useCart } from '@/contexts/CartContext'

interface NavigationBarProps {
  onSearchClick?: () => void
}

export default function NavigationBar({ onSearchClick }: NavigationBarProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const { getTotalItems } = useCart()

  return (
    <>
      <nav className="bg-[#8B4513] text-white px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6 flex items-center justify-between fixed top-0 left-0 md:left-64 lg:left-72 right-0 z-50 h-[72px] md:h-[80px] lg:h-[88px]">
        <div className="flex items-center gap-2">
          {/* 모바일 카테고리 버튼 */}
          <button
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="text-white md:hidden"
            aria-label="카테고리 메뉴"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      
      <div className="flex items-center gap-2">
        <Link href="/" className="cursor-pointer">
          <h1 className="text-white font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-nanum-brush-script hover:text-gray-200 transition-colors">BigBoss</h1>
        </Link>
      </div>
      
      <div className="flex items-center gap-3 md:gap-4">
        <button
          onClick={() => setIsCartOpen(true)}
          className="text-white relative"
          aria-label="장바구니"
        >
          <svg className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {getTotalItems() > 0 && (
            <span className="absolute -top-1 -right-1 md:-top-0 md:-right-0 bg-red-500 text-white text-xs md:text-sm rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
              {getTotalItems()}
            </span>
          )}
        </button>
        <button
          onClick={() => onSearchClick?.()}
          className="text-white"
          aria-label="검색"
        >
          <svg className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button
          onClick={() => setIsLoginOpen(true)}
          className="text-white text-lg md:text-xl lg:text-2xl font-medium px-2 md:px-3 py-1 md:py-2 hover:text-gray-300 transition-colors"
          aria-label="로그인"
        >
          login
        </button>
      </div>
      </nav>
      
      <CategoryMenu 
        isOpen={isCategoryOpen} 
        onClose={() => setIsCategoryOpen(false)} 
      />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  )
}

