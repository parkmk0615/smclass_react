import React,{useState} from 'react';
import './App.css';

function App() {

  let name= '홍길동';
  const [ename,setEname] = useState('유관순');
  const [id,setId] = useState('');
  const [pw,setPw] = useState('');
  const [a,setA] = useState('');

  const btn =()=>{
    alert("함수버튼 클릭");
    name="이순신";
    //document.getElementById("d01").innerText = name;
    console.log(name);

    setEname('신사임당');
  }

  const loginBtn =() =>{
    alert("로그인을 진행힙니다");
  }

  const pwBtn =(e)=>{
    console.log("pw inputbox에 글을 입력합니다")
    //엔터키가 들어오면 로그인 버튼을 클릭하도록 구현
    if(e.keyCode == 13){
        loginBtn();
    }
  }

  return (
    <div className='main'>
      <h2>게시판</h2>
      <div id = "d01">{name}</div>
      <div>{ename}</div>
      <br/>
      <input type='text ' name='id' className='id' onChange={(event)=>setId(event.target.value)} value={id} placeholder='아이디를 입력하세요.'/>
      <br/>
      <input type='text ' name='pw' className='pw' onChange={(event)=>setPw(event.target.value)} value={pw} onKeyUp={pwBtn} placeholder='패스워드 입력하세요.'/>
      <br/>
      <button onClick={loginBtn}>로그인</button>
      <br/>
      {/* 자바 스크립트 : onclick, 리액트 : onClick */}
      <button onClick={btn}>변경</button>



      {/* return문 안의 주석 */}
      {/*if문은 사용 불가, 삼항식 사용 */}
     
    </div>
  );
}

export default App;
