import { Component } from 'react';
import styles from './toggle-button.module.css';

class ToggleButton extends Component {
  state = {
    active: false,
    // active: true,
  };

    handelclick = () => {
        console.log(this)
        const { active: prevActive } = this.state;
        this.setState({
            active: !prevActive 
        })
    }
  render() {
    const { text } = this.props;
      const { active } = this.state;

      const fullClassName = active ? `${styles.btn} ${styles.active}` : styles.btn;

    return (
      <button onClick={this.handelclick} type="submit" className={fullClassName}>
        {text}
      </button>
    );
    // return <button type="submit" className={`${styles.btn} ${styles.active}`}>Click me</button>
  }
}
export default ToggleButton;
