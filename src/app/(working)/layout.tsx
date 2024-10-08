import React from 'react'

interface Props {
    children: React.ReactNode;
}

const WorkingLayout = ({ children }: Props) => {
    return (
        <div className="flex h-screen">
            {children}
        </div>
    )
};

export default WorkingLayout
