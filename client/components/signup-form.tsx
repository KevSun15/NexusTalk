"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function SignupForm({ className, ...props }: React.ComponentProps<"div">) {
  const { theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => { setIsMounted(true) }, [])
  if (!isMounted) return null

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Create your account</h1>
                <p className="text-muted-foreground text-sm text-balance">Enter your email below to create your account</p>
              </div>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </Field>
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input id="password" type="password" required />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
                    <Input id="confirm-password" type="password" required />
                  </Field>
                </Field>
                <FieldDescription>Must be at least 8 characters long.</FieldDescription>
              </Field>
              <Field>
                <Button type="submit">Create Account</Button>
              </Field>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">Or continue with</FieldSeparator>
              <Field className="grid grid-cols-2 gap-4">
                <Button variant="outline" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" fill="currentColor" />
                  </svg>
                  <span className="sr-only">Sign up with Apple</span>
                </Button>
                <Button variant="outline" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor" />
                  </svg>
                  <span className="sr-only">Sign up with Google</span>
                </Button>
              </Field>
              <FieldDescription className="text-center">Already have an account? <a href="#">Sign in</a></FieldDescription>
            </FieldGroup>
          </form>

          <div className="relative w-full h-full min-h-[500px] overflow-hidden bg-slate-50/50 dark:bg-slate-950/50 flex items-center justify-center p-6 lg:p-12">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] mask-image-[radial-gradient(ellipse_at_center,black_60%,transparent_100%)]"></div>
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse [animation-duration:4s]"></div>
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-sky-400/20 dark:bg-sky-600/10 rounded-full blur-3xl animate-pulse [animation-duration:6s] delay-1000"></div>
            </div>

            <div className="relative w-full max-w-md z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-blue-200/30 dark:border-blue-800/30 rounded-[2.5rem] scale-95 blur-[1px]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-100/20 dark:border-blue-900/20 rounded-[3rem] scale-90 blur-[2px]"></div>
              <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 rounded-[2rem] shadow-2xl overflow-hidden transition-transform hover:scale-[1.01] duration-500">
                <div className="px-6 py-4 border-b border-slate-100/50 dark:border-slate-800/50 flex items-center justify-between bg-gradient-to-r from-slate-50/80 to-white/80 dark:from-slate-900/80 dark:to-slate-900/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-sky-400 rounded-full flex items-center justify-center shadow-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white"><path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9-9s-9 3.97-9 9c0 2.461 1.067 4.71 2.847 6.322.518 1.786.957 3.318 1.201 4.322z" clipRule="evenodd" /></svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-none">Nexus Chat</h3>
                      <span className="text-[10px] text-green-500 font-medium flex items-center gap-1"><span className="block w-1.5 h-1.5 bg-green-500 rounded-full"></span> Online</span>
                    </div>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-slate-400"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
                </div>
                <div className="p-6 space-y-6 h-[320px] overflow-hidden relative flex flex-col justify-end">
                  <div className="flex items-end space-x-2 animate-in slide-in-from-left-4 duration-700 fill-mode-both fade-in">
                    <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0 flex items-center justify-center"><span className="text-xs text-slate-500">NC</span></div>
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-bl-none max-w-[80%] shadow-sm"><p className="text-sm text-slate-700 dark:text-slate-300">👋 Hello! Welcome to the future of secure messaging.</p></div>
                  </div>
                  <div className="flex items-end justify-end space-x-2 animate-in slide-in-from-right-4 duration-700 delay-500 fill-mode-both fade-in">
                    <div className="bg-blue-500 dark:bg-blue-600 p-3 rounded-2xl rounded-br-none max-w-[80%] shadow-md shadow-blue-500/20"><p className="text-sm text-white font-medium">Looks great. I'm setting up my account now!</p></div>
                  </div>
                  <div className="flex items-end space-x-2 animate-in slide-in-from-left-4 duration-700 delay-1000 fill-mode-both fade-in">
                    <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0 flex items-center justify-center"><span className="text-xs text-slate-500">NC</span></div>
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-bl-none max-w-[80%] shadow-sm flex items-center gap-2">
                      <p className="text-sm text-slate-700 dark:text-slate-300">Fantastic. Your private workspace is ready.</p>
                    </div>
                  </div>
                  <div className="flex items-end space-x-2 pt-2 animate-in fade-in delay-[1500ms] fill-mode-both">
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-bl-none shadow-sm flex space-x-1.5 h-10 items-center">
                      <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100/50 dark:border-slate-800/50 flex items-center gap-3 opacity-60">
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-slate-400"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                  </div>
                  <div className="flex-1 h-8 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700"></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</FieldDescription>
    </div>
  )
}