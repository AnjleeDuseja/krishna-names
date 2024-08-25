import { useParams } from "react-router-dom";
import data from "../krishnaNames.json"

function DisplayName() {
   
    const {id}=useParams();
    const name=data.names.filter(element=> element.name.includes(id))
   
    
    return (
<center>
   <p>
Name : {name[0].name}
   </p>
   <p>Meaning: {name[0].meaning}</p>
   </center>
    );
  }
  
  export default DisplayName;