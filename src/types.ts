export type BrowseType = ['Top Rated', 'Tv On The Air', 'Popular', 'Upcoming'];
export type CategoriesType = [
  'Action',
  'Comedy',
  'Drama',
  'Horror',
  'Family',
  'Music',
  'Thriller'
];

export interface NavigationProps {
  browse: BrowseType;
  categories: CategoriesType;
}

export interface SidebarNavigationGenerator {
  option: string,
  key: number,
  navName: string
}
