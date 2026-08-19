import { motion } from "framer-motion";
import {
  BrainCircuit,
  Bug,
  ChartNoAxesCombined,
  GitPullRequest,
  Sparkles,
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Project-aware AI",
    description:
      "Get useful answers grounded in your project's structure, code, and development context.",
    size: "large",
  },
  {
    icon: Bug,
    title: "AI debugging",
    description:
      "Understand errors faster and identify potential causes before they become bigger problems.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Development insights",
    description:
      "See project activity, build health, and engineering progress in one focused view.",
  },
  {
    icon: GitPullRequest,
    title: "Code workflow",
    description:
      "Keep changes, tasks, and development activity connected throughout the workflow.",
  },
  {
    icon: Workflow,
    title: "Focused workspace",
    description:
      "Reduce context switching by bringing essential development tools into one place.",
  },
  {
    icon: Sparkles,
    title: "Faster decisions",
    description:
      "Turn project information into clear next steps with intelligent assistance.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="relative px-5 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-400">
            Built for the way developers work
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Less friction.
            <br />
            <span className="text-white/40">
              More momentum.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/45">
            DevFlow helps you move from idea to working software without
            constantly switching between disconnected tools.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors hover:bg-white/[0.045] ${
                  feature.size === "large"
                    ? "lg:col-span-2"
                    : ""
                }`}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <Icon
                      size={18}
                      className="text-white/70"
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-medium">
                    {feature.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/40">
                    {feature.description}
                  </p>

                  {/* Decorative line */}
                  <div className="mt-8 h-px w-full bg-gradient-to-r from-white/10 to-transparent" />

                  <div className="mt-4 flex items-center gap-2 text-[10px] text-white/25">
                    <span className="h-1 w-1 rounded-full bg-blue-400/60" />
                    Designed for focused development
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;