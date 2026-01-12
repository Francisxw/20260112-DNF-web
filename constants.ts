import { Category, Product } from './types';

export const CATEGORIES: Category[] = [
  { id: 'figures', name: '手办/模型', subcategories: ['比例手办', 'Q版手办', '雕像', '毛绒公仔'] },
  { id: 'apparel', name: '服饰/穿戴', subcategories: ['卫衣/外套', 'T恤', '裤装', '鞋帽'] },
  { id: 'digital', name: '数码/3C', subcategories: ['键鼠', '耳机', '手机壳', '充电宝'] },
  { id: 'home', name: '生活/日用', subcategories: ['杯具', '抱枕', '文具', '包袋'] },
  { id: 'jewelry', name: '首饰/配件', subcategories: ['项链', '戒指', '挂件/徽章'] },
];

export const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'K/DA 阿狸 1/7 雕像', price: 1299, image: './images/DM_20260107112631_004.jpg', tag: 'HOT', category: 'figures' },
  { id: '2', name: '提莫队长 蘑菇抱枕', price: 128, image: './images/DM_20260107112631_005.jpg', category: 'home' },
  { id: '3', name: '源计划 联合款机械键盘', price: 899, originalPrice: 1099, image: './images/DM_20260107112631_006.jpg', tag: 'SALE', category: 'digital' },
  { id: '4', name: '金克丝 鲨鱼炮毛绒', price: 259, image: './images/DM_20260107112631_007.jpg', tag: 'NEW', category: 'figures' },
  { id: '5', name: '亚索 疾风剑豪 T恤', price: 199, image: './images/DM_20260107112631_008.jpg', category: 'apparel' },
  { id: '6', name: '英雄联盟 logo 棒球帽', price: 99, image: './images/DM_20260107112631_009.jpg', category: 'apparel' },
  { id: '7', name: '波罗 饼干人 挂件', price: 45, image: './images/DM_20260107112631_010.jpg', category: 'jewelry' },
  { id: '8', name: '星之守护者 魔法少女手办', price: 599, image: './images/DM_20260107112631_011.jpg', category: 'figures' },
];

export const HERO_FEATURES = [
  {
    id: 1,
    title: "闪耀夏日版本",
    subtitle: "闪耀夏日版本 热辣来袭！",
    image: "./images/04.jpg",
    buttonText: "查看详情",
    hideTextOverlay: true,
    link: "./category/all"
  },
  {
    id: 2,
    title: "官方福利群招募",
    subtitle: "加入DNF周边商城官方QQ群，解锁专属福利！",
    image: "./images/02.jpg",
    buttonText: "立即加入",
    hideTextOverlay: true,
    link: "#"
  },
  {
    id: 3,
    title: "暗精灵的增幅秘辛",
    subtitle: "克伦特携普雷神宠，助你战力飙升。",
    image: "./images/03.jpg",
    buttonText: "查看活动",
    hideTextOverlay: true,
    link: "./category/figures"
  },
  {
    id: 4,
    title: "太初水晶球礼盒",
    subtitle: "太初周边来袭，欧气满满。",
    image: "./images/01.jpg",
    buttonText: "立即抢购",
    hideTextOverlay: true,
    link: "./gacha"
  }
];

export const VICE_PRODUCTS = [
  { id: 'slayer_m', title: '鬼剑士(男)', image: './images/DM_20260112153738_004.jpg' },
  { id: 'slayer_m_2', title: '鬼剑士(觉醒)', image: './images/DM_20260112153738_005.jpg' },
  { id: 'gunner_f', title: '神枪手(女)', image: './images/DM_20260112153738_006.jpg' },
  { id: 'slayer_f', title: '鬼剑士(女)', image: './images/DM_20260112153738_007.jpg' },
];
