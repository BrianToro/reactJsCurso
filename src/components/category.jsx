import React from 'react';
import '../assets/styles/components/category.scss'

const Category = ({children, title}) => (
    <div className="categories">
        <h3 className="categories__title">{ title }</h3>
        {children}
    </div>
);

export default Category;