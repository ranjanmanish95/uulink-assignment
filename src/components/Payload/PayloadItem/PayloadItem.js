import classes from './PayloadItem.module.css';

const PayloadItem = props =>{
    const payload = props.payload;
    return (
    (
    payload.map(item=>(<li className={classes.item}>
    <div>
        <h3>{item.payload_id}</h3>
        <div className={classes.details}>{item.payload_mass_kg ? `${item.payload_mass_kg} kg` : 'data_not_availabe'}</div>
        <div className={classes.date}>{item.manufacturer}</div>
    </div>
    <div></div>
    </li>))
    ))
}

export default PayloadItem;