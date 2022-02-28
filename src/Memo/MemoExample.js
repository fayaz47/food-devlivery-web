import {React,useMemo,useEffect,useState} from 'react';
import axios from 'axios';

const MemoExample = () => {
    const [data,setData] = useState(null);
    const [toggle, setToggle] = useState(false);

 useEffect(() => {
    axios
      .get("http://localhost:8080/orphanssList")
      .then((response) => {
        setData(response.data);
        console.log("API WAS CALLED : in useAffect",data.data);
      });
  }, []);


const findOrphans = (childrens) => {
    if(childrens == null) {
          console.log("findOrphans() Childrens WAS null");
     return null;
    }
  //  let orphans = [];
  let orphansName = "Fay";
       for(let i=0; i <= 2; i++) {
       if(childrens[i].age === 14) {
           orphansName = childrens[i].name;
       }
       }
    
      return orphansName;
};

//const findOrphansMemo = useMemo(() =>  findOrphans(data) ,[data]);


 return (
  <div className="App">
    <div>{findOrphans(data)} </div>

    <button onClick={ () => {
        setToggle(!toggle); 
    }}> Toggle </button>
    {toggle && <h1> Memo toggle </h1>}
  </div>
 );
}


export default MemoExample;