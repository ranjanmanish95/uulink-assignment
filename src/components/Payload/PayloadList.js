import classes from './PayloadList.module.css';
import Card from '../UI/Card';
import PayloadItem from './PayloadItem/PayloadItem';
import {useEffect, useState} from 'react';
import {getPayloadData} from '../store/reducers/payloadSlice';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../Pagination'

  const PayloadList = ()=>{

    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(10);

    const payloadData = useSelector((state) => state.payload.spaceXPayload);
    const dispatch = useDispatch();

    useEffect(()=>{
     dispatch(getPayloadData());
    },[])

    //Change Page 
    const paginate = (pageNumber)=> setCurrentPage(pageNumber);


    //Get current posts
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = payloadData.slice(indexOfFirstData,indexOfLastData-1);

    return (
        <section className={classes.list}>
          <Card>
            <ul>
               <PayloadItem payload={currentData}/>
            </ul>
          </Card> 
          <Pagination dataPerPage={dataPerPage} totalData={payloadData.length} paginate={paginate}/>
        </section>
    )
  };

  export default PayloadList;