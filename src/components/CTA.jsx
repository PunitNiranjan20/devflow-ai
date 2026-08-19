import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function CTA() {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden px-5 py-24 lg:px-8 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center sm:px-12 lg:px-20"
        >
          {/* Icon */}
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
            <Sparkles size={18} className="text-blue-400" />
          </div>

          <h2 className="mx-auto mt-7 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Your next release starts here.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/40 sm:text-base">
            Bring your development workflow into one intelligent workspace
            and spend more time building what matters.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
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
              className="flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm text-white/60 transition-colors hover:bg-white/[0.06] hover:text-white sm:w-auto"
            >
              Explore DevFlow
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;