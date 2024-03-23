import React, { useState } from 'react';
import { Rating } from 'flowbite-react';
export function FilterSidebar({ onFilterChange }) {
  const [selectedFilters, setSelectedFilters] = useState({
    category: '',
    brand: '',
    price: '',
    rating: '',
  });

  const categories = ['Coffee'];
  const brands = ['Abu Auf', 'Farouk Pasha'];
  const priceRanges = [
    'Up to 50 USD',
    '51 to 100 USD',
    '101 to 150 USD',
    '151 USD & above',
  ];
  const ratings = [
    FiveStar(),
    FourStar(),
    ThirdStar(),
    TwoStar(),
    OneStar(),
    ZeroStar(),
  ];

  const handleFilterClick = (filterType, value) => {
    const newFilters = { ...selectedFilters, [filterType]: value };
    setSelectedFilters(newFilters);
    onFilterChange(filterType, value);
  };

  const renderFilterList = (filterType, items) => (
    <ul className="list-none">
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => handleFilterClick(filterType, item)}
          className={`cursor-pointer p-2 text-gray-700 hover:bg-gray-100`}
        >
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="p-4 w-64 bg-white shadow-md">
      <h4 className="font-bold text-lg mb-4">Filter by</h4>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Category:
        </label>
        {renderFilterList('category', categories)}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Brand:
        </label>
        {renderFilterList('brand', brands)}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Price Range:
        </label>
        {renderFilterList('price', priceRanges)}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Rating:
        </label>
        {renderFilterList('rating', ratings)}
      </div>
    </div>
  );
}

function FiveStar() {
  return (
    <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
    </Rating>
  );
}
function FourStar() {
  return (
    <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
    </Rating>
  );
}
function ThirdStar() {
  return (
    <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
    </Rating>
  );
}
function TwoStar() {
  return (
    <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
    </Rating>
  );
}
function OneStar() {
  return (
    <Rating>
      <Rating.Star />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
    </Rating>
  );
}
function ZeroStar() {
  return (
    <Rating>
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
    </Rating>
  );
}
