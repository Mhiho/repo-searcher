import React from 'react';
import { useSelector } from 'react-redux';
import '../../style/repos-list.scss';
import { Link } from 'react-router-dom';

function ReposList() {
    const { repos } = useSelector(state => state.repos);

    console.log(repos)
    return(
        <ul className="repos-list-ul">
            {
                repos && repos.map( (repo, index) => {
                    return ( 
                        <li className="repos-list-li" key={`repos-list-${index}`}><Link className='repos-list-a' to={repo.html_url}>{repo.name}</Link></li>
                    )
                })
            }
        </ul>
    )
}
export default ReposList;