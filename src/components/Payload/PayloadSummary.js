import classes from './PayloadSummary.module.css';

const PayloadSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Check the SpaceX Payload Data</h2>
      <p>
       Here a brief list of spaceX payload data is listed with rocket name, payloads and their manufacturer.
       Have a look on it.
      </p>
    </section>
  );
}

export default PayloadSummary;