"use client"

import * as React from "react"
import { Sun, Moon, Laptop } from 'lucide-react'
import { useTheme } from "next-themes"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="min-w-[8rem] rounded-md p-1 shadow-md bg-white dark:bg-gray-800" sideOffset={5}>
          <DropdownMenu.Item
      className="flex items-center px-2 py-1 outline-none cursor-default hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200" 
      onSelect={() => setTheme("light")}
    >
      <Moon className="w-4 h-4 mr-2" />
      Dark
    </DropdownMenu.Item>
    <DropdownMenu.Item 
      className="flex items-center px-2 py-1 outline-none cursor-default hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200" 
      onSelect={() => setTheme("dark")}
    >
      <Sun className="w-4 h-4 mr-2" />
      Light
    </DropdownMenu.Item>
    <DropdownMenu.Item 
      className="flex items-center px-2 py-1 outline-none cursor-default hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200" 
      onSelect={() => setTheme("system")}
    >
      <Laptop className="w-4 h-4 mr-2" />
      System
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}