import { useState, useMemo } from 'react'
import { foods } from '@/data/foods'
import type { Flavor, Food } from '@/types'

export function useFoodFilter() {
  const [activeFlavor, setActiveFlavor] = useState<Flavor | 'all'>('all')
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])

  const filteredFoods = useMemo(() => {
    return foods.filter((food) => {
      const flavorMatch = activeFlavor === 'all' || food.flavors.includes(activeFlavor)
      const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(food.brand)
      return flavorMatch && brandMatch
    })
  }, [activeFlavor, selectedBrands])

  const toggleBrand = (brandId: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brandId) ? prev.filter((b) => b !== brandId) : [...prev, brandId]
    )
  }

  const getRandomFood = (): Food | null => {
    if (filteredFoods.length === 0) return null
    const index = Math.floor(Math.random() * filteredFoods.length)
    return filteredFoods[index]
  }

  return {
    activeFlavor,
    setActiveFlavor,
    selectedBrands,
    toggleBrand,
    filteredFoods,
    getRandomFood,
  }
}
