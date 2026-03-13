import { useState } from 'react'
import { Shuffle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { FLAVOR_LABELS } from '@/types'
import type { Food } from '@/types'
import { brands } from '@/data/foods'

interface RandomPickerProps {
  onPick: () => Food | null
}

export function RandomPicker({ onPick }: RandomPickerProps) {
  const [open, setOpen] = useState(false)
  const [picked, setPicked] = useState<Food | null>(null)
  const [spinning, setSpinning] = useState(false)

  const handlePick = () => {
    setSpinning(true)
    setOpen(true)

    // 短暂延迟模拟"转动"效果
    setTimeout(() => {
      setPicked(onPick())
      setSpinning(false)
    }, 600)
  }

  const brandName = picked ? brands.find((b) => b.id === picked.brand)?.name ?? picked.brand : ''

  return (
    <>
      <Button size="lg" onClick={handlePick} className="gap-2 text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
        <Shuffle className="h-5 w-5" />
        她说随便，我来选
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md text-center">
          {spinning ? (
            <div className="py-8">
              <div className="animate-spin text-4xl mb-4">🎲</div>
              <p className="text-muted-foreground">正在选择中...</p>
            </div>
          ) : picked ? (
            <>
              <DialogHeader className="items-center">
                <div className="text-5xl mb-4">🍽️</div>
                <DialogTitle className="text-2xl">就决定是你了！</DialogTitle>
                <DialogDescription>她说随便，命运已经帮你选好了</DialogDescription>
              </DialogHeader>
              <div className="space-y-3 py-4">
                <h3 className="text-xl font-bold text-foreground">{picked.name}</h3>
                <p className="text-muted-foreground">{brandName}</p>
                <p className="text-sm text-muted-foreground">{picked.description}</p>
                <div className="flex gap-1.5 justify-center">
                  {picked.flavors.map((flavor) => (
                    <Badge key={flavor} variant="secondary">{FLAVOR_LABELS[flavor]}</Badge>
                  ))}
                </div>
              </div>
              <Button onClick={handlePick} variant="outline" className="gap-2">
                <Shuffle className="h-4 w-4" />
                不满意？再来一次
              </Button>
            </>
          ) : (
            <div className="py-8">
              <p className="text-muted-foreground">当前筛选条件下没有可选的美食</p>
              <p className="text-sm text-muted-foreground mt-1">试试调整筛选条件？</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
