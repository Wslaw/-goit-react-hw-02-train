/*ШАГ 1.    Створюємо Классовий компонент */
// Пункт 1 импорт Component
import { Component } from "react";

// За для родивіться як виглядає розмітка імпортуємо css модуль
import styles from "./main-menu.module.css"

/* ШАГ 2.   Створюємо Дочірній класс(классовий компонент) і розмітку*/
// Пункт 2  2.	Створити дочірній класс від классу Component, прописавши
// в ньому метод “render”, який повертає HTML - розмітку компоненту.

class MainMenu extends Component {
    // constructor(props) {
        /* Super(props) Викликає конструктор батьківського класу */
        // Пропси будут достурні в рендері через this
    //   super(props);
    // }
    state = {
    activeIndex: 0,
    }

    handleClick(idx) {
        this.setState({
        activeIndex: idx
    })
}


    render() {
        console.log(this.state);
        const { items } = this.props;
        const { activeIndex } = this.state;

        const elements = items.map(({ id, text, href }, index) => (
          <li key={id}>
                <a
                    onClick={()=>this.handleClick(index)}
              href={href}
              className={
                index === activeIndex
                  ? `${styles.link} ${styles.active}`
                  : styles.link
              }
            >
              {text}
            </a>
          </li>
        ));
        return (
          <ul className={styles.menu}>
         {elements}
          </ul>
        );
    }
}

export default MainMenu;
// ШАГ 3   -->  в APP.jsx