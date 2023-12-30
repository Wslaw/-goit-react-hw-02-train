// ШАГ 3.  Імпортуємо компонент MainMenu
import MainMenu from "./MainMenu/MainMenu";
// ШАГ 5. Імпортуємо JSON
import menuItems from "./data/menu.json";


function App() {
  return (
    <div className="App">
      <MainMenu items={menuItems} />
      {
      //   const obj = new MainMenu({items: menuItems});
      // obj.render();
      }
    </div>
  );
};

export default App;
