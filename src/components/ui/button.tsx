import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'destructive' | 'ghost'
    size?: 'sm' | 'md' | 'lg' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const variants = {
            primary: 'bg-electric-blue text-midnight hover:bg-electric-blue/90',
            secondary: 'bg-midnight text-white hover:bg-midnight/90',
            outline: 'bg-transparent border border-midnight/10 text-midnight hover:bg-gray-50',
            destructive: 'bg-red-500 text-white hover:bg-red-600',
            ghost: 'bg-transparent text-midnight hover:bg-gray-100'
        }

        const sizes = {
            sm: 'h-8 px-3 text-xs',
            md: 'h-10 px-4 py-2 text-sm',
            lg: 'h-12 px-8 text-base',
            icon: 'h-10 w-10'
        }

        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-midnight/10 disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
