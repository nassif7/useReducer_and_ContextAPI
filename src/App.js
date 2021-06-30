import "./styles.css";
import AppContextProvider from "./AdvancedAppContext";
import Demo from "./DemoCom";
export default function App() {
  const initialState = {
    darkMode: false
  };

  console.log("App", initialState);

  return (
    <AppContextProvider initialState={initialState}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Edit to see some magic happen!</h2>
        <Demo />
      </div>
    </AppContextProvider>
  );
}
