import { Heart } from 'lucide-react'

export function Header() {
  return (
    <header className="py-8 px-4 text-center">
      <div className="flex items-center justify-center gap-3 mb-2">
        <Heart className="h-10 w-10 text-primary fill-primary" />
        <h1 className="text-4xl font-bold text-foreground tracking-tight">Girl Helper</h1>
      </div>
      <p className="text-muted-foreground text-lg">女朋友说"随便"？我来帮你搞定！</p>
      <p className="text-muted-foreground text-sm mt-1">专治选择困难症，从此约会不纠结</p>
    </header>
  )
}
