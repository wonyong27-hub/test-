'use client'

import { useState, useMemo } from 'react'
import NavigationBar from '@/components/NavigationBar'
import ProductCard from '@/components/ProductCard'
import ProductDetailModal from '@/components/ProductDetailModal'
import SearchModal from '@/components/SearchModal'
import Footer from '@/components/Footer'
import BannerSection from '@/components/BannerSection'
import { useCategory } from '@/contexts/CategoryContext'
import { allProducts } from '@/lib/products'

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { selectedCategory } = useCategory()

  const handleProductClick = (product: any) => {
    setSelectedProduct(product)
    setIsDetailModalOpen(true)
  }

  const handleSearchProductClick = (product: any) => {
    setSelectedProduct(product)
    setIsDetailModalOpen(true)
    setIsSearchOpen(false)
  }

  // 선택된 카테고리에 맞는 상품 필터링
  const filteredProducts = useMemo(() => {
    return allProducts[selectedCategory as keyof typeof allProducts] || []
  }, [selectedCategory])

  return (
    <div className="min-h-screen flex flex-col relative bg-pink-50">
      <NavigationBar onSearchClick={() => setIsSearchOpen(true)} />
      
      {/* 상단 네비게이션 바 공간 */}
      <div className="h-[72px] md:h-[80px] lg:h-[88px]"></div>
      
      {/* 메인 컨텐츠 (데스크톱에서만 카테고리 메뉴 공간 확보) */}
      <div className="md:ml-64 lg:ml-72 relative z-10 bg-pink-50">
        {/* 배너 섹션 */}
        <BannerSection />
        
        {/* 카테고리별 상품 그리드 */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 py-4 md:py-6 items-stretch relative z-10">
              {filteredProducts.map((product: any) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  tags={product.tags}
                  brand={product.brand}
                  name={product.name}
                  currentPrice={product.currentPrice}
                  originalPrice={product.originalPrice}
                  discountRate={product.discountRate}
                  likes={product.likes}
                  rating={product.rating}
                  reviews={product.reviews}
                  hasGiftIcon={product.hasGiftIcon || false}
                  deliveryInfo={product.deliveryInfo}
                  size={product.size}
                  onProductClick={handleProductClick}
                />
              ))}
            </div>
          ) : (
            <div className="py-12 md:py-16 text-center">
              <p className="text-gray-500 text-lg md:text-xl">
                선택한 카테고리에 상품이 없습니다.
              </p>
            </div>
          )}
        </div>

        {/* 상품 상세 모달 */}
        <ProductDetailModal
          isOpen={isDetailModalOpen}
          onClose={() => {
            setIsDetailModalOpen(false)
            setSelectedProduct(null)
          }}
          product={selectedProduct}
        />

        {/* 검색 모달 */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onProductClick={handleSearchProductClick}
        />

        {/* 푸터 */}
        <Footer />
      </div>
    </div>
  )
}

