import { useParams } from "react-router-dom";
import data from "../krishnaNames.json"
import bannerImage from "../assets/banner.jpg"

function DisplayName() {
   
    const {id}=useParams();
    const name=data.names.filter(element=> element.name.includes(id))
   
    
    return (
<div className="flex flex-col items-center ">
   <div>
<img className="h-50 w-50 " src={bannerImage} alt="" />
</div>
<div >
   <p className="text-4xl font-bold text-gray-700 capitalize bg-slate-200 py-2 px-5 shadow-lg border-slate-900">
 {name[0].name}
   </p>
   </div>
   <p className="box-border p-4 text-xl italic line-clamp-3 text-teal-950 font-underline font-sans"> {name[0].meaning}</p>
   </div>
    );
  }
  
  export default DisplayName;