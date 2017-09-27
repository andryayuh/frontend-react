import React from 'react';

const List = (props) => (
  <div>
    <h4>List</h4>
    There are {props.data.length} items.
  </div>
);

export default List;