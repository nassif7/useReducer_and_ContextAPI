import "./styles.css";
import AppContextProvider from "./AdvancedAppContext";
import Demo from "./Demo";
export default function App() {
  const initialState = {
    darkMode: false
  };

  console.log("App", initialState);

  return (
    <AppContextProvider initialState={initialState}>
      <div className="App">
        <h1>useReducer&ContextAPI = {`<3`} </h1>
        <h2>a basic implimentation on useReducer and Context API</h2>
        <p>
          find the implimentation in the <b>AdvancedAppContext</b>
        </p>
        <p>
          another context to manage app theme is in the <b>AppContext </b>
        </p>
        <p>
          <i>
            in both contexts i am exporting a customeHook in order to make the
            usage of the context a bit simpler
          </i>
        </p>
        <p>
          <i>check the console to see how the state update onClick</i>
        </p>
        <Demo />
      </div>
    </AppContextProvider>
  );
}
