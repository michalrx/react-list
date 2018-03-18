import React from 'react';

const FilterForm = (props) => (
    <input type="text"
           value={props.filterFormValue}
           onChange={props.onChange} />
);

export default FilterForm;
