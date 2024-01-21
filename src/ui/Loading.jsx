import React from 'react';

export default function Loading() {
  return (
    <div className="flex items-center mx-auto
     justify-center h-full">
      <div className="animate-spin mx-auto rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-500"></div>
    </div>
  );
}
