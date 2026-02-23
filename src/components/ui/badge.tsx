import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'destructive'
}

function Badge({ className, variant = 'primary', ...props }: BadgeProps) {
    const variants = {
        primary: 'bg-midnight text-white',
        secondary: 'bg-gray-100 text-midnight',
        outline: 'border border-gray-200 text-midnight',
        destructive: 'bg-red-100 text-red-700'
    }

    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-midnight/10",
                variants[variant],
                className
            )}
            {...props}
        />
    )
}

export { Badge }
