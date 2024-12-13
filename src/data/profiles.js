import johnDoePhoto from '../assets/john-doe.jpg';
import janeSmithPhoto from '../assets/jane-smith.jpg';
import alexJohnsonPhoto from '../assets/alex-johnson.jpg';
import emilyDavisPhoto from '../assets/emily-davis.jpg';
import michaelBrownPhoto from '../assets/michael-brown.jpg';

const profiles = [
  {
    id: 1,
    name: 'John Doe',
    photo: johnDoePhoto,
    description: 'Software Engineer based in New York.',
    address: { lat: 40.7128, lng: -74.006 },
    interests: ['Coding', 'Hiking', 'Reading'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
    },
  },
  {
    id: 2,
    name: 'Jane Smith',
    photo: janeSmithPhoto,
    description: 'Digital Marketer from San Francisco.',
    address: { lat: 37.7749, lng: -122.4194 },
    interests: ['Photography', 'Travel', 'Yoga'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
    },
  },
  {
    id: 3,
    name: 'Alex Johnson',
    photo: alexJohnsonPhoto,
    description: 'Product Manager living in Chicago.',
    address: { lat: 41.8781, lng: -87.6298 },
    interests: ['Cooking', 'Gaming', 'Cycling'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/alexjohnson',
      twitter: 'https://twitter.com/alexjohnson',
    },
  },
  {
    id: 4,
    name: 'Emily Davis',
    photo: emilyDavisPhoto,
    description: 'Graphic Designer from Seattle.',
    address: { lat: 47.6062, lng: -122.3321 },
    interests: ['Drawing', 'UI/UX Design', 'Blogging'],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/emilydavis',
      twitter: 'https://twitter.com/emilydavis',
    },
  },
  
];

export default profiles;
