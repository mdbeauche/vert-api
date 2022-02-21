const database = [
  {
    title: 'test 1',
    photo: '',
    shortDescription: 'short 1',
    description: 'long 1',
  },
  {
    title: 'test 2',
    photo: '',
    shortDescription: 'short 2',
    description: 'long 2',
  },
  {
    title: 'test 2 extra',
    photo: '',
    shortDescription: 'short 2 extra',
    description: 'long 2 extra',
  },
];

const search = (title: string) => database.filter((itm) => itm.title.includes(title));

export default search;
