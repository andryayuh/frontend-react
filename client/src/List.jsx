import React from 'react';

const List = (props) => (
  <div>
    {console.log(props.children.length)}
    <h4>List</h4>
    There are {props.children.length} items.
  </div>
);

export default List;