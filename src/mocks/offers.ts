import type { Offer } from '../types/types';

const offers: Offer[] = [
  {
    id: 1,
    price: 350,
    rating: 4.8,
    title: 'Stunning & cozy apartment with a view',
    isPremium: true,
    isFavorite: false,
    previewImage: 'img/apartment-01.jpg',
    type: 'apartment',
    city: {
      name: 'Barcelona'
    }
  },
  {
    id: 2,
    price: 20,
    rating: 3.9,
    title: 'Charming room in the heart of the city',
    isPremium: false,
    isFavorite: false,
    previewImage: 'img/apartment-02.jpg',
    type: 'room',
    city: {
      name: 'Rome'
    }
  },
  {
    id: 3,
    price: 100,
    rating: 4.7,
    title: 'Elegant house with a garden oasis',
    isPremium: true,
    isFavorite: true,
    previewImage: 'img/apartment-03.jpg',
    type: 'house',
    city: {
      name: 'London'
    }
  },
  {
    id: 4,
    price: 100,
    rating: 4.1,
    title: 'Modern & spacious hotel near the waterfront',
    isPremium: false,
    isFavorite: true,
    previewImage: 'img/apartment-01.jpg',
    type: 'hotel',
    city: {
      name: 'Venice'
    }
  },
];

export default offers;
