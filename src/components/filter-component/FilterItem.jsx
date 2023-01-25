import React, {  useRef } from 'react'
import styles from "@/components/filter-component/filterItem.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '@/store/flights/flights.actions';

const FilterItem = ({ category, items }) => {
    const { filters } = useSelector(state => state.flights);
    const dispatch = useDispatch()
    const handleFilter = (e) => {
        const newFilter = { key: category.value, value: e.target.value }
        let existingFilter = filters.find(filter => filter.key === newFilter.key);
        if (existingFilter) {
            let updatedFilters = [...filters];
            let index = updatedFilters.findIndex(filter => filter.key === existingFilter.key);
            updatedFilters[index] = { ...updatedFilters[index], values: [...updatedFilters[index].values, newFilter.value] };
            dispatch(setFilters(updatedFilters));
        } else {
            const newFilterWithValues = { key: newFilter.key, values: [newFilter.value] };
            const updatedFilters = [...filters, newFilterWithValues];
            dispatch(setFilters(updatedFilters));
        }

    }
    //TODO:set input checkox to False one filteres are removed
    //TODO:handle checkbox deselection
    return (
        <div className={styles.filterItem}>
            <p className={styles.category}>{category.fa}</p>
            {items.map((item) => {
                return (
                    <div className={styles.checkbox} key={item.name}>
                        <input  onClick={(e) => handleFilter(e)} type="checkbox" id={item.name} name={item.name} value={item.value} />
                        <label htmlFor={item.name}> {item.name}</label>
                    </div>


                )
            })}
        </div>
    )
}

export default FilterItem