"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Search, Bell, Paperclip, ArrowRight, Zap, Image as ImageIcon, MoreHorizontal, Send, Lock, MessageSquare } from "lucide-react";
import NavBar from "@/components/Navbar";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { y: -5, transition: { duration: 0.3, ease: "easeOut" } }
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50 overflow-hidden transition-colors duration-500">
      <NavBar />
      <main className="flex-1 flex flex-col items-center justify-center relative pt-24 pb-32">
        <div
          className="absolute inset-0 z-0 opacity-[0.4] dark:opacity-[0.2]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(120, 120, 120, 0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neutral-200/50 dark:bg-neutral-800/20 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8 max-w-4xl mx-auto text-center mb-20">
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.05]">
              Nexus <span className="text-primary dark:text-primary">Chat</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto font-light">
              The minimal standard for professional communication. Encrypted by default, designed for focus.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/register" className="group px-8 py-4 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 font-medium transition-all flex items-center justify-center gap-2 shadow-xl shadow-neutral-900/10 dark:shadow-none">
                Start Chatting <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/login" className="px-8 py-4 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 text-neutral-600 dark:text-neutral-300 font-medium transition-all flex items-center justify-center backdrop-blur-sm bg-white/50 dark:bg-neutral-950/50">
                Log In
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-6xl">
            <motion.div variants={cardVariants} whileHover="hover" className="md:col-span-2 min-h-[300px] rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 overflow-hidden relative group">
              <div className="absolute inset-0 px-8 pt-20 pb-0 flex flex-col justify-end">
                <div className="relative w-full h-[320px] shadow-2xl rounded-t-xl overflow-hidden translate-y-8 group-hover:translate-y-4 transition-transform duration-500 ease-out border-t border-x border-neutral-200 dark:border-neutral-800">
                  <div className="w-full h-full bg-white dark:bg-neutral-950 flex rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden relative">
                    <div className="w-16 bg-neutral-50 dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 flex flex-col items-center py-4 gap-4">
                      <div className="w-8 h-8 rounded-lg bg-neutral-900 dark:bg-white flex items-center justify-center mb-2">
                        <div className="w-4 h-4 bg-white dark:bg-neutral-900 rounded-sm" />
                      </div>
                      <div className="w-8 h-8 rounded-md bg-blue-500/10 text-blue-500 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-current" />
                      </div>
                      <div className="w-8 h-8 rounded-md text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center transition-colors">
                        <div className="w-4 h-4 border-2 border-current rounded-sm opacity-50" />
                      </div>
                      <div className="w-8 h-8 rounded-md text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center transition-colors">
                        <div className="w-4 h-4 border-2 border-current rounded-full opacity-50" />
                      </div>
                      <div className="mt-auto w-8 h-8 rounded-full bg-gradient-to-tr from-purple-400 to-blue-400" />
                    </div>
                    <div className="flex-1 flex flex-col bg-white dark:bg-neutral-950">
                      <div className="h-14 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between px-4 bg-white/50 dark:bg-neutral-950/50 backdrop-blur-sm">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600" />
                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-neutral-950 rounded-full"></div>
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">Design Team</div>
                            <div className="text-[10px] text-neutral-500">3 members online</div>
                          </div>
                        </div>
                        <div className="flex gap-3 text-neutral-400">
                          <Search className="w-4 h-4" />
                          <Bell className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="flex-1 p-4 space-y-4 overflow-hidden relative">
                        <div className="flex justify-center">
                          <span className="text-[10px] font-medium text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded-full">Today</span>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-red-400 mt-1 shrink-0" />
                          <div className="flex flex-col gap-1 max-w-[80%]">
                            <div className="flex items-baseline gap-2">
                              <span className="text-[10px] font-medium text-neutral-600 dark:text-neutral-400">Sarah</span>
                              <span className="text-[9px] text-neutral-400">10:42 AM</span>
                            </div>
                            <div className="bg-neutral-100 dark:bg-neutral-900 p-2.5 rounded-2xl rounded-tl-none text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                              Just uploaded the new high-fidelity mockups to the drive. Let me know what you think! 🎨
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-3 flex-row-reverse">
                          <div className="flex flex-col gap-1 items-end max-w-[80%]">
                            <div className="bg-blue-600 text-white p-2.5 rounded-2xl rounded-tr-none text-xs leading-relaxed shadow-sm shadow-blue-600/20">
                              Looks super clean! I love the new dark mode palette. ⚫️🔵
                            </div>
                            <span className="text-[9px] text-neutral-400">Read 10:45 AM</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 mt-1 shrink-0" />
                          <div className="bg-neutral-100 dark:bg-neutral-900 px-3 py-2 rounded-2xl rounded-tl-none flex items-center gap-1">
                            <div className="w-1 h-1 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-1 h-1 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-1 h-1 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                        </div>
                      </div>
                      <div className="p-3 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30">
                        <div className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full h-9 flex items-center px-3 gap-2 shadow-sm">
                          <Paperclip className="w-3.5 h-3.5 text-neutral-400" />
                          <input disabled className="flex-1 bg-transparent text-xs outline-none placeholder:text-neutral-400 text-neutral-800 dark:text-neutral-200" placeholder="Type a message..." />
                          <div className="w-6 h-6 bg-neutral-900 dark:bg-white rounded-full flex items-center justify-center">
                            <ArrowRight className="w-3 h-3 text-white dark:text-neutral-900" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-6 left-6 z-20">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Desktop Experience</h3>
                <p className="text-neutral-500 text-sm">Distraction-free interface.</p>
              </div>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-neutral-50/20 via-transparent to-transparent dark:from-neutral-900/20" />
            </motion.div>

            <motion.div variants={cardVariants} whileHover="hover" className="md:col-span-1 min-h-[300px] rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden relative group flex flex-col justify-between">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-50/80 dark:to-zinc-900/80"></div>
              </div>
              <div className="relative flex-grow flex items-center justify-center py-12">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/10 blur-[60px] rounded-full group-hover:bg-blue-500/20 transition-all duration-500"></div>
                <div className="relative z-10 w-32 h-32 rounded-3xl border border-white/60 dark:border-zinc-700/60 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500 ease-out">
                  <div className="w-20 h-20 bg-gradient-to-br from-white to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-2xl shadow-inner border border-zinc-100 dark:border-zinc-700/50 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-400 ease-in-out z-20"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-zinc-400 group-hover:text-blue-500 transition-colors duration-300 relative z-10">
                      <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="relative z-20 p-8 pt-0">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  Zero-Knowledge Security
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
                  Built on a trustless architecture. Your keys never leave your device, ensuring total privacy.
                </p>
              </div>
            </motion.div>

            <motion.div variants={cardVariants} whileHover="hover" className="md:col-span-1 min-h-[300px] rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 dark:bg-white overflow-hidden relative group flex flex-col justify-between p-6">
              <div className="text-white dark:text-neutral-900">
                <Zap className="w-8 h-8 mb-3" />
                <h3 className="font-semibold text-xl">Instant<br />Sync</h3>
              </div>
              <div className="relative h-20 w-full overflow-hidden">
                <div className="absolute right-0 top-1/2 w-32 h-1 bg-white/20 dark:bg-neutral-900/20 rounded-full" />
                <div className="absolute right-[-20px] top-1/2 w-16 h-1 bg-white/60 dark:bg-neutral-900/60 rounded-full translate-y-2" />
                <div className="absolute right-10 top-1/2 w-20 h-1 bg-white/40 dark:bg-neutral-900/40 rounded-full -translate-y-2" />
              </div>
            </motion.div>

            <motion.div variants={cardVariants} whileHover="hover" className="md:col-span-2 min-h-[300px] rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 overflow-hidden relative group">
              <div className="absolute top-6 left-6 z-20">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Seamless Handoff</h3>
                <p className="text-neutral-500 text-sm">Switch devices without missing a beat.</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pt-20">
                <div className="flex gap-6 items-end relative grayscale-[50%] group-hover:grayscale-0 transition-all duration-500 ease-in-out transform translate-y-4">
                  <div className="relative z-20 w-32 h-64 border-[6px] border-neutral-800 dark:border-neutral-900 rounded-[2.5rem] bg-neutral-900 shadow-2xl overflow-hidden flex flex-col transition-transform duration-500 group-hover:-translate-x-4">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-neutral-900 rounded-b-xl z-30"></div>
                    <div className="w-full h-full bg-neutral-900 relative overflow-hidden flex flex-col">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-neutral-900 opacity-90"></div>
                      <div className="flex justify-between px-4 pt-2 mb-4 text-[8px] text-white/50 relative z-10">
                        <span>9:41</span>
                        <div className="w-3 h-2 border border-white/30 rounded-[1px]"></div>
                      </div>
                      <div className="flex-1 px-3 flex flex-col gap-3 relative z-10">
                        <div className="bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-sm transition-all duration-500">
                          <div className="flex gap-3 items-center mb-2">
                            <div className="flex flex-col gap-1.5">
                              <div className="h-2 w-13 bg-white/40 rounded-full"></div>
                              <div className="h-1.5 w-10 bg-white/20 rounded-full"></div>
                            </div>
                          </div>
                          <div className="h-12 w-full bg-gradient-to-r from-white/5 to-white/10 rounded-lg border border-white/5"></div>
                        </div>
                        <div className="space-y-2 mt-1">
                          <div className="w-full h-10 bg-white/5 rounded-xl border border-white/5 flex items-center px-2 gap-2">
                            <div className="w-6 h-6 rounded-full bg-white/10"></div>
                            <div className="h-1.5 w-12 bg-white/20 rounded-full"></div>
                          </div>
                          <div className="w-full h-10 bg-white/5 rounded-xl border border-white/5 flex items-center px-2 gap-2">
                            <div className="w-6 h-6 rounded-full bg-white/10"></div>
                            <div className="h-1.5 w-12 bg-white/20 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-auto w-full flex justify-center pb-2 relative z-10">
                        <div className="w-12 h-1 bg-white/20 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:flex relative -ml-12 mb-8 z-10 w-72 h-48 border-[6px] border-neutral-300 dark:border-neutral-700 rounded-2xl bg-white dark:bg-neutral-900 shadow-xl flex-col overflow-hidden transition-transform duration-500 group-hover:translate-x-4">
                    <div className="w-full h-8 bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 flex items-center px-3 gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="flex-1 flex bg-white dark:bg-neutral-950">
                      <div className="w-16 border-r border-neutral-200 dark:border-neutral-800 flex flex-col gap-3 items-center py-4 bg-neutral-50 dark:bg-neutral-900/50">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center">
                          <div className="w-4 h-4 rounded bg-blue-500"></div>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-neutral-200 dark:bg-neutral-800"></div>
                        <div className="w-8 h-8 rounded-lg bg-neutral-200 dark:bg-neutral-800"></div>
                      </div>
                      <div className="flex-1 p-4">
                        <div className="flex justify-between items-center mb-4">
                          <div className="h-3 w-24 bg-neutral-200 dark:bg-neutral-800 rounded-full"></div>
                          <div className="h-6 w-6 rounded-full bg-neutral-200 dark:bg-neutral-800"></div>
                        </div>
                        <div className="w-full h-24 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-500/20 p-3 flex gap-3 group-hover:animate-pulse transition-all duration-500">
                          <div className="w-16 h-full rounded-lg bg-white dark:bg-neutral-800 shadow-sm"></div>
                          <div className="flex-1 flex flex-col gap-2 justify-center">
                            <div className="h-2 w-3/4 bg-blue-200 dark:bg-blue-500/40 rounded-full"></div>
                            <div className="h-2 w-1/2 bg-blue-200 dark:bg-blue-500/40 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}