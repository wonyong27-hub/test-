'use client'

import React, { useState } from 'react'
import { useCart } from '@/contexts/CartContext'

interface ProductDetailModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
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
  } | null
}

export default function ProductDetailModal({
  isOpen,
  onClose,
  product,
}: ProductDetailModalProps) {
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState<string>(product?.size || '')
  const [quantity, setQuantity] = useState(1)

  if (!product) return null

  const sizes = ['S', 'M', 'L', 'XL', '2XL']

  const handleAddToCart = () => {
    addToCart({
      id: product.id || `${product.brand}-${product.name}`.replace(/\s+/g, '-'),
      brand: product.brand,
      name: product.name,
      currentPrice: product.currentPrice,
      originalPrice: product.originalPrice,
      discountRate: product.discountRate,
      image: product.image,
      size: selectedSize,
      quantity: quantity,
    })
    onClose()
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

      {/* 상품 상세 모달 */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
          isOpen ? 'block' : 'hidden'
        }`}
        onClick={onClose}
      >
        <div
          className="bg-white rounded-lg max-w-2xl md:max-w-4xl lg:max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 헤더 */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between z-10">
            <h2 className="text-lg font-semibold">상품 상세</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>
          </div>

          {/* 상품 정보 */}
          <div className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
            {/* 이미지 */}
            <div className="relative w-full md:w-2/3 lg:w-1/2 mx-auto aspect-square bg-gray-100 rounded-lg overflow-hidden">
              {product.image?.startsWith('http') ? (
                <img 
                  src={product.image} 
                  alt={product.name}
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
              <div className={`w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400 ${product.image?.startsWith('http') ? 'absolute inset-0 hidden' : ''}`}>
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              
              {/* 태그 */}
              <div className="absolute bottom-0 left-0 right-0 flex gap-2 p-4 z-10">
                {product.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-red-500 text-white text-sm px-3 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
                {product.hasGiftIcon && (
                  <span className="bg-yellow-400 text-gray-800 text-sm px-3 py-1 rounded">
                    🎁
                  </span>
                )}
              </div>
            </div>

            {/* 브랜드 */}
            <p className="text-sm md:text-base text-gray-500">{product.brand}</p>

            {/* 상품명 */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">{product.name}</h3>

            {/* 가격 정보 */}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-gray-900">
                {formatPrice(product.currentPrice)}원
              </span>
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(product.originalPrice)}원
              </span>
              <span className="text-lg font-semibold text-red-500">
                {product.discountRate}%
              </span>
            </div>

            {/* 좋아요 및 별점 */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <svg
                  className="w-5 h-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-600">{product.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < product.rating
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.reviews})</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-4">
              {/* 사이즈 선택 */}
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">사이즈</p>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border-2 rounded text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* 수량 선택 */}
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">수량</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded text-lg"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* 배송 정보 */}
              {product.deliveryInfo && (
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm text-gray-600">
                    배송 정보: {product.deliveryInfo}
                  </p>
                </div>
              )}
            </div>

            {/* 상품 설명 */}
            <div className="border-t border-gray-200 pt-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                상품 설명
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {product.name}은/는 {product.brand}에서 제작한 고품질 제품입니다.
                세심하게 제작된 이 제품은 편안한 착용감과 뛰어난 품질을 제공합니다.
                다양한 사이즈와 스타일로 제공되며, 오늘만의 특별한 할인 혜택을 받아보세요.
              </p>
            </div>

            {/* 배송/교환/반품 안내 */}
            <div className="border-t border-gray-200 pt-4 space-y-3">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                배송/교환/반품 안내
              </h4>
              
              {/* 배송 안내 */}
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-700 min-w-[60px]">배송</span>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>• 배송비: 3,000원 (50,000원 이상 구매 시 무료배송)</p>
                    <p>• 배송기간: 주문 확인 후 1-2일 내 발송 (영업일 기준)</p>
                    <p>• 제주도 및 도서산간 지역은 추가 배송비가 발생할 수 있습니다</p>
                    <p>• 배송 추적: 주문확인 시 SMS로 운송장번호 안내</p>
                  </div>
                </div>
              </div>

              {/* 교환 안내 */}
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-700 min-w-[60px]">교환</span>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>• 교환 신청: 상품 수령 후 7일 이내 가능</p>
                    <p>• 교환 조건: 상품 미사용 및 태그 부착 상태</p>
                    <p>• 교환 불가: 착용 흔적, 세탁, 태그 제거 시</p>
                    <p>• 교환 배송비: 단순 변심의 경우 왕복 배송비 고객 부담</p>
                  </div>
                </div>
              </div>

              {/* 반품 안내 */}
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-gray-700 min-w-[60px]">반품</span>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>• 반품 신청: 상품 수령 후 7일 이내 가능</p>
                    <p>• 반품 조건: 상품 미사용 및 태그 부착 상태</p>
                    <p>• 반품 불가: 착용 흔적, 세탁, 태그 제거 시</p>
                    <p>• 반품 배송비: 단순 변심의 경우 왕복 배송비 고객 부담</p>
                    <p>• 환불: 반품 상품 확인 후 2-3일 내 환불 처리</p>
                  </div>
                </div>
              </div>

              {/* 안내 사항 */}
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-xs text-gray-600">
                  ※ 상품의 하자 및 배송 오류로 인한 교환/반품 시 배송비는 당사에서 부담합니다.
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  ※ 자세한 내용은 고객센터로 문의해 주세요. (전화: 1588-0000)
                </p>
              </div>
            </div>

            {/* 버튼 영역 */}
            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <button
                onClick={onClose}
                className="flex-1 py-3 px-4 border-2 border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                닫기
              </button>
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                  selectedSize
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                장바구니 담기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

