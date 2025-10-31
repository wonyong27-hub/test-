// 카테고리별 상품 데이터
export const allProducts = {
  '특가세일': [
    { id: 'sale-1', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop', tags: ['특가세일'], brand: '베이비스토리', name: '신생아 순면 내의 세트 3벌', currentPrice: '24,900원', originalPrice: '39,900원', discountRate: '38', likes: '4,123', rating: 5, reviews: '1,456', hasGiftIcon: true, size: '신생아' },
    { id: 'sale-2', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop', tags: ['특가세일'], brand: '키즈하우스', name: '유아용 스타터 외출복 세트', currentPrice: '34,900원', originalPrice: '59,900원', discountRate: '42', likes: '6,789', rating: 5, reviews: '2,234', hasGiftIcon: true, deliveryInfo: '무료배송', size: '6개월' },
    { id: 'sale-3', image: 'https://images.unsplash.com/photo-1584990347498-3e72a0e67b5f?w=400&h=400&fit=crop', tags: ['특가세일'], brand: '베이비룸', name: '아기 수면용 곰돌이 잠옷 2벌 세트', currentPrice: '27,900원', originalPrice: '49,900원', discountRate: '44', likes: '5,432', rating: 5, reviews: '987', size: '80cm' },
    { id: 'sale-4', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop', tags: ['특가세일'], brand: '토드랜드', name: '유아용 겨울 외출복 패키지', currentPrice: '69,900원', originalPrice: '119,900원', discountRate: '42', likes: '8,765', rating: 5, reviews: '3,456', deliveryInfo: '당일발송', size: '100cm' },
    { id: 'sale-5', image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=400&h=400&fit=crop', tags: ['특가세일'], brand: '베이비브랜드', name: '유아용 곰돌이 수면잠옷 세트', currentPrice: '29,900원', originalPrice: '49,900원', discountRate: '40', likes: '3,245', rating: 5, reviews: '892', hasGiftIcon: true, size: '90cm' },
    { id: 'sale-6', image: 'https://images.unsplash.com/photo-1604917621956-10dfa7cce0d7?w=400&h=400&fit=crop', tags: ['특가세일'], brand: '키즈랜드', name: '아기 신생아 옷 3벌 세트', currentPrice: '39,900원', originalPrice: '69,900원', discountRate: '43', likes: '5,678', rating: 5, reviews: '1,234', hasGiftIcon: true, size: '100cm' },
  ],
  '렌덤박스': [
    { id: 'random-1', image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?w=400&h=400&fit=crop', tags: ['렌덤박스'], brand: '럭키박스', name: '신비의 아기용품 랜덤박스', currentPrice: '19,900원', originalPrice: '49,900원', discountRate: '60', likes: '12,345', rating: 5, reviews: '5,678', size: '랜덤' },
    { id: 'random-2', image: 'https://images.unsplash.com/photo-1583917337713-63b6de8c97c5?w=400&h=400&fit=crop', tags: ['렌덤박스'], brand: '서프라이즈', name: '프리미엄 아기 옷 랜덤 세트', currentPrice: '29,900원', originalPrice: '89,900원', discountRate: '67', likes: '9,876', rating: 5, reviews: '3,456', hasGiftIcon: true, size: '랜덤' },
    { id: 'random-3', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop', tags: ['렌덤박스'], brand: '행운박스', name: '럭키 아기 패키지 랜덤', currentPrice: '39,900원', originalPrice: '119,900원', discountRate: '67', likes: '15,432', rating: 5, reviews: '7,890', size: '랜덤' },
  ],
  '상의': [
    { id: 'top-1', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop', tags: [], brand: '키즈패션', name: '아기 긴팔 티셔츠', currentPrice: '15,900원', originalPrice: '29,900원', discountRate: '47', likes: '3,234', rating: 5, reviews: '1,234', size: '80cm' },
    { id: 'top-2', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop', tags: [], brand: '베이비웨어', name: '유아용 후드티', currentPrice: '24,900원', originalPrice: '39,900원', discountRate: '38', likes: '5,678', rating: 5, reviews: '2,345', hasGiftIcon: true, size: '90cm' },
    { id: 'top-3', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop', tags: [], brand: '토들러', name: '신생아 민소매 티', currentPrice: '12,900원', originalPrice: '19,900원', discountRate: '35', likes: '2,456', rating: 5, reviews: '987', size: '70cm' },
    { id: 'top-4', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop', tags: [], brand: '키즈랜드', name: '아기 체크 셔츠', currentPrice: '18,900원', originalPrice: '32,900원', discountRate: '43', likes: '4,567', rating: 5, reviews: '1,567', size: '100cm' },
  ],
  '하의': [
    { id: 'bottom-1', image: 'https://images.unsplash.com/photo-1594736797933-d0c12c64fc51?w=400&h=400&fit=crop', tags: [], brand: '베이비팜', name: '아기 바지', currentPrice: '19,900원', originalPrice: '34,900원', discountRate: '43', likes: '4,123', rating: 5, reviews: '1,456', size: '80cm' },
    { id: 'bottom-2', image: 'https://images.unsplash.com/photo-1594736797933-d0c12c64fc51?w=400&h=400&fit=crop', tags: [], brand: '키즈하우스', name: '유아용 반바지', currentPrice: '14,900원', originalPrice: '24,900원', discountRate: '40', likes: '3,567', rating: 5, reviews: '1,234', size: '90cm' },
    { id: 'bottom-3', image: 'https://images.unsplash.com/photo-1594736797933-d0c12c64fc51?w=400&h=400&fit=crop', tags: [], brand: '토드랜드', name: '아기 트레이닝 팬츠', currentPrice: '22,900원', originalPrice: '39,900원', discountRate: '43', likes: '5,789', rating: 5, reviews: '2,345', hasGiftIcon: true, size: '100cm' },
    { id: 'bottom-4', image: 'https://images.unsplash.com/photo-1594736797933-d0c12c64fc51?w=400&h=400&fit=crop', tags: [], brand: '베이비스토리', name: '신생아 바지 3벌 세트', currentPrice: '39,900원', originalPrice: '69,900원', discountRate: '43', likes: '6,432', rating: 5, reviews: '2,678', size: '70cm' },
  ],
  '신발': [
    { id: 'shoe-1', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', tags: [], brand: '베이비슈즈', name: '아기 운동화', currentPrice: '29,900원', originalPrice: '49,900원', discountRate: '40', likes: '7,234', rating: 5, reviews: '2,890', size: '140mm' },
    { id: 'shoe-2', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', tags: [], brand: '키즈풋', name: '유아용 샌들', currentPrice: '19,900원', originalPrice: '34,900원', discountRate: '43', likes: '5,678', rating: 5, reviews: '1,567', size: '130mm' },
    { id: 'shoe-3', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', tags: [], brand: '토들러풋', name: '아기 부츠', currentPrice: '34,900원', originalPrice: '59,900원', discountRate: '42', likes: '8,456', rating: 5, reviews: '3,234', hasGiftIcon: true, size: '150mm' },
    { id: 'shoe-4', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', tags: [], brand: '베이비팜', name: '신생아 신발 세트', currentPrice: '24,900원', originalPrice: '44,900원', discountRate: '45', likes: '4,567', rating: 5, reviews: '1,789', size: '120mm' },
  ],
  '악세사리': [
    { id: 'acc-1', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop', tags: [], brand: '베이비액세', name: '아기 모자', currentPrice: '12,900원', originalPrice: '22,900원', discountRate: '44', likes: '3,456', rating: 5, reviews: '1,234', size: 'Free' },
    { id: 'acc-2', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop', tags: [], brand: '키즈액세', name: '유아용 장갑 세트', currentPrice: '9,900원', originalPrice: '17,900원', discountRate: '45', likes: '2,789', rating: 5, reviews: '987', size: 'Free' },
    { id: 'acc-3', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop', tags: [], brand: '토들러액세', name: '아기 양말 5켤레', currentPrice: '7,900원', originalPrice: '14,900원', discountRate: '47', likes: '5,234', rating: 5, reviews: '2,345', size: 'Free' },
    { id: 'acc-4', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop', tags: [], brand: '베이비브랜드', name: '신생아 목도리', currentPrice: '8,900원', originalPrice: '15,900원', discountRate: '44', likes: '3,678', rating: 5, reviews: '1,567', size: 'Free' },
  ],
  '아기용품': [
    { id: 'baby-1', image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=400&h=400&fit=crop', tags: [], brand: '베이비브랜드', name: '유아용 곰돌이 수면잠옷 세트', currentPrice: '29,900원', originalPrice: '49,900원', discountRate: '40', likes: '3,245', rating: 5, reviews: '892', hasGiftIcon: true, size: '90cm' },
    { id: 'baby-2', image: 'https://images.unsplash.com/photo-1604917621956-10dfa7cce0d7?w=400&h=400&fit=crop', tags: [], brand: '키즈랜드', name: '아기 신생아 옷 3벌 세트', currentPrice: '39,900원', originalPrice: '69,900원', discountRate: '43', likes: '5,678', rating: 5, reviews: '1,234', hasGiftIcon: true, size: '100cm' },
    { id: 'baby-3', image: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?w=400&h=400&fit=crop', tags: [], brand: '베이비팜', name: '유아용 프리미엄 바디수트 5벌', currentPrice: '49,900원', originalPrice: '89,900원', discountRate: '45', likes: '7,891', rating: 5, reviews: '2,567', size: '110cm' },
    { id: 'baby-4', image: 'https://images.unsplash.com/photo-1583917337713-63b6de8c97c5?w=400&h=400&fit=crop', tags: [], brand: '토들러', name: '아기 겨울 외출복 세트', currentPrice: '59,900원', originalPrice: '99,900원', discountRate: '40', likes: '4,562', rating: 5, reviews: '1,789', hasGiftIcon: true, size: '120cm' },
    { id: 'baby-5', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop', tags: [], brand: '베이비스토리', name: '신생아 순면 내의 세트 3벌', currentPrice: '24,900원', originalPrice: '39,900원', discountRate: '38', likes: '4,123', rating: 5, reviews: '1,456', hasGiftIcon: true, size: '신생아' },
    { id: 'baby-6', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop', tags: [], brand: '키즈하우스', name: '유아용 스타터 외출복 세트', currentPrice: '34,900원', originalPrice: '59,900원', discountRate: '42', likes: '6,789', rating: 5, reviews: '2,234', hasGiftIcon: true, deliveryInfo: '무료배송', size: '6개월' },
  ],
}



