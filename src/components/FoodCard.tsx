import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FLAVOR_LABELS } from '@/types'
import type { Food } from '@/types'
import { brands } from '@/data/foods'

interface FoodCardProps {
  food: Food
}

export function FoodCard({ food }: FoodCardProps) {
  const brandName = brands.find((b) => b.id === food.brand)?.name ?? food.brand

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{food.name}</CardTitle>
        <CardDescription>{brandName}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">{food.description}</p>
        <div className="flex gap-1.5 flex-wrap">
          {food.flavors.map((flavor) => (
            <Badge key={flavor} variant="secondary" className="text-xs">
              {FLAVOR_LABELS[flavor]}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
