import cargo1 from '../assets/cargo_img/cargo-1.jpg'
import cargo2 from '../assets/cargo_img/cargo-2.jpg'
import cargo3 from '../assets/cargo_img/cargo-3.jpg'
import cargo4 from '../assets/cargo_img/cargo-4.jpg'

type products = {
    id : string;
    judul : string;
    harga : string;
    source: string;
}

export const CargoProducts : products[]  = [
  {
    id: 'car-1',
    judul: 'Pleated Olive Linen-Blend Cargo',
    harga: 'Rp 1.850.000 IDR',
    source: cargo1
  },
  {
    id: 'car-2',
    judul: 'Navy Canvas Utility Trousers',
    harga: 'Rp 1.650.000 IDR',
    source: cargo2
  },
  {
    id: 'car-3',
    judul: 'Khaki Twill Tailored Cargo Pants',
    harga: 'Rp 1.750.000 IDR',
    source: cargo3
  },
  {
    id: 'car-4',
    judul: 'Charcoal Wool-Blend Zipper Cargo',
    harga: 'Rp 2.250.000 IDR',
    source: cargo4
  }
];
