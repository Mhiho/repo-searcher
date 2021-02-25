import React, { useState, useEffect } from 'react';
import { getRepos } from '../../actions/getRepos';
import { useDispatch } from 'react-redux';
import '../../style/searchbar.scss';

import errorHandler from '../../hoc/errorHandler';

const SearchBar = () => {
    const [login, setLogin] = useState('');
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(getRepos(login));
        setLoading(false);
    }

    return (
        <div className="searchbar-container">
                <form onSubmit={submitHandler}>
                    <div className="searchbar-input">
                        <input
                            placeholder="Search by user"
                            type="search"
                            value={login}
                            onChange={e => setLogin(e.target.value)}
                        />
                        <input type="submit"
                            value="Search Repos"
                        />
                    </div>
                </form>
            </div>
    )
}


export default errorHandler(SearchBar);