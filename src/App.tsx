import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { BrowseType, CategoriesType } from './types';

const App: React.FC = () => {
  const [browse] = useState<BrowseType>([
    'Top Rated',
    'Tv On The Air',
    'Popular',
    'Upcoming'
  ]);
  const [categories] = useState<CategoriesType>([
    'Action',
    'Comedy',
    'Drama',
    'Horror',
    'Family',
    'Music',
    'Thriller'
  ]);

  return (
    <div className='container'>
      <Sidebar browse={browse} categories={categories} />
    </div>
  );
};

export default App;
