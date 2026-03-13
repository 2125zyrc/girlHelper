import { FoodCard } from './FoodCard'
import type { Food } from '@/types'

interface FoodGridProps {
  foods: Food[]
}

export function FoodGrid({ foods }: FoodGridProps) {
  if (foods.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p className="text-lg">没有找到匹配的美食</p>
        <p className="text-sm mt-1">试试调整筛选条件？</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  )
}
