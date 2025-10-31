import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Nanum_Brush_Script } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/contexts/CartContext'
import { CategoryProvider } from '@/contexts/CategoryContext'

const nanumBrushScript = Nanum_Brush_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-nanum-brush-script',
})

export const metadata: Metadata = {
  title: '쇼핑몰 - 추천 상품',
  description: '추천 상품을 확인하세요',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ko" className={nanumBrushScript.variable}>
      <body>
        <CartProvider>
          <CategoryProvider>{children}</CategoryProvider>
        </CartProvider>
      </body>
    </html>
  )
}
