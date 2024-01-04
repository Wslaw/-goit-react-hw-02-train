import { Component } from 'react';
import VoteActions from './VoteActions';
import VoteResults from './VoteResults';
import styles from './vote.module.css';

class Vote extends Component {
  static voteOptions = ['democrats', 'republicants'];

  state = {
    democrats: 0,
    republicants: 0,
  };

  calcTotal() {
    const { democrats, republicants } = this.state;
    const total = democrats + republicants;
    return total;
    //  или

    // const values = Object.values(this.state);
    // const total = values.reduce((acum, value)=> acum + value, 0);
  }

  calcPersentage(keyName) {
    const total = this.calcTotal();
    if (!total) {
      return 0;
    }
    const value = this.state[keyName];
    return Number(((value / total) * 100).toFixed(2));
  }

  leaveVote=(keyName)=> {
    this.setState(prevState => {
      return {
        [keyName]: prevState[keyName] + 1 /*расчетные свойства объекта*/,
      };
    });
  }

  render() {
    const { democrats, republicants } = this.state;

    const buttonElements = Vote.voteOptions.map(name => (
      <button
        onClick={() => this.leaveVote(name)}
        className={styles.btn}
        key={name}
      >
        {name}
      </button>
    ));

    const total = this.calcTotal();

    const democratePercantage = this.calcPersentage('democrats');
    const republicantePercantage = this.calcPersentage('republicants');

    return (
      <div className={styles.wrapper}>
        <VoteActions options={Vote.voteOptions} leaveVote={this.leaveVote} />

        <VoteResults
          total={total}
          democratePercantage={democratePercantage}
          republicantePercantage={republicantePercantage}
        />
      </div>
    );
  }
}

export default Vote;
