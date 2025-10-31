'use client'

import React from 'react'
import { useCart } from '@/contexts/CartContext'

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart()

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

      {/* 장바구니 사이드 메뉴 */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 lg:w-[480px] bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* 헤더 */}
        <div className="bg-black text-white px-4 py-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">장바구니</h2>
          <button
            onClick={onClose}
            className="text-white text-xl hover:text-gray-300"
          >
            ✕
          </button>
        </div>

        {/* 장바구니 아이템 목록 */}
        <div className="flex flex-col h-full pb-32">
          <div className="overflow-y-auto flex-1 px-4 py-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <svg
                  className="w-16 h-16 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <p className="text-sm">장바구니가 비어있습니다</p>
              </div>
            ) : (
              <div className="space-y-3">
                {cartItems.map((item) => {
                  const itemId = `${item.id}-${item.size || 'default'}`
                  return (
                  <div
                    key={itemId}
                    className="bg-gray-50 rounded-lg p-3 border border-gray-200"
                  >
                    <div className="flex gap-3">
                      {/* 상품 이미지 */}
                      <div className="w-20 h-20 bg-gray-200 rounded flex-shrink-0">
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400">
                          <svg
                            className="w-8 h-8"
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
                      </div>

                      {/* 상품 정보 */}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-500 mb-1">{item.brand}</p>
                        <p className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                          {item.name}
                        </p>
                        {item.size && (
                          <p className="text-xs text-gray-500 mb-1">사이즈: {item.size}</p>
                        )}
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm font-bold text-gray-900">
                            {formatPrice(item.currentPrice)}원
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  itemId,
                                  item.quantity - 1
                                )
                              }
                              className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded text-xs"
                            >
                              -
                            </button>
                            <span className="text-sm w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  itemId,
                                  item.quantity + 1
                                )
                              }
                              className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded text-xs"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            removeFromCart(itemId)
                          }
                          className="text-xs text-red-500 mt-2"
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                  </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* 하단 총액 및 결제 버튼 */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 px-4 py-4 bg-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold">총 금액</span>
                <span className="text-xl font-bold text-red-600">
                  {getTotalPrice().toLocaleString()}원
                </span>
              </div>
              <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                결제하기
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

