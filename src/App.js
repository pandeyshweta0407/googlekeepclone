// const Form =()=>{
//   return(
//       <div>
          
//       </div> 
//   );
// }

// export default Form;


import './App.css';
import Home from './components/Home';
import DataProvider from './context/DataProvider';

function App() {
  return (
     <DataProvider>
          <Home/>
    </DataProvider>
     
   
  );
}

export default App;
