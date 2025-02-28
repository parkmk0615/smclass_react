import React,{useState} from "react";
const Form =() =>{

      const [id,setId] = useState('');
      const [pw,setPw] = useState('');

      const loginBtn=() =>{
        alert("엔터키 클릭")
      }
      const keypress = (e) =>{
        console.log("버튼 클릭");
        if(e.keyCode == 13){
          loginBtn();
        }
      }

    return(
        <>
        <Form>
        <div classname="mb-3">
          <label for="exampleInputEmail1" classname="form-label">ID</label>
          <input type="text" value={id} onChange={(e)=>setId(e.target.value)} classname="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          
        </div>
        <div classname="mb-3">
          <label for="exampleInputPassword1" classname="form-label">Password</label>
          <input type="password" value={pw} onChange={(e)=>setPw(e.target.value)} onKeyUp={keypress} classname="form-control" id="exampleInputPassword1"/>
        </div>
        <div classname="mb-3 form-check">

        </div>
        <button type="button" onClick={loginBtn} classname="btn btn-primary">로그인</button>
      </Form>
        </>
    )
}

export default form;