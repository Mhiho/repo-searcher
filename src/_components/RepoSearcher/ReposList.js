import React from 'react';
import { useSelector } from 'react-redux';


function ReposList() {
    const repos = useSelector(state => state.repos);

    console.log(repos)

    return(
        <ul>
            <li>el listy</li>
        </ul>
    )
}
export default ReposList;