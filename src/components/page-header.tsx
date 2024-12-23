import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description: string
  className?: string
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={cn("relative py-24 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl mb-4">
          {title}
        </h1>
        <p className="text-xl text-blue-100 max-w-3xl">
          {description}
        </p>
      </div>
    </div>
  )
}

