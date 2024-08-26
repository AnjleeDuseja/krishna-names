
function Home() {

const names=["Achala","Achyuta", "Adbhutah","Adideva","Aditya","Ajanma","Ajaya","Akshara", "Amrit","Anand-sagar",
    "Ananta",
    "Anantajeet",
    "Ananya",
    "Aniruddha",
    "Aparajit",
    "Avyukta",
    "Balagopala",
    "Balkrishna",
   "Chaturbhuja",
   "Danavendra",
   "Dayalu",
   "Dayanidhi",
   "Devadidev",
   "Devakinandana",
   "Devesha",
   "Dharmadhyaksha",
   "Dravin",
   "Dwarkapati",
   "Gopal",
   "Gopalpriya",
   "Govinda",
   "Gyaneshwar",
   "Hari",
   "Hiranyagarbha",
   "Hrishikesha",
   "Jagadguru",
   "Jagadisha",
   "Jagannath",
   "Janardana",
   "Jayantah",
   "Jyotiraditya",
   "Kamalnath",
   "Kamalnayan",
   "Kamsantak",
   "Kanjalochana",
   "Keshava",
   "Krishna",
   "Lakshikantam",
   "Lokadhyaksha",
   "Madan"
]

console.log(names.map(n=>"https://krishna-name.vercel.app/"+n))
  return (
  <p className="text-4xl font-bold underline">Happy Janamashtmi!</p>
  );
}

export default Home;
