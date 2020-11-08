import React from 'react';

const Item = ({ item, removeItem }) => {
  
    return (
    <div className="item_row">
        <div>
        <input type="checkbox"/>
      <span>{item}</span>
        </div>
       
      
      <button onClick={() => removeItem(item)}>X</button>
      
      
    </div>
  );
};

export { Item as default };


