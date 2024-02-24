// App.js File
import "./AppStyle.css";
import ImageSlider from "./ImageSlider";

import ToDoComponent from "./ToDoComponent";

//primary goal: to be able to have a running website on github
//secondary goal: to be able to organize the code in multiple documents.
//this document is for the essential functions
export default function App() {
  //reset todos


  //what this document overall returns, the set up of the webpage
  //calling in the Form, List, and ImageSlider
  return (
    <div className="App">
      <h1>Task List</h1>
      <ToDoComponent />
      <div className="containerStyles">
        <ImageSlider />
      </div>
    </div>
  );
}
