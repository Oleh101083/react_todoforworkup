import React,{useEffect, useState} from 'react';
import ItemList from './todo/ItemList';
import AddItemForm from './todo/AddItemForm';
import Clock from './Clock/Clock'
import DateDayly from './Date/Date';





const Wednesday = () => {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    // assuming no duplicates for demo purposes
    setItems([...items, item]);
  };
  const removeItem = (itemToBeDeleted) => {
    setItems(items.filter((item) => itemToBeDeleted !== item));
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <div className="App">
      <header className="App-header">
       <h1>Середа</h1>
       <div className="wrapp_for-top">
       <Clock />
     <DateDayly />
       </div>
        
        <ItemList items={items} removeItem={removeItem} />
        <AddItemForm addItem={addItem} />

       
      </header>
     
    </div>
  )
}

export default Wednesday