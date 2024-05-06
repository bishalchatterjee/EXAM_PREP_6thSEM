import React, { useRef, useEffect } from 'react';

function InputWithFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}

export default InputWithFocus;
