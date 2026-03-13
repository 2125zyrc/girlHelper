import { Header } from '@/components/Header'
import { FilterBar } from '@/components/FilterBar'
import { FoodGrid } from '@/components/FoodGrid'
import { RandomPicker } from '@/components/RandomPicker'
import { useFoodFilter } from '@/hooks/useFoodFilter'

function App() {
  const { activeFlavor, setActiveFlavor, selectedBrands, toggleBrand, filteredFoods, getRandomFood } = useFoodFilter()

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto pb-12">
        <Header />

        <div className="flex justify-center mb-6">
          <RandomPicker onPick={getRandomFood} />
        </div>

        <FilterBar
          activeFlavor={activeFlavor}
          onFlavorChange={setActiveFlavor}
          selectedBrands={selectedBrands}
          onToggleBrand={toggleBrand}
        />

        <div className="mt-6">
          <p className="text-sm text-muted-foreground px-4 mb-4">
            共 {filteredFoods.length} 道美食
          </p>
          <FoodGrid foods={filteredFoods} />
        </div>
      </div>
    </div>
  )
}

export default App
