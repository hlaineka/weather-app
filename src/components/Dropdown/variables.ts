export type Option = {
  value: string;
  label: string;
  lat: number;
  lng: number;
};

export const options: Array<Option> = [
  {
    value: 'all',
    label: 'Kaikki kaupungit',
    lat: 0,
    lng: 0,
  },
  {
    value: 'espoo',
    label: 'Espoo',
    lat: 60.25,
    lng: 24.6667,
  },
  {
    value: 'jyvaskyla',
    label: 'Jyväskylä',
    lat: 62.2415,
    lng: 25.7209,
  },
  {
    value: 'kuopio',
    label: 'Kuopio',
    lat: 62.8924,
    lng: 27.677,
  },
  {
    value: 'tampere',
    label: 'Tampere',
    lat: 61.4991,
    lng: 23.7871,
  },
];
