import { useState } from 'react';

function ToggleContent({ condition, trueContent, falseContent }) {
  const [isVisible, setIsVisible] = useState(condition);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle Content</button>
      {isVisible ? trueContent : falseContent}
    </div>
  );
}

export default ToggleContent;
