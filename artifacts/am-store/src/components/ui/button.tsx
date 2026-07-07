import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export function Button({ 
  className, 
  variant = "default", 
  size = "default", 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 tracking-widest uppercase",
        {
          "bg-primary text-primary-foreground hover:bg-primary/90 glow-gold-hover": variant === "default",
          "border border-border bg-transparent hover:border-primary hover:text-primary": variant === "outline",
          "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
          "text-primary underline-offset-4 hover:underline": variant === "link",
          "h-12 px-8 py-3": size === "default",
          "h-9 px-4 text-xs": size === "sm",
          "h-14 px-10 text-base": size === "lg",
          "h-12 w-12": size === "icon",
        },
        className
      )}
      {...props}
    />
  )
}
