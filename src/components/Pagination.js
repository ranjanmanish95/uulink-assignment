import React from 'react';
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';



const Pagination = ({dataPerPage, totalData, paginate})=>{
    const pageNumber = [];
    for (let i=0; i<= Math.ceil(totalData/dataPerPage); i++){
        pageNumber.push(i);
}

const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const isHistory = queryParams.get('tab') === 'History';

 return (
    <nav>
        <ul className='pagination'>
            {pageNumber.map(number =>(
               <li key={number} className='page-item'>
                 <Link onClick={()=>paginate(number)} to={'/?tab='+ (isHistory? 'History' : 'Payload')} className='page-link' style={{color: '#ad5502'}}>
                    {number}
                 </Link>
               </li>
            ))}
        </ul>
    </nav>
 )
}

export default Pagination;