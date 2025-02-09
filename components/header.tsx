import * as React from 'react'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  IconGitHub,
  IconSeparator,
} from '@/components/ui/icons'

async function UserOrLogin() {
  return (
    <>
      <h1 className='text-2xl font-bold text-white'>
        Finn<span className='text-orange-600'>Bot</span>
      </h1>

      <div className="flex items-center font-semibold">
        <IconSeparator className="size-6 text-muted-foreground/50" />
        <a
          href="/new"
          rel="noopener noreferrer"
          className={`${cn(buttonVariants({ variant: 'ghost' }))} `}
          style={{ borderRadius: 0, color: '#F55036', padding: '4px' }}
        >
          <span className="flex hover:text-white">Start New Chat</span>
        </a>
      </div>
    </>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b bg-teal-950 backdrop-blur-xl">
      <div className="flex items-center">
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <UserOrLogin />
        </React.Suspense>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <a
          target="_blank"
          href="https://github.com/NIDHIPATEL2807/FinSynergy"
          rel="noopener noreferrer"
          className={`${cn(buttonVariants({ variant: 'outline' }))} bg-orange-400`}
          style={{ borderRadius: 0, margin: 0, border: '1px solid rgb(4 47 46)' }}
        >
          <IconGitHub />
          <span className="hidden ml-2 md:flex">GitHub</span>
        </a>
      </div>
    </header>
  )
}
