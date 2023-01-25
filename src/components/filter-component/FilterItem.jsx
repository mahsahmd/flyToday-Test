import React from 'react'
import styles from "@/components/filter-component/filterItem.module.scss";
import Checkbox from './Checkbox';

const FilterItem = ({ category, items }) => {

    //TODO:set input checkox to False one filteres are removed
    //TODO:handle checkbox deselection
    return (
        <div className={styles.filterItem}>
            <p className={styles.category}>{category.fa}</p>
            {items.map((item) => {
                return (
                   <Checkbox key={item.name} item={item} category={category}/>

                )
            })}
        </div>
    )
}

export default FilterItem