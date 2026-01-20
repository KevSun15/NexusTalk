"use client"
import * as React from "react"
import { Moon, Sun, AudioLines } from "lucide-react"
import { useTheme } from "next-themes"
import { Inter, Nunito } from 'next/font/google'
import { Button } from "@/components/ui/button"

const inter = Nunito({ subsets: ['latin'] })

export default function NavBar() {
  const [isMounted, setIsMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <nav className={`
      w-full flex items-center justify-between px-8 py-3 
      bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60
      border-b border-primary/10
      shadow-lg shadow-primary/10
      ${inter.className}
    `}>
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500 blur-[20px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative bg-primary/10 p-2 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-colors">
            <AudioLines className="h-5 w-5 text-primary" />
          </div>
        </div>

        <div className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-tight text-foreground leading-none">
              NEXUSCHAT
            </h1>
        </div>
      </div>
      
      <div className="flex items-center gap-4">        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full border border-2 p-5 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>
    </nav>
  ) 
}