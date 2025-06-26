"use client";

export const ClickIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21H18a2.25 2.25 0 002.25-2.25V12a3 3 0 00-3-3h-6"
    />
  </svg>
);

export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-white text-[#002E83] rounded-[4px] font-medium leading-[100%] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
