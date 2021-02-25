import React from 'react';
import { useSelector } from 'react-redux';
import '../../style/repos-list.scss';

function ReposList() {
    const { repos } = useSelector(state => state.repos);

    console.log(repos)

    return(
        <ul className="repos-list-ul">
            {
                repos && repos.map( (repo, index) => {
                    return ( 
                        <li className="repos-list-li" key={`repos-list-${index}`}>{repo.name}</li>
                    )
                })
            }
        </ul>
    )
}
export default ReposList;