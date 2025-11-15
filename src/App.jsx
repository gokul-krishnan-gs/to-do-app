import { useState , useEffect } from 'react'
import './App.css'
import classes from "./styles.module.css";
import  ToDoItem from './components/to-do-item/ToDoItem';
import ToDoDetails from './components/to-do-details/ToDoDetails';

function App() {

  const [toDoList,setToDoList] = useState([]);

  const [loading,setLoading] = useState(false);

  const [errorMessage,setErrorMessage] = useState("");

  const [toDoDetails,setToDoDetails] = useState(null);

  const [openDialog,setOpenDialog] = useState(false)

async function fetchToDoList() {
  try {
    setLoading(true);

    const apiResponse = await fetch("https://dummyjson.com/todos");
    const result = await apiResponse.json();

    if (result?.todos && result.todos.length > 0) {
      setToDoList(result.todos);
      setErrorMessage("");
    } else {
      setToDoList([]);
      setErrorMessage("No todos found");
    }

  } catch (error) {
    console.log(error);
    setErrorMessage("Some Error Occured");
  } finally {
    setLoading(false);
  }
}

async function fetchDetailsOfCurrentToDo(getCurrentToDoId){
 // console.log(getCurrentToDoId);
  try{
    const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentToDoId}`);

    const details = await apiResponse.json();

    if(details){
      setToDoDetails(details);
      setOpenDialog(true);
    } else{
      setToDoDetails(null);
      setOpenDialog(false)
    }

    //console.log(result);



  }catch(error){
    console.log(error)
  }
}


  useEffect(()=>{
    fetchToDoList()
  },[]);

return (
  <div className={classes.mainWrapper}>
    <h3 className={classes.headerTitle}>To Do App Using Material UI</h3>

    {/* Loading */}
    {loading && <h3>Loading...</h3>}

    {/* Error Message */}
    {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>}

    <div className={classes.toDoListWrapper}>
      {
        !loading && !errorMessage && toDoList && toDoList.length > 0 
        ? toDoList.map(toDoItem => (
            <ToDoItem  
              key={toDoItem.id} 
              fetchDetailsOfCurrentToDo={fetchDetailsOfCurrentToDo} 
              todo={toDoItem}
            />
        )) 
        : null
      }
    </div>

    <ToDoDetails 
      openDialog={openDialog} 
      toDoDetails={toDoDetails} 
      setOpenDialog={setOpenDialog} 
      setToDoDetails={setToDoDetails} 
    />
  </div>
);

}

export default App
