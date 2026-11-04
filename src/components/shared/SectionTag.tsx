import React from 'react';

interface SectionTagProps {
  label: string;
  withDot?: boolean;
  className?: string;
}

export const SectionTag: React.FC<SectionTagProps> = ({
  label,
  withDot = false,
  className = '',
}) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F1F2F4] text-[#0B0B0C] text-[11px] font-medium tracking-wide whitespace-nowrap shrink-0 ${className}`}
    >
      {withDot && (
        <span
          className="w-1.5 h-1.5 rounded-full bg-[#1E9BF0] shrink-0"
          aria-hidden="true"
        />
      )}
      <span>{label}</span>
    </span>
  );
};
