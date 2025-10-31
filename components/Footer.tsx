'use client'

import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-auto">
      {/* 상단 섹션 - 흰색 배경 */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
          {/* 상단 링크 */}
          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-gray-600 mb-6">
            <a href="#" className="hover:text-black">회사소개</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-black">Investor Relations</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-black">인재채용</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-black">입점/제휴문의</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-black">공지사항</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-black">고객의 소리</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-black">이용약관</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-black">개인정보 처리방침</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-black">정보보호/개인정보보호 인증</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-black">쿠팡페이 이용약관</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-black">신뢰관리센터</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-black">제휴마케팅</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-black">광고안내</a>
            <div className="ml-auto flex items-center gap-1 text-gray-600">
              <span>Global Site</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* 회사 정보 및 고객 서비스 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* 왼쪽 - 회사 정보 */}
            <div>
              <div className="text-xl md:text-2xl font-bold text-gray-800 mb-4">BigBoss</div>
              <div className="text-xs md:text-sm text-gray-600 space-y-1">
                <p>상호명 및 호스팅 서비스 제공 : BigBoss (주)</p>
                <p>대표이사 : 홍길동</p>
                <p>서울시 강남구 테헤란로 123</p>
                <p>사업자 등록번호 : 123-45-67890</p>
                <p>통신판매업신고 : 2024-서울강남-0001</p>
                <p>email: help@bigboss.com</p>
                <a href="#" className="text-gray-600 hover:text-black underline">사업자정보 확인 &gt;</a>
              </div>
            </div>

            {/* 오른쪽 - 고객 서비스 */}
            <div>
              <div className="text-xs md:text-sm text-gray-600 mb-3">
                365고객센터 | 전자금융거래분쟁처리담당 | 채무지급보증 안내
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                1577-7011 <span className="text-sm font-normal">(유료)</span>
              </div>
              <div className="text-xs md:text-sm text-gray-600 space-y-1 mb-3">
                <p>당사는 고객님이 현금 결제한 금액에 대해 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.</p>
              </div>
              <a href="#" className="text-xs md:text-sm text-gray-600 hover:text-black underline">서비스 가입사실 확인 &gt;</a>
            </div>
          </div>

          {/* 인증 마크 */}
          <div className="flex gap-4 mt-6 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center mb-1">
                <span className="text-xs text-gray-600">인증</span>
              </div>
              <p className="text-xs text-gray-600">위상차단시스템</p>
              <p className="text-xs text-gray-600">운영매장</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded flex items-center justify-center mb-1">
                <span className="text-xs font-bold text-blue-600">P C P</span>
              </div>
              <p className="text-xs text-gray-600">개인정보보호</p>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 섹션 - 어두운 회색 배경 */}
      <div className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
          {/* 법적 고지 */}
          <div className="text-xs md:text-sm text-gray-300 space-y-3 mb-6">
            <p>
              BigBoss는 마켓플레이스(오픈마켓) 상품의 통신판매중개자이며, 통신판매 당사자가 아닙니다.
              따라서 BigBoss는 상품, 거래정보 및 거래에 대해 책임을 지지 않습니다.
            </p>
            <p>
              소비자 보호와 분쟁 해결을 위해 "신뢰관리센터(trust@bigboss.com)"를 운영하고 있습니다.
            </p>
          </div>

          {/* 저작권 및 소셜 미디어 */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-700">
            <div className="text-xs md:text-sm text-gray-400">
              Copyright © BigBoss Corp. 2024-2025 All Rights Reserved.
            </div>
            <div className="flex gap-3">
              {/* Facebook */}
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="text-white font-bold text-sm">f</span>
              </a>
              {/* Blog */}
              <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                <span className="text-white text-xs font-semibold">blog</span>
              </a>
              {/* Instagram */}
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}




