'use client'

import React from 'react'

interface Review {
  id: number
  user: string
  rating: number
  date: string
  content: string
  image?: string
  product: string
}

interface PhotoReviewModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PhotoReviewModal({ isOpen, onClose }: PhotoReviewModalProps) {
  // Top5 포토 리뷰 데이터
  const topReviews: Review[] = [
    {
      id: 1,
      user: '김맘마',
      rating: 5,
      date: '2024.01.15',
      content: '정말 예뻐요! 아기가 좋아하네요. 품질도 좋고 색상도 너무 예쁩니다.',
      image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=200&h=200&fit=crop',
      product: '유아용 곰돌이 수면잠옷 세트'
    },
    {
      id: 2,
      user: '이쁜이',
      rating: 5,
      date: '2024.01.12',
      content: '배송도 빠르고 상품도 마음에 들어요! 사진처럼 예뻐요~',
      image: 'https://images.unsplash.com/photo-1604917621956-10dfa7cce0d7?w=200&h=200&fit=crop',
      product: '아기 신생아 옷 3벌 세트'
    },
    {
      id: 3,
      user: '최엄마',
      rating: 5,
      date: '2024.01.10',
      content: '너무 귀여워요! 아기에게 딱 맞아요. 추천합니다!',
      image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?w=200&h=200&fit=crop',
      product: '유아용 프리미엄 바디수트 5벌'
    },
    {
      id: 4,
      user: '박맘',
      rating: 5,
      date: '2024.01.08',
      content: '재구매 했어요! 너무 만족합니다. 다른 색상도 구매할 예정이에요.',
      image: 'https://images.unsplash.com/photo-1583917337713-63b6de8c97c5?w=200&h=200&fit=crop',
      product: '아기 겨울 외출복 세트'
    },
    {
      id: 5,
      user: '정부모',
      rating: 5,
      date: '2024.01.05',
      content: '친구 추천으로 샀는데 정말 좋아요! 품질도 좋고 디자인도 예뻐요.',
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=200&h=200&fit=crop',
      product: '신생아 순면 내의 세트 3벌'
    }
  ]

  if (!isOpen) return null

  return (
    <>
      {/* 배경 오버레이 */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />

      {/* 모달 */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 헤더 */}
          <div className="sticky top-8 md:top-12 bg-rose-800 text-white px-6 py-4 flex items-center justify-between z-10 rounded-t-lg mt-4 md:mt-8">
            <h2 className="text-xl font-bold">베스트 포토 리뷰 Top 5</h2>
            <button
              onClick={onClose}
              className="text-white text-2xl hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          {/* 리뷰 목록 */}
          <div className="p-6 space-y-6">
            {topReviews.map((review, index) => {
              // 쿠폰 금액 설정
              const couponAmount = 
                index === 0 ? '20,000원' :
                index === 1 ? '10,000원' :
                index === 2 ? '5,000원' :
                null

              return (
                <div
                  key={review.id}
                  className="border-b border-gray-200 pb-6 last:border-b-0 relative"
                >
                  {/* 순위 배지 */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                        index === 0 ? 'bg-yellow-500' :
                        index === 1 ? 'bg-gray-400' :
                        index === 2 ? 'bg-amber-700' :
                        'bg-gray-300'
                      }`}>
                        {index + 1}
                      </div>
                    </div>

                    {/* 리뷰 내용 */}
                    <div className="flex-1">
                      {/* 사용자 정보 및 별점 */}
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-semibold text-gray-900">{review.user}</span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>

                      {/* 상품명 */}
                      <p className="text-sm text-gray-600 mb-2">{review.product}</p>

                      {/* 리뷰 내용 */}
                      <p className="text-gray-800 mb-3">{review.content}</p>

                      {/* 포토 리뷰 이미지 */}
                      {review.image && (
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg overflow-hidden border border-gray-200">
                          <img
                            src={review.image}
                            alt="리뷰 사진"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.style.display = 'none'
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 쿠폰 배지 (오른쪽 하단) */}
                  {couponAmount && (
                    <div className="absolute bottom-6 right-0 z-10">
                      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3">
                        <div className="text-xs font-semibold mb-0.5">쿠폰</div>
                        <div className="text-lg font-bold">{couponAmount}</div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

