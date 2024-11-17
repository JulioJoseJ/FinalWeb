import { Url } from 'url';
import { ModelI } from './ModelsAsset';
export interface Product {
  name: string;
  price: string;
  type: string;
}

export interface FashionEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  participatingModels: ModelI[];
  productsShowcased: Product[];
}

export const models: ModelI[] = [
  { name: 'Jane Doe', age: 28, gender: 'Female', portfolio: 'Jane has worked on numerous high-fashion campaigns and editorial shoots.' },
  { name: 'Emily Clarke', age: 25, gender: 'Female', portfolio: 'Emily is known for her runway and commercial modeling work.' },
  { name: 'Sophia Martinez', age: 30, gender: 'Female', portfolio: 'Sophia has extensive experience in both print and television modeling.' },
  { name: 'Olivia Johnson', age: 22, gender: 'Female', portfolio: 'Olivia has made a name for herself in the fashion industry with her unique style.' },
  { name: 'Ava White', age: 27, gender: 'Female', portfolio: 'Ava is recognized for her versatile looks and work with international brands.' },
  { name: 'Isabella Thompson', age: 29, gender: 'Female', portfolio: 'Isabella has a successful career in both high-fashion and commercial modeling.' },
  { name: 'Mia Davis', age: 24, gender: 'Female', portfolio: 'Mia is a rising star in the modeling world with several major ad campaigns.' },
  { name: 'Charlotte Harris', age: 31, gender: 'Female', portfolio: 'Charlotte is known for her work in lifestyle and beauty modeling.' },
  { name: 'Amelia Lewis', age: 26, gender: 'Female', portfolio: 'Amelia has worked with top designers and appeared in numerous fashion magazines.' },
  { name: 'Ella Wilson', age: 23, gender: 'Female', portfolio: 'Ella is celebrated for her editorial work and dynamic runway presence.' },
];

// Define events with participating models
export const events: FashionEvent[] = [
  {
    id: '1',
    title: 'Summer Fashion Week',
    date: '2024-06-10',
    location: 'New York City',
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-G_MZAE555wE%2FV_MBbhl0ymI%2FAAAAAAAAHy4%2FWGkpBrKf5mQb1b_h_76Zp2tQ1QAlTV1EACLcB%2Fs1600%2FParis-fashion-week-spring-summer-2017-best-shows-runway-looks.jpg&f=1&nofb=1&ipt=df2995de203253f9550874aa0f79d76a8b9894987f62c027637a9f753a58fe9c&ipo=images",
    participatingModels: [
      models[0], // Jane Doe
      models[1], // Emily Clarke
    ],
    productsShowcased: [
      { name: 'Red Dress', price: '$200', type: 'Dress' },
      { name: 'Classic Suit', price: '$350', type: 'Suit' },
    ],
  },
  {
    id: '2',
    title: 'Autumn Couture Show',
    date: '2024-09-15',
    location: 'Paris',
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dior.com%2Fcouture%2Fvar%2Fdior%2Fstorage%2Fimages%2Ffolder-media%2Ffolder-videos%2Ffolder-defiles%2Ffolder-defile-haute-couture-automne-hiver-2023-2024%2Fdior_hc_aw2324_show_finalvideo_desktop%2F41089503-1-fre-FR%2Fdior_hc_aw2324_show_finalvideo_desktop.jpg&f=1&nofb=1&ipt=9af9a2b8ead7a982a39c252b7446b747ac1431f74f299948edea3feb61a25f55&ipo=images",
    participatingModels: [
      models[2], // Sophia Martinez
      models[3], // Olivia Johnson
      models[4], // Ava White
    ],
    productsShowcased: [
      { name: 'Elegant Gown', price: '$500', type: 'Gown' },
      { name: 'Chic Jacket', price: '$150', type: 'Jacket' },
    ],
  },
  {
    id: '3',
    title: 'Winter Gala',
    date: '2024-12-05',
    location: 'Milan',
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.harpersbazaararabia.com%2Fcloud%2F2021%2F09%2F15%2FTeegeoOr-milan-fashion-week-street-style.jpg&f=1&nofb=1&ipt=88a56105ac6b871c7100e211fa0265a78f04adcc31ffc49c30f6e96156b47973&ipo=images",
    participatingModels: [
      models[5], // Isabella Thompson
      models[6], // Mia Davis
      models[7], // Charlotte Harris
    ],
    productsShowcased: [
      { name: 'Warm Coat', price: '$400', type: 'Coat' },
      { name: 'Stylish Scarf', price: '$100', type: 'Scarf' },
    ],
  },
];


export const photoSales = [
  {
    id: '1',
    title: 'Glamour Shot of Olivia Jhonson',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.wallhere.com%2Fphoto%2Fface-women-model-portrait-looking-away-blue-eyes-brunette-glasses-makeup-photography-blue-black-hair-fashion-mouth-nose-skin-head-Emily-DiDonato-girl-beauty-smile-eye-woman-lady-lip-cheek-portrait-photography-photo-shoot-brown-hair-facial-expression-eyebrow-human-body-organ-close-up-eyelash-129378.jpg&f=1&nofb=1&ipt=ae2ced10641f2abd26135a9900f9a38a512f9e8ecc2432622a925cda87890def&ipo=images', // Path to the photo
    description: 'A stunning glamour shot of Olivia from a recent high-fashion shoot.',
    price: '$50', // Price for digital download or physical print
  },
  {
    id: '2',
    title: 'Emily Clarke Runway',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.wallhere.com%2Fphoto%2Fwomen-model-face-makeup-painted-nails-simple-background-1585963.jpg&f=1&nofb=1&ipt=e9a66988d5825fceb378e63175cb6266d252d3ca87e43d1fd5aaa6df535c7674&ipo=images',
    description: 'Emily Clarke strutting the runway at Fashion Week.',
    price: '$60',
  },
  {
    id: '3',
    title: 'Sophia Martinez Editorial',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdata.1freewallpapers.com%2Fdownload%2Fmakeup-model-portrait.jpg&f=1&nofb=1&ipt=093f68e92a77ea6dc3adbc7690d4a8fa363d359820dd0a912c75ddb8b72ce491&ipo=images',
    description: 'Sophia Martinez in a captivating editorial shoot.',
    price: '$55',
  },
  
];