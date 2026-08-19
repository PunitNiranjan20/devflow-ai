import { motion } from "framer-motion";
import {
  Bot,
  CheckCircle2,
  Code2,
  GitBranch,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";

function ProductShowcase() {
  return (
    <section
      id="product"
      className="relative overflow-hidden px-5 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-blue-400">
            One workspace. Less context switching.
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Everything you need to ship
            <span className="text-white/40"> better software.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-white/45">
            Bring your projects, development activity, and AI assistance
            together in one focused workspace.
          </p>
        </div>

        {/* Main workspace */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-16"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-blue-500/5 blur-3xl" />

          <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0a0a0b]">

            {/* Top bar */}
            <div className="flex h-12 items-center justify-between border-b border-white/10 px-4 sm:px-6">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-black">
                  <span className="text-xs font-black">D</span>
                </div>

                <span className="text-xs font-semibold">
                  DevFlow
                </span>
              </div>

              <div className="hidden items-center gap-2 sm:flex">
                <div className="h-6 w-24 rounded-md border border-white/10 bg-white/[0.03]" />
                <div className="h-6 w-6 rounded-full bg-white/10" />
              </div>
            </div>

            <div className="grid min-h-[520px] md:grid-cols-[200px_1fr]">

              {/* Sidebar */}
              <aside className="hidden border-r border-white/10 bg-white/[0.015] p-4 md:block">
                <p className="px-3 text-[9px] uppercase tracking-widest text-white/25">
                  Workspace
                </p>

                <div className="mt-3 space-y-1">
                  <SidebarItem
                    icon={LayoutDashboard}
                    label="Overview"
                    active
                  />

                  <SidebarItem
                    icon={Code2}
                    label="Projects"
                  />

                  <SidebarItem
                    icon={Bot}
                    label="AI Assistant"
                  />

                  <SidebarItem
                    icon={GitBranch}
                    label="Activity"
                  />
                </div>

                <p className="mt-8 px-3 text-[9px] uppercase tracking-widest text-white/25">
                  Projects
                </p>

                <div className="mt-3 space-y-2">
                  <ProjectItem
                    name="DevFlow"
                    active
                  />

                  <ProjectItem name="Website" />
                  <ProjectItem name="API" />
                </div>
              </aside>

              {/* Main workspace */}
              <main className="p-5 sm:p-7">

                {/* Header */}
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs text-white/35">
                      Overview
                    </p>

                    <h3 className="mt-1 text-lg font-semibold">
                      Development workspace
                    </h3>
                  </div>

                  <button className="flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/70 transition-colors hover:bg-white/[0.07]">
                    <Sparkles size={13} />
                    Ask AI
                  </button>
                </div>

                {/* Metrics */}
                <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
                  <Metric
                    label="Open tasks"
                    value="12"
                    change="+4"
                  />

                  <Metric
                    label="Build health"
                    value="84%"
                    change="+8%"
                  />

                  <Metric
                    label="Issues resolved"
                    value="27"
                    change="+12"
                  />

                  <Metric
                    label="Deployments"
                    value="18"
                    change="+5"
                  />
                </div>

                {/* Main grid */}
                <div className="mt-4 grid gap-4 lg:grid-cols-[1.5fr_1fr]">

                  {/* Activity */}
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium">
                          Development activity
                        </p>

                        <p className="mt-1 text-[10px] text-white/30">
                          Last 7 days
                        </p>
                      </div>

                      <span className="rounded-md bg-white/5 px-2 py-1 text-[9px] text-white/40">
                        This week
                      </span>
                    </div>

                    {/* Chart */}
                    <div className="mt-8 flex h-36 items-end justify-between gap-2">
                      {[35, 52, 42, 68, 55, 80, 72, 92, 64, 78, 88, 70].map(
                        (height, index) => (
                          <motion.div
                            key={index}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.04,
                            }}
                            className="w-full rounded-t-md bg-white/10"
                          />
                        )
                      )}
                    </div>

                    <div className="mt-3 flex justify-between text-[8px] text-white/20">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>
                  </div>

                  {/* AI Assistant */}
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10">
                        <Bot
                          size={17}
                          className="text-blue-400"
                        />
                      </div>

                      <div>
                        <p className="text-xs font-medium">
                          AI Assistant
                        </p>

                        <p className="text-[9px] text-white/30">
                          Project-aware intelligence
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 rounded-lg border border-white/10 bg-black/20 p-3">
                      <p className="text-[10px] leading-5 text-white/45">
                        I found a potential issue in your latest build.
                        The authentication middleware may be handling
                        expired sessions incorrectly.
                      </p>
                    </div>

                    <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-3 py-2.5 text-[10px] font-semibold text-black">
                      Review suggestion
                      <CheckCircle2 size={13} />
                    </button>
                  </div>
                </div>

                {/* Bottom row */}
                <div className="mt-4 grid gap-4 md:grid-cols-2">

                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium">
                        Recent tasks
                      </p>

                      <span className="text-[9px] text-white/30">
                        View all
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      <Task
                        title="Improve authentication flow"
                        status="In progress"
                      />

                      <Task
                        title="Fix dashboard loading state"
                        status="Review"
                      />

                      <Task
                        title="Update API documentation"
                        status="Done"
                      />
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium">
                        Build status
                      </p>

                      <span className="flex items-center gap-1.5 text-[9px] text-white/40">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Healthy
                      </span>
                    </div>

                    <div className="mt-5">
                      <div className="flex items-center justify-between text-[9px]">
                        <span className="text-white/30">
                          Production build
                        </span>

                        <span className="text-white/60">
                          84%
                        </span>
                      </div>

                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                        <div className="h-full w-[84%] rounded-full bg-white/60" />
                      </div>
                    </div>
                  </div>

                </div>
              </main>
            </div>
          </div>
        </motion.div>

        {/* Supporting statement */}
        <div className="mx-auto mt-16 max-w-xl text-center">
          <p className="text-sm leading-6 text-white/35">
            Less time switching between tools.
            More time solving the problems that matter.
          </p>
        </div>
      </div>
    </section>
  );
}

function SidebarItem({ icon: Icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-[10px] ${
        active
          ? "bg-white/10 text-white"
          : "text-white/35"
      }`}
    >
      <Icon size={13} />
      {label}
    </div>
  );
}

function ProjectItem({ name, active }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 text-[10px] text-white/35">
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          active ? "bg-blue-400" : "bg-white/20"
        }`}
      />

      {name}
    </div>
  );
}

function Metric({ label, value, change }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <p className="text-[9px] text-white/30">
        {label}
      </p>

      <div className="mt-2 flex items-end justify-between gap-2">
        <p className="text-lg font-semibold">
          {value}
        </p>

        <span className="text-[9px] text-emerald-400/70">
          {change}
        </span>
      </div>
    </div>
  );
}

function Task({ title, status }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-white/5 pb-3 last:border-0 last:pb-0">
      <div className="flex min-w-0 items-center gap-2">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />

        <p className="truncate text-[10px] text-white/50">
          {title}
        </p>
      </div>

      <span className="shrink-0 text-[8px] text-white/25">
        {status}
      </span>
    </div>
  );
}

export default ProductShowcase;