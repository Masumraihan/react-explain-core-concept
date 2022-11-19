import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
//const movies = ['marvel','dc','sony','diseny','fox','HBO'];
//const favorite = ['End Game','Justice League', 'Frozen', 'x-man','GOT'];
function App() {
  const [favorite,setFavorite] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => {
      setFavorite(data.results)

    })
  },[])
  return (
    <div className="App">
      <MoviesCount></MoviesCount>

      {
        favorite.map(mv => <Movie name = {mv.name.first} key={mv.phone}></Movie>)
      };
     
      {/*{
        //movies.map(movie => <Movie favorite = {movie}></Movie>)
      }*/}
      {/*<Movie name={movies[0]} favorite={favorite[0]}></Movie>
      <Movie name={movies[1]} favorite={favorite[1]}></Movie>
      <Movie name={movies[2]} favorite={favorite[2]}></Movie>
      <Movie name={movies[3]} favorite={favorite[3]}></Movie>
      <Movie name={movies[4]} favorite={favorite[4]}></Movie>*/}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function Movie(props){
  const movieStyle = {
    border:'2px solid tomato',
    margin:'50px'
  }
  return (
    <div style={movieStyle}>
      <h2> I have done all {props.name} movies.</h2>
      <h3> My most favorite movie is {props.favorite}</h3>
    </div>
  )
}
const btnStyle = {
  margin:'10px',
  padding:'10px'
}
function MoviesCount(){
  const [count,setCount] = useState(0);
  const handleClickIncrease = () => {
    setCount(count + 1);
  }
  const handleClickDecrease = () => {
    setCount(count - 1);
  }
  return(
    <div>
      <h2>movies count : {count}</h2>
      <MovieWatch watched={count * 4} studio="Marvel"></MovieWatch>
      <MovieWatch watched={count * 3} studio="Dc"></MovieWatch>
      <MovieWatch watched={count * 2} studio="Sony"></MovieWatch>
      <button style={btnStyle} onClick={handleClickDecrease}> Movies Decrease</button>
      <button style={btnStyle} onClick={handleClickIncrease}>Movies Increase</button>
    </div>
  )
}
function MovieWatch(props){
  return (
  <h4>Movies Watch {props.studio} : {props.watched}</h4>
  )
}
export default App;
