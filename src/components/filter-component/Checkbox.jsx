import React, { useEffect, useState } from 'react'
import styles from "@/components/filter-component/filterItem.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '@/store/flights/flights.actions';

const Checkbox = ({item,category}) => {
  const { filters } = useSelector(state => state.flights);
  const [checked,setChecked] = useState(false);
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
  useEffect(() => {
    if(filters.length === 0){
      setChecked(false)
    }
  },[filters])
  return (
    <div className={styles.checkbox}>
      <input checked={checked} onChange={() => setChecked(state => !state)} onClick={(e) => handleFilter(e)} type="checkbox" id={item.name} name={item.name} value={item.value} />
      <label htmlFor={item.name}> {item.name}</label>
    </div>
  )
}

export default Checkbox