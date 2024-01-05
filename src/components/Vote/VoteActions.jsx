import React from 'react';
import styles from './vote.module.css';

const VoteActions = ({ options, leaveVote }) => {
  const buttonElements = options.map(name => (
    <button onClick={() => leaveVote(name)} className={styles.btn} key={name}>
      {name}
    </button>
  ));
  return  (buttonElements) ;
};

export default VoteActions;
