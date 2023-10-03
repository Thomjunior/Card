
import Header from './components/Header';
import Concepts from './components/Concept';
import concepts from './components/Constant';


function App() {
  return (
    <div>
       <Header/>
      <ul id="concepts">
      <Concepts 
     conceptual ={concepts[0]}
     /> 
        <Concepts 
          conceptual ={concepts[1]}
            />
      <Concepts
        conceptual ={concepts[2]}
       />    
      </ul>
      <button onClick={()=>{console.log(" i have been clicked")}}>submitt</button>
    </div>
  );
}
export default App;
