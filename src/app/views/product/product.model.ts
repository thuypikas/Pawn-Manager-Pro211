export interface Product {
  _id: number;
  name: string;
  category_name: string;
  status: number;
  desc: string;
  images: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
export const listCategory = [
  {
    id: 0,
    value: 'Xe máy'
  },
  {
    id: 1,
    value: 'Ô tô'
  },
  {
    id: 2,
    value: 'Laptop'
  }
];
