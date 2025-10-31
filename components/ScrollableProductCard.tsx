import React from 'react'

interface ScrollableProductCardProps {
  image: string
  genderSelected?: 'female' | 'male'
}

export default function ScrollableProductCard({
  image,
  genderSelected = 'female'
}: ScrollableProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm min-w-[140px] mr-3">
      {/* 특가세일 헤더 */}
      <div className="px-3 pt-3 pb-1 flex items-center gap-1">
        <span className="text-sm font-semibold text-red-600">특가세일</span>
      </div>

      {/* 이미지 영역 */}
      <div className="relative px-3">
        <div className="relative w-full aspect-square bg-gray-100 rounded overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* 하단 버튼 영역 */}
      <div className="px-3 py-2 flex items-center gap-2">
        <button className="text-gray-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </button>
        
        <div className="flex gap-1 flex-1">
          <button className={`flex-1 py-1.5 px-2 text-xs rounded ${
            genderSelected === 'female' 
              ? 'bg-pink-500 text-white' 
              : 'bg-gray-100 text-gray-600'
          }`}>
            여성
          </button>
          <button className={`flex-1 py-1.5 px-2 text-xs rounded ${
            genderSelected === 'male' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 text-gray-600'
          }`}>
            남성
          </button>
        </div>
      </div>
    </div>
  )
}

