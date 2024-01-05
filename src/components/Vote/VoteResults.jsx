import styles from './vote.module.css';


const VoteResult = ({ total, democratePercantage, republicantePercantage }) => {
  return (
    <>
      <p>Total: {total}</p>
      <p>Democrats: {democratePercantage}%</p>
      <p>Respublicants: {republicantePercantage}%</p>
    </>
  );
};

export default VoteResult;