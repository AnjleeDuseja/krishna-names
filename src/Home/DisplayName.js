import { useParams } from "react-router-dom";
import data from "../krishnaNames.json"
import bannerImage from "../assets/banner.jpg"

function DisplayName() {
   
    const {id}=useParams();
    const name=data.names.filter(element=> element.name.includes(id))
   
    
    return (
<center>
<img className="h-50 w-50 " src={bannerImage} alt="" />
   <p className="text-4xl font-bold text-gray-700 capitalize bg-gray-200 py-2">
 {name[0].name}
   </p>
   <p className="box-border p-4 text-2xl font-underline"> {name[0].meaning}</p>
   </center>
    );
  }
  
  export default DisplayName;