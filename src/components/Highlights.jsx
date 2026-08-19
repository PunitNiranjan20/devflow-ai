import { motion } from "framer-motion";
import {
  Clock3,
  Layers3,
  ShieldCheck,
  Zap,
} from "lucide-react";

const highlights = [
  {
    icon: Zap,
    value: "Focused",
    label: "One workspace",
    description:
      "Keep the essential development context close to the work.",
  },
  {
    icon: Clock3,
    value: "Faster",
    label: "Problem solving",
    description:
      "Move from an issue to a useful next step with AI assistance.",
  },
  {
    icon: Layers3,
    value: "Connected",
    label: "Project context",
    description:
      "Bring tasks, activity, builds, and project intelligence together.",
  },
  {
    icon: ShieldCheck,
    value: "Clear",
    label: "Development signals",
    description:
      "Understand what needs attention without digging through multiple tools.",
  },
];

function Highlights() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="border-b border-white/10 p-6 last:border-b-0 sm:nth-[2]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                  <Icon size={16} className="text-white/60" />
                </div>

                <p className="mt-6 text-xl font-semibold">
                  {item.value}
                </p>

                <p className="mt-1 text-xs text-white/40">
                  {item.label}
                </p>

                <p className="mt-4 text-xs leading-5 text-white/30">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Highlights;