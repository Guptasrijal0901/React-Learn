import './App.css';
import Header from "./MyComponents/Header"
import ToDos from './MyComponents/ToDos';
import Footer from './MyComponents/Footer';
function App() {
  let ToDos = [
    {
      SNo: 1,
      Title: "Go to market",
      Description: "Go to Market for shopping"
    },
    {
      SNo: 2,
      Title: "Go to school",
      Description: "Go to school to study"
    },
    {
      SNo: 3,
      Title: "Go to parlour",
      Description: "Go to Parlour for makeup"
    }

  ]
  return (
    <>
    <Header/>
    <ToDos/>
    <Footer/>
    </>
  );
}

export default App;