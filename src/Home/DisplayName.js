import { useParams } from "react-router-dom";
import data from "../krishnaNamesU.json"
import bannerImage from "../assets/banner.jpg"

import matkiImage from "../assets/matki.jpg"


function DisplayName() {
   
    const {id}=useParams();

    function isName(dataName) {
      return dataName.name === id;
    }

    function generateLinks(){
      const LinkArr=data.names.map((ele)=>{return "https://krishna-name.vercel.app/"+ele.name});
      console.log(LinkArr)

    }
    
    generateLinks();



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
   <p className="box-border p-4 my-4 text-xl italic line-clamp-3 text-teal-950 font-underline font-sans "> {name.meaning}</p>
  {name.sindhi && <p className="box-border p-4 my-4 text-xl italic line-clamp-3 text-teal-950 font-underline font-sans "> {name.sindhi}</p>
   
    }</div>
   
   <div className="flex flex-col items-end  ">
   <img className="h-20 p-3 bg-white mb-9" src={matkiImage} alt=""  />
   
  
   </div>
    </div>

    );
  }
  
  export default DisplayName;






// 61. Priyakant  The beloved one.
// 62. Sarvdata  The giver of everything.
// 63. Chakradhar  The bearer of the discus (Sudarshan Chakra).
// 64. Kans Sudhan  The slayer of Kansa.
// 65. Nandanandan  The son of Nanda.
// 66. Jagatpita  The father of the universe.
// 67. Parthasarathi  The charioteer of Arjuna (Partha).
// 68. Abhay  The fearless one.
// 69. Vaman  The dwarf incarnation (Vamana avatar).
// 70. Sarvanand  The source of all bliss.