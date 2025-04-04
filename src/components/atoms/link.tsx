import React from 'react'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    label: string
}

export const Link: React.FC<LinkProps> = ({label}) => {
    return (
        <a href="#" className="text-primary hover:text-primary/90 font-semibold">
            {label}
        </a>
    )
}