import React from 'react';
import styles from './vote.module.css';

const VoteActions = ({options, leaveVote}) => {
    const buttonElements = options.map(name => 
    (<button
      onClick={() => leaveVote(name)}
      className={styles.btn}
      key={name}
    >
      {name}
    </button>)
  );
    return (        

        <div className={styles.block}>
          <h4 className={styles.blockTitle}>Leave yuor vote</h4>
          {buttonElements}
        </div>
    )
}

export default VoteActions;