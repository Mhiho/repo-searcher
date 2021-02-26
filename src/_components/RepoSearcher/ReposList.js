import React from 'react';
import { useSelector } from 'react-redux';
import '../../style/repos-list.scss';


function ReposList() {
    const { repos } = useSelector(state => state.repos);
    const dupa = useSelector(state=> state)
    console.log(dupa)
    return(
        <ul className="repos-list-ul">
            {
                repos && repos.map( (repo, index) => {
                    return ( 
                        <li className="repos-list-li" key={`repos-list-${index}`}><a className='repos-list-a' href={repo.html_url}>{repo.name}</a></li>
                    )
                })
            }
        </ul>
    )
}
export default ReposList;