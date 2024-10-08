import React from 'react'
import { cn } from "@/lib/utils";

interface Props {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

const Wrapper = ({ children, className, id }: Props) => {
    return (
        <div id={cn(id)} className={cn(
            "h-full mx-auto w-full max-w-screen-xl px-4 md:px-20",
            className
        )}>
            {children}
        </div>
    )
};

export default Wrapper
