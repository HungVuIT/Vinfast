import Reveal from "@/components/Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={`flex flex-col gap-3 ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider ${
            tone === "dark"
              ? "bg-white/10 text-white ring-1 ring-white/20"
              : "bg-brand-50 text-[#003469] ring-1 ring-[#003469]/10"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#c8102e]" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-extrabold leading-tight sm:text-4xl ${
          tone === "dark" ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-[15px] leading-relaxed sm:text-base ${
            tone === "dark" ? "text-white/70" : "text-slate-500"
          }`}
        >
          {description}
        </p>
      )}
      <span
        className={`mt-1 h-1 w-16 rounded-full bg-gradient-to-r from-[#003469] to-[#2f6bb0] ${
          isCenter ? "" : ""
        }`}
      />
    </Reveal>
  );
}
