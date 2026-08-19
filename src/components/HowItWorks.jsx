import { motion } from "framer-motion";
import {
  ArrowRight,
  FolderGit2,
  MessageSquareText,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FolderGit2,
    title: "Connect your project",
    description:
      "Bring your development workspace into DevFlow and give your AI assistant the context it needs.",
  },
  {
    number: "02",
    icon: MessageSquareText,
    title: "Work with AI",
    description:
      "Ask questions, investigate issues, and turn project context into useful development actions.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Ship with confidence",
    description:
      "Use project insights and development signals to keep your work moving toward release.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden px-5 py-24 lg:px-8 lg:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-blue-400">
            How it works
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            From project to production
            <br />
            <span className="text-white/40">
              without the busywork.
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative mt-16 grid gap-5 md:grid-cols-3">

          {/* Connecting line */}
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-14 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative rounded-2xl border border-white/10 bg-white/[0.025] p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <Icon
                      size={19}
                      className="text-white/70"
                    />
                  </div>

                  <span className="text-xs font-medium text-white/20">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-8 text-lg font-medium">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="mt-7 hidden items-center gap-2 text-[10px] text-white/20 md:flex">
                    Continue
                    <ArrowRight size={12} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;