import { Loader } from "components/Loader/Loader";
import { HomeScreen } from "./Screens/HomeScreen/HomeScreen";
import { Provider } from "react-redux";
import { store } from "store/store";

function App() {
  return (
    <Provider store={ store } >
      <HomeScreen />
      <Loader />
    </Provider>
  );
}

export default App;
