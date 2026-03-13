import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { brands } from '@/data/foods'
import { FLAVOR_LABELS } from '@/types'
import type { Flavor } from '@/types'

interface FilterBarProps {
  activeFlavor: Flavor | 'all'
  onFlavorChange: (flavor: Flavor | 'all') => void
  selectedBrands: string[]
  onToggleBrand: (brandId: string) => void
}

export function FilterBar({ activeFlavor, onFlavorChange, selectedBrands, onToggleBrand }: FilterBarProps) {
  return (
    <div className="px-4 space-y-4">
      <div>
        <h2 className="text-sm font-medium text-muted-foreground mb-2">口味筛选</h2>
        <Tabs value={activeFlavor} onValueChange={(v) => onFlavorChange(v as Flavor | 'all')}>
          <TabsList className="flex-wrap">
            <TabsTrigger value="all">全部</TabsTrigger>
            {(Object.entries(FLAVOR_LABELS) as [Flavor, string][]).map(([key, label]) => (
              <TabsTrigger key={key} value={key}>{label}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div>
        <h2 className="text-sm font-medium text-muted-foreground mb-2">品牌筛选</h2>
        <div className="flex flex-wrap gap-2">
          {brands.map((brand) => (
            <Badge
              key={brand.id}
              variant={selectedBrands.includes(brand.id) ? 'default' : 'outline'}
              onClick={() => onToggleBrand(brand.id)}
            >
              {brand.name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
