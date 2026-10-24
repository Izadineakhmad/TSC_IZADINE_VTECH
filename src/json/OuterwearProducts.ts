import outerwear1 from '../assets/outerwear_img/outerwear-1.jpg';
import outerwear2 from '../assets/outerwear_img/outerwear-2.jpg';
import outerwear3 from '../assets/outerwear_img/outerwear-3.jpg';
import outerwear4 from '../assets/outerwear_img/outerwear-4.jpg';

export interface Product {
  id: string;
  judul: string;
  harga: string;
  source: string;
}

export const OuterwearProducts: Product[] = [
  {
    id: 'out-1',
    judul: 'Heavyweight Cashmere Hoodie',
    harga: 'Rp 2.150.000 IDR',
    source: outerwear1
  },
  {
    id: 'out-2',
    judul: 'Double-Knee Canvas Pants',
    harga: 'Rp 3.450.000 IDR',
    source: outerwear2
  },
  {
    id: 'out-3',
    judul: 'Suede Retro Sneakers',
    harga: 'Rp 4.100.000 IDR',
    source: outerwear3
  },
  {
    id: 'out-4',
    judul: 'Sherpa-Lined Tan Trucker Jacket',
    harga: 'Rp 2.850.000 IDR',
    source: outerwear4
  }
];
