export type Flavor = 'sour' | 'sweet' | 'spicy' | 'numbing'

export interface Food {
  id: string
  name: string
  brand: string
  flavors: Flavor[]
  description: string
}

export interface Brand {
  id: string
  name: string
}

export const FLAVOR_LABELS: Record<Flavor, string> = {
  sour: '酸',
  sweet: '甜',
  spicy: '辣',
  numbing: '麻',
}
