import React from 'react';

function AddClass( {children, className } ) {
  const listElement = [
    ...children
  ];
  const lastElement = listElement[listElement.length - 1];
  const modifiedLastElement = React.cloneElement(lastElement, { className: className });
  const modifiedListElement = [...listElement.slice(0, -1), modifiedLastElement];

  return (
    <>
      {modifiedListElement}
    </>
  );
}

export default AddClass;