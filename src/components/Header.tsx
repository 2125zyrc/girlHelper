import { Dice5 } from 'lucide-react'

export function Header() {
  return (
    <header className="py-8 px-4 text-center">
      <div className="flex items-center justify-center gap-3 mb-2">
        <Dice5 className="h-10 w-10 text-primary" />
        <h1 className="text-4xl font-bold text-foreground tracking-tight">今天吃什么</h1>
      </div>
      <p className="text-muted-foreground text-lg">选择困难？让我来帮你决定！</p>
    </header>
  )
}
