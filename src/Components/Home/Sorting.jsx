import React from 'react';

export default function Sorting({ handleSortingChange }) {
  return (
    <div className="flex items-center mt-12 justify-end">
      <select
        className="w-32 h-9 rounded"
        name="sorting"
        id="sorting"
        onChange={handleSortingChange}
      >
        <option disabled value="">
          Select
        </option>
        <option value="all">All</option>
        <option value="increasing">Increasing Price</option>
        <option value="decreasing">Decreasing Price</option>
      </select>
    </div>
  );
}
