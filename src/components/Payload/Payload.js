import { Fragment } from "react";
import PayloadList from "./PayloadList";
import PayloadSummary from "./PayloadSummary";

const History =()=>{
return(
    <Fragment>
        <PayloadSummary/>
        <PayloadList/>
    </Fragment>
)
}

export default History;