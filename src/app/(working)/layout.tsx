import React from 'react'
import { Footer, Navbar } from "@/components";

interface Props {
    children: React.ReactNode;
}

const WorkingLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col items-center w-full">
            <Navbar />
            {children}
        </div>
    )
};

export default WorkingLayout
