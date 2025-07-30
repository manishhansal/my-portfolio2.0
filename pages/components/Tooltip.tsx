import React from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip = ({ text, children }: TooltipProps) => {
  return (
    <div className="group relative flex items-center">
      {children}
      <div className="absolute top-full left-1/2 mt-3 w-auto -translate-x-1/2 transform-gpu scale-0 whitespace-nowrap rounded-md bg-white px-3 py-1.5 text-sm font-medium text-black shadow-md transition-transform duration-150 ease-in-out group-hover:scale-100">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
