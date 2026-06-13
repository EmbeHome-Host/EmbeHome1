import embehomeLogo from "@/assets/embehome-logo.png";

const sizeClasses = {
  sm: "h-7",
  md: "h-8",
  lg: "h-9",
  xl: "h-10",
} as const;

interface BrandLogoProps {
  size?: keyof typeof sizeClasses;
  className?: string;
  priority?: boolean;
}

export default function BrandLogo({
  size = "md",
  className = "",
  priority = false,
}: BrandLogoProps) {
  return (
    <img
      src={embehomeLogo}
      alt="EmbeHome"
      width={130}
      height={40}
      fetchPriority={priority ? "high" : undefined}
      loading={priority ? undefined : "lazy"}
      decoding="async"
      className={`${sizeClasses[size]} w-auto object-contain shrink-0 ${className}`}
    />
  );
}

const taglineClass =
  "text-[10px] text-[#009A9A] font-medium tracking-widest uppercase";

interface BrandMarkProps {
  size?: keyof typeof sizeClasses;
  priority?: boolean;
  logoClassName?: string;
  taglineClassName?: string;
  titleClassName?: string;
  layout?: "row" | "column";
  subtitle?: string;
  inverse?: boolean;
}

export function BrandMark({
  size = "md",
  priority = false,
  logoClassName = "",
  taglineClassName = taglineClass,
  titleClassName,
  layout = "row",
  subtitle,
  inverse = false,
}: BrandMarkProps) {
  const titleClass =
    titleClassName ??
    `text-base font-bold tracking-tight leading-none ${
      inverse ? "text-white" : "text-gray-900"
    }`;

  return (
    <div
      className={`flex ${
        layout === "column" ? "flex-col items-center" : "items-center gap-2"
      }`}
    >
      <BrandLogo size={size} priority={priority} className={logoClassName} />
      <div className={`flex flex-col leading-none ${layout === "column" ? "text-center" : ""}`}>
        <span className={titleClass}>EmbeHome</span>
        <span className={`${taglineClassName} mt-1`}>Automations</span>
        {subtitle && (
          <p className="text-gray-400 text-xs mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
