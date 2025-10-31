'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { useCart } from '@/contexts/CartContext'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
  onProductClick?: (product: any) => void
}

// 검색 가능한 상품 목록
const allProducts = [
  {
    id: 'product-7',
    image: '/product-7.jpg',
    tags: ['특가세일'],
    brand: '브랜디드',
    name: '2001 SLOW WORKER DENIM WASH. JACKET [BLACK INDIG',
    currentPrice: '59,000원',
    originalPrice: '89,000원',
    discountRate: '34',
    likes: '8,376',
    rating: 5,
    reviews: '2,896',
    hasGiftIcon: true,
    size: 'M',
  },
  {
    id: 'product-8',
    image: '/product-8.jpg',
    tags: ['특가세일'],
    brand: '코드그라피',
    name: '[세트] 테크 숏 자켓 셋업_그레이',
    currentPrice: '79,900원',
    originalPrice: '127,900원',
    discountRate: '38',
    likes: '1,461',
    rating: 5,
    reviews: '45',
    hasGiftIcon: true,
    deliveryInfo: '10/8 배송 M',
  },
  {
    id: 'product-3',
    image: '/product-3.jpg',
    tags: ['특가세일'],
    brand: '그루브라임',
    name: '[패키지] 9TH ANNIVERSARY 3PACK SWEAT SHIRTS EDITION',
    currentPrice: '59,000원',
    originalPrice: '165,000원',
    discountRate: '64',
    likes: '5,938',
    rating: 5,
    reviews: '154',
    size: 'M',
  },
  {
    id: 'product-4',
    image: '/product-4.jpg',
    tags: ['특가세일'],
    brand: '엠엠엘지',
    name: '[Mmlg] 1987MMLG HOOD (GREY)',
    currentPrice: '71,100원',
    originalPrice: '79,000원',
    discountRate: '10',
    likes: '9999+',
    rating: 5,
    reviews: '2,446',
    deliveryInfo: '10/27 배송 M',
  },
  {
    id: 'product-9',
    image: '/product-9.jpg',
    brand: '브랜드A',
    name: '기본 티셔츠',
    currentPrice: '29,000원',
    originalPrice: '39,000원',
    discountRate: '26',
    likes: '1,234',
    rating: 4,
    reviews: '56',
  },
  {
    id: 'product-10',
    image: '/product-10.jpg',
    brand: '브랜드B',
    name: '데님 팬츠',
    currentPrice: '89,000원',
    originalPrice: '120,000원',
    discountRate: '26',
    likes: '2,345',
    rating: 5,
    reviews: '128',
  },
]

export default function SearchModal({
  isOpen,
  onClose,
  onProductClick,
}: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const { addToCart } = useCart()

  useEffect(() => {
    if (isOpen) {
      // 모달이 열릴 때 입력 필드에 포커스
      const input = document.getElementById('search-input')
      if (input) {
        setTimeout(() => input.focus(), 100)
      }
    } else {
      setSearchQuery('')
    }
  }, [isOpen])

  // 검색 결과 필터링
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return []
    }

    const query = searchQuery.toLowerCase()
    return allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.tags?.some((tag) => tag.toLowerCase().includes(query))
    )
  }, [searchQuery])

  const handleProductClick = (product: any) => {
    if (onProductClick) {
      onProductClick(product)
      onClose()
    }
  }

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.stopPropagation()
    addToCart({
      id: product.id,
      brand: product.brand,
      name: product.name,
      currentPrice: product.currentPrice,
      originalPrice: product.originalPrice,
      discountRate: product.discountRate,
      image: product.image,
      size: product.size,
      quantity: 1,
    })
  }

  const formatPrice = (priceStr: string) => {
    return parseInt(priceStr.replace(/[^0-9]/g, '')).toLocaleString()
  }

  return (
    <>
      {/* 배경 오버레이 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* 검색 모달 */}
      <div
        className={`fixed top-0 left-0 right-0 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* 헤더 */}
        <div className="bg-black text-white px-4 py-3 flex items-center gap-3">
          <button
            onClick={onClose}
            className="text-white text-xl hover:text-gray-300"
          >
            ✕
          </button>
          <div className="flex-1 relative">
            <input
              id="search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="상품명, 브랜드명으로 검색..."
              className="w-full bg-gray-800 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* 검색 결과 */}
        <div className="max-h-[calc(100vh-80px)] overflow-y-auto pb-4">
          {!searchQuery.trim() ? (
            <div className="p-8 text-center text-gray-400">
              <svg
                className="w-16 h-16 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <p className="text-sm">검색어를 입력하세요</p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="p-8 text-center text-gray-400">
              <p className="text-sm">검색 결과가 없습니다</p>
              <p className="text-xs mt-2">
                "{searchQuery}"에 대한 검색 결과가 없습니다
              </p>
            </div>
          ) : (
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 p-4 md:p-6">
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product)}
                  className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow border border-gray-100"
                >
                  {/* 이미지 */}
                  <div className="relative w-full aspect-square bg-gray-100">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400">
                      <svg
                        className="w-16 h-16"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {product.tags && product.tags.length > 0 && (
                      <div className="absolute bottom-0 left-0 right-0 flex gap-1 p-2">
                        {product.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-red-500 text-white text-xs px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 상품 정보 */}
                  <div className="p-3 space-y-1">
                    <p className="text-xs text-gray-500">{product.brand}</p>
                    <p className="text-sm font-medium text-gray-900 line-clamp-2">
                      {product.name}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        {product.currentPrice}
                      </span>
                      <span className="text-xs text-gray-400 line-through">
                        {product.originalPrice}
                      </span>
                      <span className="text-xs font-semibold text-red-500">
                        {product.discountRate}%
                      </span>
                    </div>
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      className="w-full mt-2 bg-black text-white py-1.5 px-3 rounded text-xs font-medium hover:bg-gray-800 transition-colors"
                    >
                      장바구니 담기
                    </button>
                  </div>
                </div>
              ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

