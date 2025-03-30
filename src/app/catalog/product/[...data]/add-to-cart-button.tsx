'use client'

import { type ReactNode, useState } from 'react'
import { Test } from './test'

type AddToCartButtonProps = {
  title?: string
  children: ReactNode
}

export function AddToCartButton({
  title = 'Adicionar ao Carrinho',
  children,
}: AddToCartButtonProps) {
  const [count, setCount] = useState(0)

  function addToCart() {
    setCount(state => state + 1)
  }

  return (
    <div>
      <button
        type="button"
        onClick={addToCart}
        className="bg-green-500 cursor-pointer hover:bg-green-600 p-2 rounded"
      >
        {title} ({count})
      </button>
      {children}
    </div>
  )
}
