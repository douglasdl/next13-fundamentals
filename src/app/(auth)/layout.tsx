import type { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="text-xl font-bold">Logo do App</div>
      <div>{children}</div>
    </div>
  )
}
