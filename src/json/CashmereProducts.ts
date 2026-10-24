import cashmere1 from '../assets/cashmere_img/cashmere-1.png';
import cashmere2 from '../assets/cashmere_img/cashmere-2.png';
import cashmere3 from '../assets/cashmere_img/cashmere-3.png';
import cashmere4 from '../assets/cashmere_img/cashmere-4.png';

export interface Product {
  id: string;
  judul: string;
  harga: string;
  source: string;
}
export const CashmereProducts : Product[] = [
  {
    id: 'prod-1',
    judul: 'Over-dyed Flannel Shirt',
    harga: 'Rp 3.650.000 IDR',
    source: cashmere1
  },
  {
    id: 'prod-2',
    judul: 'Pleated Wide-Leg Trousers',
    harga: 'Rp 2.950.000 IDR',
    source: cashmere2
  },
  {
    id: 'prod-3',
    judul: 'Chunky Italian Leather Loafers',
    harga: 'Rp 4.200.000 IDR',
    source: cashmere3
  },
  {
    id: 'prod-4',
    judul: 'Minimalist Cashmere V-Neck Pullover',
    harga: 'Rp 3.100.000 IDR',
    source: cashmere4
  }
];