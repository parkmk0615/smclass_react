import './App.css';
import MovieList from './components/MovieList';

function App() {
  //json데이터, 배열객체
  const movies = [
    {no:1,title:"해리포터 1",date:"2020-01-01"},
    {no:2,title:"해리포터 2",date:"2021-01-01"},
    {no:3,title:"해리포터 3",date:"2022-01-01"},
  ]

  // 반복문 map함수는 return해서 값을 돌려줌. for문 반복만 함. return없음.
  // 최초 스프링에서 데이터를 useEffect로 가져와서 map으로 리스트를 출력하는 형태구성 
  const mlist = movies.map((movie)=>{
    return(
      <MovieList movie={movie} key={movie.no}/>
    );
  });


  return (
    <div className="main">
      <h2>게시판</h2>
      {mlist}

      
      
      
      
      {/* <MovieList uBtn="update" dBtn="delete" />
      <MovieList uBtn="변경" dBtn="제거"/>
      <MovieList/> */}


    </div>
  );
}

export default App;