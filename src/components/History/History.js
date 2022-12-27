import { Fragment } from "react";
import HistoryList from "./HistoryList";
import Summary from "./Summary";
const History =()=>{
return(
    <Fragment>
        <Summary/>
        <HistoryList/>
    </Fragment>
)
}

export default History;