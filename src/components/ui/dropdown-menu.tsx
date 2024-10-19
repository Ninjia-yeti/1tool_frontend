import React, { useState, useRef, useEffect } from 'react';

interface DropdownMenuProps {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface DropdownMenuTriggerProps {
  asChild?: boolean;
  children: React.ReactNode;
}

interface DropdownMenuContentProps {
  align?: 'start' | 'end';
  children: React.ReactNode;
}

interface DropdownMenuItemProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      {React.Children.map(children, child => 
        React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<any>, { isOpen, setIsOpen }) : child
      )}
    </div>
  );
};

export const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({ children, asChild }) => {
  return (
    <div onClick={() => (children as any).props.setIsOpen((prev: boolean) => !prev)}>
      {children}
    </div>
  );
};

export const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({ children, align = 'start' }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div 
      ref={contentRef}
      className={`absolute z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${align === 'end' ? 'right-0' : 'left-0'}`}
    >
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        {children}
      </div>
    </div>
  );
};

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ onClick, children }) => {
  return (
    <div
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
      role="menuitem"
      onClick={onClick}
    >
      {children}
    </div>
  );
};