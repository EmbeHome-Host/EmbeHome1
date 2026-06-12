import embehomeLogo from "@/assets/embehome-logo.png";

const sizeClasses = {
  sm: "h-9",
  md: "h-11",
  lg: "h-14",
  xl: "h-16",
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
      width={180}
      height={52}
      fetchPriority={priority ? "high" : undefined}
      loading={priority ? undefined : "lazy"}
      decoding="async"
      className={`${sizeClasses[size]} w-auto object-contain shrink-0 ${className}`}
    />
  );
}
