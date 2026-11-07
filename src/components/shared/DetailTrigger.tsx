import type { ReactNode } from "react";

interface DetailTriggerProps {
  onOpen: () => void;
  className?: string;
  children: ReactNode;
}

export function DetailTrigger({ onOpen, className = "", children }: DetailTriggerProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
      className={`block w-full cursor-pointer rounded-lg text-left transition duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${className}`}
    >
      {children}
    </div>
  );
}
