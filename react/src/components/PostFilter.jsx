import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue = "Сортировка"
                options = {[
                    {value: 'nameRu', name: 'По названию'},
                    {value: 'filmLength', name: 'По времени'},
                    {value: 'rating'||'ratingKinopoisk', name: 'По рейтингу'}
                ]}
            />
            <MyInput
                value = {filter.query}
                onChange = {e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            />
        </div>
    );
};

export default PostFilter;