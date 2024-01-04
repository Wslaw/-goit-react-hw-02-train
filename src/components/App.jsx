// ШАГ 3.  Імпортуємо компонент MainMenu
import MainMenu from "./MainMenu/MainMenu";
// ШАГ 5. Імпортуємо JSON
import menuItems from "./data/menu.json";
import ToggleButton from './ToggleButton/ToggleButton'
import Vote from './Vote/Vote'

function App() {
  return (
    <div className="App">
      <MainMenu items={menuItems} />
      {
        //   const obj = new MainMenu({items: menuItems});
        // obj.render();
      }
      <ToggleButton text='Click me' type="button" />
      <Vote />
    </div>
  );
};

export default App;
