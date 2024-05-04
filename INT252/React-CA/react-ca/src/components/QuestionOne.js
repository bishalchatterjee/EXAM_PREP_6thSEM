//Build a simple drag-and-drop interface that allows users to reorder a list of items through drag and drop.
//Use React state, componenets and hooks to manage the list's data and user intercations.
import React, { useState } from 'react';


function QuestionOne(){
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('text/plain', index);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, index) => {
        const draggedIndex = e.dataTransfer.getData('text/plain');
        const newItems = [...items];
        const draggedItem = newItems[draggedIndex];

        newItems.splice(draggedIndex, 1);
        newItems.splice(index, 0, draggedItem);

        setItems(newItems);
    };

    return (
        <div>
            <h1>Drag and Drop List</h1>
            <ul>
                {items.map((item, index) => (
                    <li
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionOne;