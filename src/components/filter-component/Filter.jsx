import React, { useState } from 'react';
import styles from "@/components/filter-component/filter.module.scss";
import { filters } from '@/utils/filters';
import FilterItem from './FilterItem';
import { useDispatch } from 'react-redux';
import { setFilters } from '@/store/flights/flights.actions';

const Filter = () => {
  const dispatch = useDispatch();
  const onRemoveFilters = () => {
    dispatch(setFilters([]))
  }
  return (
    <div className={styles.filterSection}>

        <div className={styles.filterHeader}>
            <p>فیلترها</p>
            <p className={styles.removeFilters} onClick={onRemoveFilters}>حذف فیلترها</p>
           
        </div>
        {
                filters.map((filter) => <FilterItem  key={filter.category.value} category={filter.category} items={filter.items}/> )
            }
    </div>
  )
}

export default Filter