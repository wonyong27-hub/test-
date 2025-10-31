'use client'

import React from 'react'
import { useCart } from '@/contexts/CartContext'

interface ProductCardProps {
  id?: string
  image: string
  tags?: string[]
  brand: string
  name: string
  currentPrice: string
  originalPrice: string
  discountRate: string
  likes: string
  rating: number
  reviews: string
  hasGiftIcon?: boolean
  deliveryInfo?: string
  size?: string
  onProductClick?: (product: ProductCardProps) => void
}

export default function ProductCard({
  id,
  image,
  tags = [],
  brand,
  name,
  currentPrice,
  originalPrice,
  discountRate,
  likes,
  rating,
  reviews,
  hasGiftIcon = false,
  deliveryInfo,
  size,
  onProductClick
}: ProductCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    addToCart({
      id: id || `${brand}-${name}`.replace(/\s+/g, '-'),
      brand,
      name,
      currentPrice,
      originalPrice,
      discountRate,
      image,
      size,
      quantity: 1,
    })
  }

  const handleCardClick = () => {
    if (onProductClick) {
      onProductClick({
        id,
        image,
        tags,
        brand,
        name,
        currentPrice,
        originalPrice,
        discountRate,
        likes,
        rating,
        reviews,
        hasGiftIcon,
        deliveryInfo,
        size,
      })
    }
  }

  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow h-full flex flex-col"
      onClick={handleCardClick}
    >
      {/* 추천 헤더 */}
      <div className="px-3 pt-3 pb-1 flex items-center gap-1">
        <span className="text-sm font-semibold text-blue-600">추천</span>
      </div>

      {/* 이미지 영역 */}
      <div className="relative px-3">
        <div className="relative w-full aspect-square bg-gray-100 rounded overflow-hidden">
          {image.startsWith('http') ? (
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // 이미지 로드 실패 시 placeholder 표시
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                if (target.nextElementSibling) {
                  (target.nextElementSibling as HTMLElement).style.display = 'flex'
                }
              }}
            />
          ) : null}
          <div className={`w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400 ${image.startsWith('http') ? 'absolute inset-0 hidden' : ''}`}>
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
          
          {/* 태그 */}
          <div className="absolute bottom-0 left-0 right-0 flex gap-1 p-2 z-10">
            {tags.map((tag, idx) => (
              <span key={idx} className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 상품 정보 */}
      <div className="px-3 py-2 space-y-1 flex-1 flex flex-col">
        <p className="text-xs text-gray-500">{brand}</p>
        <p className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[2.5rem]">{name}</p>
        
        {/* 가격 정보 */}
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-gray-900">{currentPrice}</span>
          <span className="text-xs text-gray-400 line-through">{originalPrice}</span>
          <span className="text-xs font-semibold text-red-500">{discountRate}%</span>
        </div>

        {/* 좋아요 */}
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          <span className="text-xs text-gray-600">{likes}</span>
        </div>

        {/* 별점 및 리뷰 */}
        <div className="flex items-center gap-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-3 h-3 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-600">{reviews}</span>
        </div>

        {/* 옵션 및 배송 정보 */}
        <div className="flex items-center justify-between pt-1">
          <button className="text-xs text-gray-600 border border-gray-300 px-2 py-1 rounded">
            OPTION
          </button>
          {deliveryInfo && (
            <span className="text-xs text-gray-500">{deliveryInfo}</span>
          )}
          {size && (
            <span className="text-xs text-gray-500">{size}</span>
          )}
        </div>

        {/* 장바구니 담기 버튼 */}
        <button
          onClick={handleAddToCart}
          className="w-full mt-auto bg-black text-white py-2 px-3 rounded text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          장바구니 담기
        </button>
      </div>
    </div>
  )
}

