import { Chance } from 'chance';
import { sub } from 'date-fns';

const chance = new Chance();

const ReviewsData = [
  {
    title: 'How Innovation Works',
    price: 275,
    discount: 25,
    related: false,
    salesPrice: 350,
    category: ['books'],
    gender: 'Men',
    rating: 3,
    stock: true,
    qty: 1,
    colors: ['#1890FF'],
    photo: '/images/products/s1.jpg',
    id: 1,
    created: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    title: 'Psalms Book for Growth',
    price: 89,
    discount: 10,
    related: true,
    salesPrice: 99,
    category: ['books'],
    gender: 'Women',
    rating: 3,
    stock: false,
    qty: 1,
    colors: ['#1890FF', '#94D82D', '#FF4842'],
    photo: '/images/products/s2.jpg',
    id: 2,
    created: sub(new Date(), { days: 10, hours: 8, minutes: 69 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    title: 'The Psychology of Money',
    price: 125,
    discount: 12,
    related: false,
    salesPrice: 137,
    category: ['fashion', 'books'],
    gender: 'Kids',
    rating: 3,
    stock: true,
    qty: 1,
    colors: ['#FF4842', '#1890FF', '#94D82D'],
    photo: '/images/products/s3.jpg',
    id: 3,
    created: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    title: 'Boat Headphone',
    price: 50,
    discount: 15,
    related: true,
    salesPrice: 65,
    category: ['electronics'],
    gender: 'Men',
    rating: 3,
    stock: true,
    qty: 1,
    colors: ['#1890FF', '#94D82D', '#FFC107'],
    photo: '/images/products/s4.jpg',
    id: 4,
    created: sub(new Date(), { days: 4, hours: 9, minutes: 40 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    title: 'MacBook Air Pro',
    price: 650,
    discount: 250,
    related: true,
    salesPrice: 900,
    category: ['fashion', 'electronics'],
    gender: 'Women',
    rating: 3,
    stock: false,
    qty: 1,
    colors: ['#00AB55', '#000000'],
    photo: '/images/products/s5.jpg',
    id: 5,
    created: sub(new Date(), { days: 2, hours: 5, minutes: 50 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    title: 'Gaming Console',
    price: 25,
    discount: 6,
    related: true,
    salesPrice: 31,
    category: ['electronics'],
    gender: 'Men',
    rating: 3,
    stock: true,
    qty: 1,
    colors: ['#FFC0CB', '#FF4842'],
    photo: '/images/products/s6.jpg',
    id: 6,
    created: sub(new Date(), { days: 2, hours: 9, minutes: 45 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    title: 'Red Valvet Dress',
    price: 150,
    discount: 50,
    related: false,
    salesPrice: 200,
    category: ['fashion'],
    gender: 'Women',
    rating: 3,
    stock: true,
    qty: 1,
    colors: ['#FF4842', '#1890FF', '#94D82D'],
    photo: '/images/products/s7.jpg',
    id: 7,
    created: sub(new Date(), { days: 6, hours: 10, minutes: 0 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    title: 'Shoes for Girls',
    price: 300,
    discount: 80,
    related: false,
    salesPrice: 380,
    category: ['fashion', 'toys'],
    gender: 'Women',
    rating: 3,
    stock: true,
    qty: 1,
    colors: ['#1890FF', '#94D82D', '#FFC107'],
    photo: '/images/products/s8.jpg',
    id: 8,
    created: sub(new Date(), { days: 7, hours: 5, minutes: 20 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    title: 'Short & Sweet Purse',
    price: 175,
    discount: 25,
    related: false,
    salesPrice: 200,
    category: ['fashion'],
    gender: 'Women',
    rating: 3,
    stock: true,
    qty: 1,
    colors: ['#00AB55', '#000000'],
    photo: '/images/products/s9.jpg',
    id: 9,
    created: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    title: 'Toy Dino for Fun',
    price: 210,
    discount: 40,
    related: false,
    salesPrice: 250,
    category: ['toys'],
    gender: 'Kids',
    rating: 3,
    stock: true,
    qty: 1,
    colors: ['#FFC0CB', '#FF4842'],
    photo: '/images/products/s10.jpg',
    id: 10,
    created: sub(new Date(), { days: 6, hours: 6, minutes: 20 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    title: 'Cute Soft Teddybear',
    price: 285,
    discount: 60,
    related: false,
    salesPrice: 345,
    category: ['toys'],
    gender: 'Kids',
    rating: 3,
    stock: true,
    qty: 1,
    colors: ['#FF4842', '#1890FF', '#94D82D'],
    photo: '/images/products/s11.jpg',
    id: 11,
    created: sub(new Date(), { days: 1, hours: 6, minutes: 20 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    title: 'Little Angel Toy',
    price: 5,
    discount: 5,
    related: false,
    salesPrice: 10,
    category: ['toys'],
    gender: 'Kids',
    rating: 3,
    stock: true,
    qty: 1,
    colors: ['#1890FF', '#94D82D', '#FFC107'],
    photo: '/images/products/s12.jpg',
    id: 12,
    created: sub(new Date(), { days: 9, hours: 6, minutes: 20 }),
    description: chance.paragraph({ sentences: 2 }),
  },
];

export default ReviewsData;