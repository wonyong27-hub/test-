'use client'

import React, { useState } from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { ref, get, set } from 'firebase/database'
import { auth, database } from '@/lib/firebase'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [isSignUp, setIsSignUp] = useState(false)
  const [userId, setUserId] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (isSignUp) {
        // 회원가입
        if (!userId || userId.trim() === '') {
          setError('아이디를 입력해주세요')
          setLoading(false)
          return
        }
        if (!email || !email.includes('@')) {
          setError('유효한 이메일을 입력해주세요')
          setLoading(false)
          return
        }
        if (password !== confirmPassword) {
          setError('비밀번호가 일치하지 않습니다')
          setLoading(false)
          return
        }
        if (password.length < 6) {
          setError('비밀번호는 최소 6자 이상이어야 합니다')
          setLoading(false)
          return
        }

        // 아이디 중복 확인
        const userIdRef = ref(database, `users/${userId}`)
        const userIdSnapshot = await get(userIdRef)
        if (userIdSnapshot.exists()) {
          setError('이미 사용 중인 아이디입니다')
          setLoading(false)
          return
        }

        // Firebase Auth에 계정 생성
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        
        // Realtime Database에 사용자 정보 저장 (아이디-이메일 매핑)
        await set(ref(database, `users/${userId}`), {
          email: email,
          uid: userCredential.user.uid,
          createdAt: new Date().toISOString(),
        })

        alert('회원가입이 완료되었습니다!')
        onClose()
        // 폼 초기화
        setUserId('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setIsSignUp(false)
      } else {
        // 로그인 - 아이디로 이메일 찾기
        const userIdRef = ref(database, `users/${userId}`)
        const userIdSnapshot = await get(userIdRef)
        
        if (!userIdSnapshot.exists()) {
          setError('등록되지 않은 아이디입니다')
          setLoading(false)
          return
        }

        const userData = userIdSnapshot.val()
        const userEmail = userData.email

        // 찾은 이메일로 Firebase Auth 로그인
        await signInWithEmailAndPassword(auth, userEmail, password)
        alert('로그인 성공!')
        onClose()
        // 폼 초기화
        setUserId('')
        setPassword('')
      }
    } catch (error: any) {
      let errorMessage = '오류가 발생했습니다'
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = '등록되지 않은 계정입니다'
          break
        case 'auth/wrong-password':
          errorMessage = '비밀번호가 잘못되었습니다'
          break
        case 'auth/email-already-in-use':
          errorMessage = '이미 사용 중인 이메일입니다'
          break
        case 'auth/weak-password':
          errorMessage = '비밀번호가 너무 약합니다'
          break
        case 'auth/invalid-email':
          errorMessage = '유효하지 않은 이메일입니다'
          break
        default:
          errorMessage = error.message || '오류가 발생했습니다'
      }
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setUserId('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setError('')
    setIsSignUp(false)
    onClose()
  }

  return (
    <>
      {/* 배경 오버레이 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleClose}
        />
      )}

      {/* 로그인 모달 */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
          isOpen ? 'block' : 'hidden'
        }`}
        onClick={handleClose}
      >
        <div
          className="bg-white rounded-lg max-w-md w-full shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 헤더 */}
          <div className="bg-black text-white px-6 py-4 flex items-center justify-between rounded-t-lg">
            <h2 className="text-xl font-semibold">
              {isSignUp ? '회원가입' : '로그인'}
            </h2>
            <button
              onClick={handleClose}
              className="text-white text-2xl hover:text-gray-300"
            >
              ✕
            </button>
          </div>

          {/* 폼 */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
                {error}
              </div>
            )}

            {/* 아이디 */}
            <div>
              <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-2">
                아이디
              </label>
              <input
                id="userId"
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="아이디를 입력하세요"
              />
            </div>

            {/* 이메일 (회원가입 시에만 표시) */}
            {isSignUp && (
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  이메일
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>
            )}

            {/* 비밀번호 */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="비밀번호를 입력하세요"
              />
            </div>

            {/* 비밀번호 확인 (회원가입 시) */}
            {isSignUp && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  비밀번호 확인
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="비밀번호를 다시 입력하세요"
                />
              </div>
            )}

            {/* 제출 버튼 */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-colors ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-black hover:bg-gray-800'
              }`}
            >
              {loading ? '처리 중...' : isSignUp ? '회원가입' : '로그인'}
            </button>

            {/* 로그인/회원가입 전환 */}
            <div className="text-center pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp)
                  setError('')
                  setUserId('')
                  setEmail('')
                  setPassword('')
                  setConfirmPassword('')
                }}
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                {isSignUp ? (
                  <>
                    이미 계정이 있으신가요? <span className="font-semibold">로그인</span>
                  </>
                ) : (
                  <>
                    계정이 없으신가요? <span className="font-semibold">회원가입</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

