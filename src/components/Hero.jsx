import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-36 sm:pb-24 sm:pt-40 lg:px-8 lg:pb-28 lg:pt-44">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-[400px] w-[550px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[130px] sm:h-[500px] sm:w-[700px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* =========================
            HERO CONTENT
        ========================== */}
        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 sm:mb-7 sm:px-3.5 sm:py-2"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />

            <span className="text-[11px] font-medium text-white/70 sm:text-sm">
              The intelligent workspace for developers
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-8xl lg:leading-[0.95]"
          >
            Build faster.
            <br />

            <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
              Ship smarter.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-white/50 sm:mt-7 sm:text-lg sm:leading-8"
          >
            DevFlow brings AI-powered coding, debugging, and project
            intelligence into one focused workspace built for modern
            development teams.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row"
          >
            <a
              href="#get-started"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Start building

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#product"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/[0.07] hover:text-white sm:w-auto"
            >
              <Play size={15} />

              Explore the workspace
            </a>
          </motion.div>
        </div>

        {/* =========================
            PRODUCT PREVIEW
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto mt-14 w-full max-w-5xl px-0.5 sm:mt-20"
        >
          {/* Preview glow */}
          <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-blue-500/10 blur-[70px] sm:-inset-10 sm:blur-[80px]" />

          {/* Browser frame */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0c] shadow-2xl shadow-black/50">

            {/* =========================
                BROWSER HEADER
            ========================== */}
            <div className="flex h-10 items-center border-b border-white/10 bg-white/[0.02] px-3 sm:h-11 sm:px-4">

              {/* Browser dots */}
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/20 sm:h-2.5 sm:w-2.5" />
                <span className="h-2 w-2 rounded-full bg-white/20 sm:h-2.5 sm:w-2.5" />
                <span className="h-2 w-2 rounded-full bg-white/20 sm:h-2.5 sm:w-2.5" />
              </div>

              {/* URL */}
              <div className="mx-auto hidden rounded-md border border-white/10 bg-white/[0.03] px-6 py-1 text-[9px] text-white/30 sm:block">
                app.devflow.ai
              </div>
            </div>

            {/* =========================
                DASHBOARD
            ========================== */}
            <div className="grid min-h-[280px] grid-cols-1 sm:min-h-[320px] sm:grid-cols-[170px_1fr]">

              {/* =========================
                  SIDEBAR
              ========================== */}
              <aside className="hidden border-r border-white/10 bg-white/[0.015] p-4 sm:block">

                {/* Logo */}
                <div className="mb-6 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-black">
                    <span className="text-xs font-black">
                      D
                    </span>
                  </div>

                  <span className="text-xs font-semibold">
                    DevFlow
                  </span>
                </div>

                {/* Navigation */}
                <div className="space-y-1">

                  <div className="rounded-lg bg-white/10 px-3 py-2 text-[10px] text-white">
                    Overview
                  </div>

                  <div className="rounded-lg px-3 py-2 text-[10px] text-white/35">
                    Projects
                  </div>

                  <div className="rounded-lg px-3 py-2 text-[10px] text-white/35">
                    AI Assistant
                  </div>

                  <div className="rounded-lg px-3 py-2 text-[10px] text-white/35">
                    Analytics
                  </div>

                </div>
              </aside>

              {/* =========================
                  MAIN DASHBOARD
              ========================== */}
              <div className="min-w-0 p-4 sm:p-5 lg:p-6">

                {/* Header */}
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-[9px] text-white/35 sm:text-[10px]">
                      Wednesday, August 19
                    </p>

                    <h3 className="mt-1 text-sm font-semibold sm:text-base">
                      Good morning
                    </h3>
                  </div>

                  <div className="hidden h-7 w-7 rounded-full bg-white/10 sm:block" />

                </div>

                {/* =========================
                    STATS
                ========================== */}
                <div className="mt-5 grid grid-cols-3 gap-1.5 sm:gap-3">

                  {/* Active Tasks */}
                  <div className="rounded-xl border border-white/10 bg-white/[0.025] p-2.5 sm:p-3 lg:p-4">
                    <p className="text-sm font-semibold sm:text-lg">
                      12
                    </p>

                    <p className="mt-1 text-[7px] leading-3 text-white/35 sm:text-[10px]">
                      Active tasks
                    </p>
                  </div>

                  {/* Build Health */}
                  <div className="rounded-xl border border-white/10 bg-white/[0.025] p-2.5 sm:p-3 lg:p-4">
                    <p className="text-sm font-semibold sm:text-lg">
                      84%
                    </p>

                    <p className="mt-1 text-[7px] leading-3 text-white/35 sm:text-[10px]">
                      Build health
                    </p>
                  </div>

                  {/* Issues */}
                  <div className="rounded-xl border border-white/10 bg-white/[0.025] p-2.5 sm:p-3 lg:p-4">
                    <p className="text-sm font-semibold sm:text-lg">
                      27
                    </p>

                    <p className="mt-1 text-[7px] leading-3 text-white/35 sm:text-[10px]">
                      Issues resolved
                    </p>
                  </div>

                </div>

                {/* =========================
                    AI ASSISTANT
                ========================== */}
                <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.025] p-3 sm:p-4">

                  <div className="flex items-center gap-2">

                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-500/10 sm:h-8 sm:w-8">
                      <div className="h-2 w-2 rounded-full bg-blue-400/60" />
                    </div>

                    <div>
                      <p className="text-[9px] font-medium sm:text-[10px]">
                        AI Assistant
                      </p>

                      <p className="text-[7px] text-white/30 sm:text-[8px]">
                        Ready to help
                      </p>
                    </div>

                  </div>

                  <div className="mt-3 rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 sm:mt-4 sm:py-3">
                    <p className="truncate text-[8px] text-white/35 sm:text-[9px]">
                      Analyze the latest build and identify potential issues...
                    </p>
                  </div>

                </div>

                {/* =========================
                    BOTTOM CARDS
                ========================== */}
                <div className="mt-3 grid grid-cols-2 gap-2 sm:gap-3">

                  {/* Activity Card */}
                  <div className="h-16 overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] p-2.5 sm:h-20 sm:p-3">

                    <div className="h-1.5 w-14 rounded bg-white/10 sm:w-16" />

                    <div className="mt-2.5 h-1.5 w-20 rounded bg-white/5 sm:mt-3 sm:w-24" />

                    <div className="mt-1.5 h-1.5 w-16 rounded bg-white/5 sm:w-20" />

                  </div>

                  {/* Chart Card */}
                  <div className="relative h-16 overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] p-2.5 sm:h-20 sm:p-3">

                    <div className="h-1.5 w-12 rounded bg-white/10 sm:w-14" />

                    <div className="absolute bottom-0 left-2.5 right-2.5 flex h-12 items-end gap-1 sm:left-3 sm:right-3 sm:h-14">
                      {[20, 30, 24, 40, 32, 50, 42].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="min-w-0 flex-1 rounded-t bg-white/20"
                            style={{
                              height: `${height}%`,
                            }}
                          />
                        )
                      )}
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;