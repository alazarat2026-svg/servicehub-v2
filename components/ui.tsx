import React from "react";

// ============================================================================
// Icons (Inline SVG to remain zero-dependency)
// ============================================================================

export function CheckShieldIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM13.707 8.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function StarIcon({ className = "w-4 h-4 text-amber-500" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// ============================================================================
// 1. Button Component
// ============================================================================

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    // Stitch token-mapped variants
    const variantStyles = {
      primary:
        "bg-primary text-white hover:bg-primary-hover active:bg-primary/95 focus-visible:ring-tertiary shadow-sm",
      secondary:
        "bg-secondary text-white hover:bg-[#0B7C72] active:bg-[#09665E] focus-visible:ring-secondary shadow-sm",
      outline:
        "bg-white text-primary border border-border hover:border-border-dark hover:bg-surface-container-low active:bg-surface-container focus-visible:ring-primary shadow-sm",
    };

    // Height and padding aligned with Stitch 44px (md) / 48px (lg) / 36px (sm) specifications
    const sizeStyles = {
      sm: "h-9 px-3.5 text-label-md rounded-md gap-1.5",
      md: "h-11 px-5 text-label-lg rounded-md gap-2",
      lg: "h-12 px-6 text-label-lg rounded-md gap-2.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`inline-flex items-center justify-center font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none active:scale-[0.99] cursor-pointer ${
          variantStyles[variant]
        } ${sizeStyles[size]} ${fullWidth ? "w-full" : ""} ${className}`}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);
Button.displayName = "Button";

// ============================================================================
// 2. Chip Component
// ============================================================================

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "status" | "verified" | "filter";
  selected?: boolean;
  icon?: React.ReactNode;
}

export function Chip({
  children,
  variant = "status",
  selected = false,
  icon,
  className = "",
  ...props
}: ChipProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 rounded-full font-semibold transition-all select-none";

  let variantStyles = "";

  if (variant === "status") {
    variantStyles =
      "bg-surface-container-low text-neutral border border-border/80 px-3 py-1 text-label-sm";
  } else if (variant === "verified") {
    variantStyles =
      "bg-[#F0FDFA] text-secondary border border-[#CCFBF1] px-3 py-1 text-label-sm";
  } else if (variant === "filter") {
    if (selected) {
      variantStyles =
        "bg-primary text-white border border-primary px-3.5 py-1.5 text-label-md shadow-sm";
    } else {
      variantStyles =
        "bg-white text-neutral border border-border hover:border-border-dark hover:text-primary px-3.5 py-1.5 text-label-md cursor-pointer";
    }
  }

  return (
    <div className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {variant === "verified" && !icon ? <CheckShieldIcon /> : icon}
      <span>{children}</span>
    </div>
  );
}

// ============================================================================
// 3. SectionHeader Component
// ============================================================================

export interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  action,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-4 border-b border-border/60 ${className}`}
    >
      <div className="space-y-1">
        <span className="text-label-caps uppercase tracking-wider text-secondary font-bold block">
          {label}
        </span>
        <h2 className="text-headline-lg-mobile md:text-headline-lg font-bold text-primary tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="text-body-md text-neutral mt-2 max-w-2xl">{description}</p>
        )}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}

// ============================================================================
// 4. ProviderCard Component
// ============================================================================

export interface ProviderCardProps {
  name: string;
  trade: string;
  reviewQuote: string;
  rating?: number;
  reviewCount?: number;
  startingPrice?: string;
  responseTime?: string;
  avatarUrl?: string;
  imageUrl?: string;
  verified?: boolean;
  onViewProfile?: () => void;
  onBook?: () => void;
  viewProfileText?: string;
  bookText?: string;
  className?: string;
}

export function ProviderCard({
  name,
  trade,
  reviewQuote,
  rating = 4.9,
  reviewCount = 124,
  startingPrice,
  responseTime,
  avatarUrl,
  imageUrl,
  verified = true,
  onViewProfile,
  onBook,
  viewProfileText = "View Profile",
  bookText = "Book Service",
  className = "",
}: ProviderCardProps) {
  // Initials fallback for avatar
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`group bg-white rounded-xl border border-border overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg flex flex-col ${className}`}
    >
      {/* Visual / Media Container */}
      <div className="relative w-full h-44 bg-surface-container-low overflow-hidden">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={`${name} cover`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-surface-container-low via-surface-container to-surface-dim flex items-center justify-center text-neutral/40">
            <svg
              className="w-12 h-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}

        {/* Rating Floating Tag */}
        <div className="absolute top-3 right-3">
          <div className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-label-sm font-bold text-primary shadow-sm border border-border/50">
            <StarIcon className="w-3.5 h-3.5 text-amber-500" />
            <span>{rating.toFixed(1)}</span>
            <span className="text-neutral font-normal text-[11px]">
              ({reviewCount})
            </span>
          </div>
        </div>

        {/* Avatar positioned over edge */}
        <div className="absolute -bottom-6 left-5">
          <div className="relative w-14 h-14 rounded-full ring-4 ring-white bg-surface-container-high overflow-hidden shadow-sm flex items-center justify-center font-bold text-primary">
            {avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={avatarUrl}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-label-lg">{initials}</span>
            )}
          </div>
          {verified && (
            <span
              title="Verified Provider"
              className="absolute bottom-0 right-0 w-4 h-4 bg-secondary rounded-full ring-2 ring-white flex items-center justify-center text-white"
            >
              <CheckShieldIcon className="w-2.5 h-2.5" />
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 pt-8 flex-1 flex flex-col justify-between">
        <div>
          {/* Header & Trade */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-headline-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                {name}
              </h3>
              <p className="text-body-sm text-neutral font-medium">{trade}</p>
            </div>
            {verified && (
              <Chip variant="verified" className="text-[11px] py-0.5 px-2">
                Verified
              </Chip>
            )}
          </div>

          {/* Metric Bar (Price / Response) */}
          {(startingPrice || responseTime) && (
            <div className="mt-3 py-2 px-3 bg-surface-container-low/60 rounded-md border border-border/40 flex items-center justify-between text-body-sm">
              {startingPrice && (
                <span className="text-primary font-semibold">
                  {startingPrice}
                </span>
              )}
              {responseTime && (
                <span className="text-neutral text-[12px]">{responseTime}</span>
              )}
            </div>
          )}

          {/* Review Quote */}
          <div className="mt-4 p-3 bg-surface-container-low/40 rounded-lg border border-border/40 relative">
            <p className="text-body-sm text-neutral italic line-clamp-2">
              &ldquo;{reviewQuote}&rdquo;
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 pt-4 border-t border-border flex items-center gap-2.5">
          <Button
            variant="outline"
            size="sm"
            onClick={onViewProfile}
            className="flex-1"
          >
            {viewProfileText}
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={onBook}
            className="flex-1"
          >
            {bookText}
          </Button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 5. MetricBlock Component (Credibility Band)
// ============================================================================

export interface MetricBlockProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
}

export function MetricBlock({
  value,
  label,
  description,
  className = "",
}: MetricBlockProps) {
  return (
    <div
      className={`bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 flex flex-col justify-between transition-all hover:bg-white/[0.14] ${className}`}
    >
      <div>
        <div className="text-headline-lg-mobile md:text-headline-lg font-bold text-white tracking-tight">
          {value}
        </div>
        <div className="text-secondary-fixed text-label-md md:text-label-lg font-semibold uppercase tracking-wider mt-1.5 text-[#89F5E7]">
          {label}
        </div>
      </div>
      {description && (
        <p className="text-body-sm text-slate-300 mt-3 font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
