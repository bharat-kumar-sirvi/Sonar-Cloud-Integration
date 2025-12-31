export const App = ({ flag }: { flag: boolean }) => {
  if (flag == true) {
    console.log("True");
  }
  if (flag == false) {
    console.log("False");
  }
  console.log("Sonar Cloud");
  var a=10;
  let b;
  b=10;
  return <h1 style={{ backgroundColor: "royalblue" }}>Sonar Cloud + {flag}</h1>;
};

export default App;
