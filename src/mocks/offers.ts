import type { Offer } from '../types/types';


const offers: Offer[] = [
  {
    id: 1,
    price: 350,
    rating: 4.8,
    title: 'Stunning & cozy apartment with a view',
    isPremium: true,
    isFavorite: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 1
    },
    previewImage: 'img/apartment-01.jpg',
    type: 'apartment',
    city: {
      name: 'Amsterdam'
    }
  },
  {
    id: 2,
    price: 20,
    rating: 3.9,
    title: 'Charming room in the heart of the city',
    isPremium: false,
    isFavorite: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 1
    },
    previewImage: 'img/apartment-02.jpg',
    type: 'room',
    city: {
      name: 'Paris'
    }
  },
  {
    id: 3,
    price: 100,
    rating: 4.7,
    title: 'Elegant house with a garden oasis',
    isPremium: true,
    isFavorite: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 1
    },
    previewImage: 'img/apartment-03.jpg',
    type: 'house',
    city: {
      name: 'Paris'
    }
  },
  {
    id: 4,
    price: 100,
    rating: 4.1,
    title: 'Modern & spacious hotel near the waterfront',
    isPremium: false,
    isFavorite: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 1
    },
    previewImage: 'img/apartment-01.jpg',
    type: 'hotel',
    city: {
      name: 'Amsterdam'
    }
  },
];

export default offers;
