import React, { useState } from 'react';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Grapes',
    'Watermelon',
  ];

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Search Fruits</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '8px', width: '200px' }}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {filteredItems.length === 0 && <li>No items found.</li>}
      </ul>
    </div>
  );
};

export default SearchComponent;
