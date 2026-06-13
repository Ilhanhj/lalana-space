import React from "react";

interface LogoIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeColor?: string;
  sunColor?: string;
  className?: string;
}

export function LalanaLogoIcon({
  size = 40,
  strokeColor = "currentColor",
  sunColor = "#f5a534",
  className,
  ...props
}: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Sun / Moon - Secondary Accent (#f5a534) */}
      <circle cx="64" cy="32" r="13" fill={sunColor} />
      
      {/* House outline - Crisp serif-like minimalist structure */}
      <path
        d="M 33 72 
           V 45 
           L 50 28 
           L 67 45 
           V 72 
           H 33"
        stroke={strokeColor}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LalanaLogo({
  dark = false,
  withText = true,
}: {
  dark?: boolean;
  withText?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      {/* Icon with primary accent base shape directly resembling the logo image or standalone */}
      <div className="w-10 h-10 rounded-xl bg-primary-accent flex items-center justify-center shadow-md shadow-primary-accent/15">
        <LalanaLogoIcon size={24} strokeColor="#ffffff" sunColor="#f5a534" />
      </div>
      {withText && (
        <div className="flex flex-col text-left">
          <span className={`font-serif text-xl font-semibold tracking-wide leading-none ${dark ? 'text-cream-light' : 'text-earth-dark'}`}>
            Lalana
          </span>
          <span className={`font-sans text-[8px] uppercase tracking-[0.25em] font-bold mt-1 ${dark ? 'text-primary-accent/90' : 'text-primary-accent'}`}>
            Social Space
          </span>
        </div>
      )}
    </div>
  );
}
