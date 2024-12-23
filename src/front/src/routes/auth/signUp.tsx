import { createFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/auth/signUp')({
  component: signUp,
})

function signUp() {
  return <div>Hello "/signUp"!</div>
}
