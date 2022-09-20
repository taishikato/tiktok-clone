import Header from "./components/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="w-[1150px] mx-auto flex gap-x-8 min-h-screen">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
