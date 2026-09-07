import { Container } from "react-bootstrap";
import SearchForm from "./SearchForm";
import MovieApp from "./MovieApp";
import { useEffect, useState } from "react";
import axios from "axios";


const App = () => {
  const [title,setTitle]=useState("")

  const [movieData,setMovieData]=useState([])
//adb510fe9eee466a0e346cfbc1b1bfbc
const searchFormObj ={
  title,
  setTitle,
}
//title:"",setTitle:setTitle
  const getMovie=()=>{
     let apiUrl;
     if(title ===""){
      apiUrl=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=adb510fe9eee466a0e346cfbc1b1bfbc&page=1`
     }else{
      apiUrl=`https://api.themoviedb.org/3/search/movie?&api_key=adb510fe9eee466a0e346cfbc1b1bfbc&query=${title}`
     }
     axios.get(apiUrl)
     .then((res)=>res.data)
     .then((finalRes)=>{
      // console.log(finalRes)
      setMovieData(finalRes.results)
     })
  }
  useEffect(()=>{
     getMovie();
  }, [title])
  return (
  <>
   <Container fluid className="bg-light py-5">
    <h1>Movie App</h1>
   </Container>
    <SearchForm searchFormObj={searchFormObj}/>
    {
   
      movieData.length>=1 ? <MovieApp movieData={movieData}/> : ""
    }
  </>
)
}


export default App;