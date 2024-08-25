import { useParams } from "react-router-dom";
import data from "../krishnaNames.json"
import bannerImage from "../assets/banner.jpg"

import matkiImage from "../assets/matki.jpg"


function DisplayName() {
   
    const {id}=useParams();

    function isName(dataName) {
      return dataName.name === id;
    }
    const name=data.names.find(isName)
   
    
    return (
      <div className="bg-white">
<div className="flex flex-col items-center bg-white ">
   <div>
<img className="h-50 w-50 " src={bannerImage} alt="" />
</div>
<div >
   <p className="text-4xl font-bold text-gray-700 capitalize bg-slate-200 py-2 px-5 shadow-lg border-slate-900">
 {name.name}
   </p>
   </div>
   <p className="box-border p-4 text-xl italic line-clamp-3 text-teal-950 font-underline font-sans bg-white"> {name.meaning}</p>
  
   </div>
   
   <div className="flex flex-col items-end bg-white h-50 ">
   <img className="h-20 p-3 bg-white mb-9" src={matkiImage} alt=""  />
   
   
   
   </div>
    </div>

    );
  }
  
  export default DisplayName;