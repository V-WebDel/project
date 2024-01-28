import type { Comment } from '../types/types';

const reviews: Comment[] = [
  {
    id: 1,
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-04-24',
    rating: 4.2,
    user: {
      id: 1,
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: false
    }
  },
  {
    id: 2,
    comment: ' The building is green and from 18th century. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2021-02-12',
    rating: 2.8,
    user: {
      id: 2,
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    }
  },
  {
    id: 3,
    comment: 'Lovely place with amazing views and cozy atmosphere. Highly recommended!',
    date: '2023-09-15',
    rating: 4.9,
    user: {
      id: 3,
      name: 'Sophie',
      avatarUrl: 'img/avatar-sophie.jpg',
      isPro: false
    }
  },
  {
    id: 4,
    comment: 'Great location and friendly staff. Had a wonderful experience!',
    date: '2022-11-08',
    rating: 4.7,
    user: {
      id: 4,
      name: 'Jack',
      avatarUrl: 'img/avatar-jack.jpg',
      isPro: false
    }
  },
  {
    id: 5,
    comment: 'Nice place to stay. Clean and comfortable rooms.',
    date: '2020-07-03',
    rating: 3.5,
    user: {
      id: 5,
      name: 'Emma',
      avatarUrl: 'img/avatar-emma.jpg',
      isPro: true
    }
  }
];

export default reviews;
