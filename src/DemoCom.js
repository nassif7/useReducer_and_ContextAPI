import React from "react";
import { useTheme } from "./AdvancedAppContext";

const Demo = () => {
  const { state, actions } = useTheme();

  console.log("demo", state);
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   const getData = async () => {
  //     fetch("https://api.publicapis.org/entries")
  //       .then((response) => response.json())
  //       .then((data) => setData(data.entries));
  //   };
  //   getData();
  // }, []);

  return <div onClick={() => actions.changeTheme()}> hello </div>;
};

export default Demo;
