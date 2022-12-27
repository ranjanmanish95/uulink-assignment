import classes from './HistoryList.module.css';
import Card from '../UI/Card';
import HistoryItem from './HistoryItem/HistoryItem';
import { useSelector, useDispatch } from 'react-redux';
import {useEffect, useState} from 'react';
import {getHistoryData} from '../store/reducers/historySlice';
import Pagination from '../Pagination';

  const HistoryList = ()=>{
    
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(5);

    const historyData = useSelector((state) => state.history.spaceXHistory);
    const dispatch = useDispatch();
    
    useEffect(()=>{
     dispatch(getHistoryData());
    },[])

    //Change Page 
    const paginate = (pageNumber)=> setCurrentPage(pageNumber);


    //Get current posts
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = historyData.slice(indexOfFirstData,indexOfLastData-1);

    return (
        <section className={classes.list}>
          <Card>
            <ul>
               <HistoryItem history={currentData}/>
            </ul>
          </Card>
          <Pagination dataPerPage={dataPerPage} totalData={historyData.length} paginate={paginate}/> 
        </section>
    )
  };
  export default HistoryList;