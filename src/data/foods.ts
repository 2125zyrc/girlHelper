import type { Brand, Food } from '@/types'

export const brands: Brand[] = [
  { id: 'laoxiangji', name: '老乡鸡' },
  { id: 'zhangliang', name: '张亮麻辣烫' },
  { id: 'yangguofu', name: '杨国福麻辣烫' },
  { id: 'haidilao', name: '海底捞' },
  { id: 'kfc', name: '肯德基' },
  { id: 'mcdonalds', name: '麦当劳' },
  { id: 'shaxian', name: '沙县小吃' },
  { id: 'lanzhou', name: '兰州拉面' },
  { id: 'zhengongfu', name: '真功夫' },
  { id: 'damixiansheng', name: '大米先生' },
]

export const foods: Food[] = [
  // 老乡鸡
  { id: '1', name: '肥西老母鸡汤', brand: 'laoxiangji', flavors: ['sweet'], description: '招牌鸡汤，鲜美浓郁' },
  { id: '2', name: '梅菜扣肉饭', brand: 'laoxiangji', flavors: ['sweet'], description: '软糯入味，下饭神器' },
  { id: '3', name: '辣子鸡丁', brand: 'laoxiangji', flavors: ['spicy', 'numbing'], description: '香辣过瘾，嘎嘣脆' },

  // 张亮麻辣烫
  { id: '4', name: '麻辣烫（微辣）', brand: 'zhangliang', flavors: ['spicy'], description: '自选食材，汤底浓郁' },
  { id: '5', name: '麻辣烫（特辣）', brand: 'zhangliang', flavors: ['spicy', 'numbing'], description: '重辣爱好者的天堂' },
  { id: '6', name: '酸辣粉', brand: 'zhangliang', flavors: ['sour', 'spicy'], description: '酸辣开胃，Q弹粉条' },

  // 杨国福麻辣烫
  { id: '7', name: '番茄麻辣烫', brand: 'yangguofu', flavors: ['sour', 'sweet'], description: '酸甜番茄汤底，清爽不腻' },
  { id: '8', name: '骨汤麻辣烫', brand: 'yangguofu', flavors: ['spicy'], description: '浓郁骨汤，暖胃首选' },
  { id: '9', name: '麻酱拌面', brand: 'yangguofu', flavors: ['numbing'], description: '芝麻酱香，拌匀即食' },

  // 海底捞
  { id: '10', name: '番茄牛腩锅', brand: 'haidilao', flavors: ['sour', 'sweet'], description: '酸甜番茄配嫩牛腩' },
  { id: '11', name: '麻辣牛油锅', brand: 'haidilao', flavors: ['spicy', 'numbing'], description: '经典川味，越吃越上头' },
  { id: '12', name: '捞面', brand: 'haidilao', flavors: ['sweet'], description: '现场拉面表演，劲道弹牙' },

  // 肯德基
  { id: '13', name: '香辣鸡腿堡', brand: 'kfc', flavors: ['spicy'], description: '酥脆鸡腿，辣味十足' },
  { id: '14', name: '原味鸡', brand: 'kfc', flavors: ['sweet'], description: '经典不败，外酥里嫩' },
  { id: '15', name: '老北京鸡肉卷', brand: 'kfc', flavors: ['sweet'], description: '甜面酱配脆鸡，卷着吃' },

  // 麦当劳
  { id: '16', name: '巨无霸', brand: 'mcdonalds', flavors: ['sweet'], description: '双层牛肉，经典汉堡' },
  { id: '17', name: '麦辣鸡腿堡', brand: 'mcdonalds', flavors: ['spicy'], description: '辣味鸡腿，酥脆多汁' },
  { id: '18', name: '麦旋风（奥利奥）', brand: 'mcdonalds', flavors: ['sweet'], description: '甜蜜冰淇淋，饭后甜点' },

  // 沙县小吃
  { id: '19', name: '拌面', brand: 'shaxian', flavors: ['sweet'], description: '花生酱拌面，简单美味' },
  { id: '20', name: '柳叶蒸饺', brand: 'shaxian', flavors: ['sweet'], description: '皮薄馅大，蘸醋更香' },
  { id: '21', name: '酸辣馄饨', brand: 'shaxian', flavors: ['sour', 'spicy'], description: '酸辣汤底，馄饨滑嫩' },

  // 兰州拉面
  { id: '22', name: '牛肉拉面', brand: 'lanzhou', flavors: ['spicy'], description: '一清二白三红四绿五黄' },
  { id: '23', name: '酸菜牛肉面', brand: 'lanzhou', flavors: ['sour'], description: '酸菜提鲜，汤头醇厚' },
  { id: '24', name: '干拌面', brand: 'lanzhou', flavors: ['spicy', 'numbing'], description: '麻辣干拌，重口必选' },

  // 真功夫
  { id: '25', name: '香菇鸡腿饭', brand: 'zhengongfu', flavors: ['sweet'], description: '蒸出来的营养，鸡腿鲜嫩' },
  { id: '26', name: '冬菇鸡排饭', brand: 'zhengongfu', flavors: ['sweet'], description: '清蒸鸡排，原汁原味' },
  { id: '27', name: '剁椒鱼头饭', brand: 'zhengongfu', flavors: ['spicy'], description: '湖南风味，鲜辣过瘾' },

  // 大米先生
  { id: '28', name: '回锅肉', brand: 'damixiansheng', flavors: ['spicy'], description: '川菜经典，肥而不腻' },
  { id: '29', name: '酸菜鱼', brand: 'damixiansheng', flavors: ['sour', 'spicy'], description: '酸爽鱼片，开胃下饭' },
  { id: '30', name: '宫保鸡丁', brand: 'damixiansheng', flavors: ['spicy', 'numbing'], description: '花生鸡丁，麻辣鲜香' },
]
