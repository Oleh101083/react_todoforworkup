import React, { useState } from 'react';


const AddItemForm = ({ addItem }) => {
  const [item, setItem] = useState('');


  
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(item);
    setItem('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={item} maxlength="25"
         onChange={(e) => setItem(e.target.value)} />
        <button>&#10010;</button>
      </form>
    </div>
  );
};

export { AddItemForm as default };