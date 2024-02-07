'use client'

import { signOut, signIn, useSession } from "next-auth/react"

export default function ButtonLogin() {
  const { data: session } = useSession()

  if (session) {
    return (
      <span onClick={() => signOut()}>
        Sign out
      </span>
    )
  }
  return (
    <span onClick={() => signIn()}>
      Sign in
    </span>

  )
}