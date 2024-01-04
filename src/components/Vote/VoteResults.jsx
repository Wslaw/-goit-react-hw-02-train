import styles from './vote.module.css';


const VoteResult = ({ total, democratePercantage, republicantePercantage }) => {
  return (
    <div className={styles.block}>
      <h4 className={styles.blockTitle}>Result</h4>
      <p>Total: {total}</p>
      <p>Democrats: {democratePercantage}%</p>
      <p>Respublicants: {republicantePercantage}%</p>
    </div>
  );
};

export default VoteResult;