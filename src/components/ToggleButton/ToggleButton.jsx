import { Component } from 'react';
import styles from './toggle-button.module.css';

class ToggleButton extends Component {
  // constructor(props) {
  //   super(props);
  //   this.onClick = this.handelclick.bind(this);
  // }
  static defaultProps = {
    type: 'submit',
  };

  state = {
    active: false,
    // active: true,
  };

  handelclick = () => {
        // const { active: prevActive } = this.state;
    this.setState(prevState => {
      return {
        active: !prevState.active
      }
    })
  };
  render() {
    const { text, type } = this.props;
    const { active } = this.state;

    const fullClassName = active
      ? `${styles.btn} ${styles.active}`
      : styles.btn;

    return (
      <button onClick={this.handelclick} type={type} className={fullClassName}>
        {text}
      </button>
    );
    // return <button type="submit" className={`${styles.btn} ${styles.active}`}>Click me</button>
  }
}
export default ToggleButton;
