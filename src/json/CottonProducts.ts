import cotton1 from '../assets/cotton_img/cotton-1.jpg'
import cotton2 from '../assets/cotton_img/cotton-2.jpg'
import cotton3 from '../assets/cotton_img/cotton-3.jpg'
import cotton4 from '../assets/cotton_img/cotton-4.jpg'

type products = {
    id : string;
    judul : string;
    harga : string;
    source: string;
}

export const CottonProducts  : products[] = [
      {
    id: 'cotton-1',
    judul: 'Boxy Leather Bomber Jacket',
    harga: 'Rp 5.550.000 IDR',
    source: cotton1
  },
  {
    id: 'cotton-2',
    judul: 'Relaxed Fit Raw Denim Jeans',
    harga: 'Rp 3.450.000 IDR',
    source: cotton2
  },
  {
    id: 'cotton-3',
    judul: 'Low-Top Luxury Leather Sneakers',
    harga: 'Rp 2.650.000 IDR',
    source: cotton3
  },
  {
    id: 'cotton-4',
    judul: 'Textured Beige Henley Shirt',
    harga: 'Rp 750.000 IDR',
    source: cotton4
  }
]