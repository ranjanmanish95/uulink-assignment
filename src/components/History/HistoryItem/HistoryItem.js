import classes from './HistoryItem.module.css';
const HistoryItem = props =>{
    const history = props.history;
    return (
    (
    history.map(item=>(<li className={classes.item}>
    <div>
        <h3>{item.title}</h3>
        <div className={classes.details}>{item.details}</div>
        <div className={classes.date}>{(new Date(item.event_date_utc)).toString()}</div>
    </div>
    <div></div>
    </li>))
    ))
}

export default HistoryItem;