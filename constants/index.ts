export const headerLinks = [
  {
    label: 'Mechanics',
    route: '/',
  },
  {
    label: 'Create mechanic',
    route: '/mechanic/create',
  },
  {
    label: 'My Profile',
    route: '/profile',
  },
]

export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}
