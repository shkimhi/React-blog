import './App.css';
import {useState} from "react";

function App() {

    let logo = 'ReactBlog'; // 데이터를 잠깐 저장할 땐 변수 ( 변수값이 바뀔시 재 렌더링 X )
    let [post1,setpost1] = useState(['남자 코트 추천111',"남자 코트 추천222","남자 코트 추천333"]); // state는 변경시 html이 재 렌더링이 됨
    let [nice,setnice] = useState(0);

    function niceButton(){
        setnice(nice+1);
    }
    function changePost() {
        // 배열을 복사한 후 첫 번째 요소만 수정
        let newPosts = [...post1];
        newPosts[0] = "여자코트추천111";
        setpost1(newPosts);
    }


    return ( // 하나의 태그로 시작해서 하나의 태그로 끝나야함.
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
        <div className="list">
            <h4>{post1[0]} <span onClick={niceButton}>🎈</span> {nice} </h4>
            <p>9월 19일 발행</p>
        </div>
        <div className="list">
            <h4>{post1[1]} <span>🎈</span>  </h4>
            <p>9월 19일 발행</p>
        </div>
        <div className="list">
            <h4>{post1[2]} <span>🎈</span>  </h4>
            <p>9월 19일 발행</p>
        </div>
        <button onClick={changePost}>글 제목 변경</button>
    </div>
  );
}

export default App;
