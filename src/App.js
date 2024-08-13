import logo from './logo.svg';
import './App.css';
import Box from "./component/Box"

import {useState} from "react";
//바뀌어야 되는 부분이 있때
//1. 박스 2개(타이틀, 사진, 결과)
//2. 버튼(가위, 주먹, 보)
//3. 버튼을 누르면 안에 내용이 바뀜
//4. 컴퓨터에서 렌더링하게 값을 줄거임
//5. 이기면 win 띄우고, 지면 lose띄울거임.
//6. 5+) 테두리 색깔 바뀜 주의

//사진이랑 이름 저장할 수 있는 공간 만듦(객체 만들기)
const choice={
  rock: {
    name:"Rock",
    img: "https://png.pngtree.com/png-clipart/20210407/ourlarge/pngtree-stone-rock-realistic-clipart-png-image_3204047.jpg"
  },
  scissors: {
    name:"Scissors",
    img: "https://img.freepik.com/premium-vector/blue-scissors-isolated-white-background-vector-illustration-flat-style-sharp-scissors_112545-439.jpg"
  },
  paper: {
    name:"Paper",
    img: "https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-a-notebook-paper-image_1297634.jpg"
  }
}
function App() {

 const [userSelect,setUserSelect] =useState(null)

 const [computerSelect, setComputerSelect] = useState(null)
 
 const [result, setResult] =useState("")
 const playing=(exchange)=>{
  console.log("선택됨",exchange)
 // userSelect =choice[userChoice]
 setUserSelect(choice[exchange])
 //onClickEvent가 실행되면 => 바뀌는것이므로 -함수정의(random)
 let computerChoice = randomChoice();
 setComputerSelect(computerChoice)
 //이김 비김 판단하기
 setResult(judgement(choice[exchange],computerChoice));//유저 선택값과 컴퓨터의 선택값을 넘겨줌.
 }
 //여기에 randomChoice 만들어줌
 const randomChoice=()=>{
//배열화시키기-object.key()함수는 객체에 키값만 뽑아서 array로 만들어주는 함수.
 let itemArray = Object.keys(choice);
 console.log("item array",itemArray) //console창 itemArray=[rock,scissors,paper]//인덱스번호o
 let randomItem = Math.floor(Math.random()*itemArray.length); //0*3<randomItem<1*3 *Math.flow쓰면서 소숫점 버림.
 console.log("randomItem",randomItem)
 let final = itemArray[randomItem]
 console.log("final",final)
 return choice[final];

 }

 const judgement=(user,computer)=>{
console.log("user" ,user,"computer",computer);
if(user.name==computer.name){
  return "tie"
}else if(user.name="Rock")return computer.name="Scissors"?"win":"lose"
else if(user.name="Scissors")return computer.name="Paper"?"win":"lose"
else if(user.name=="Paper")return computer.name="Scissors"?"win":"lose"

 }
  return (
    <div className="container">
    <div className="container-box">
   <Box title="YOU" item={userSelect} result={result}/>
   <Box title="Computer" item={computerSelect} result={result}/>
    </div>
    <div>
    <button className="buttonStyle" onClick={()=>playing("scissors")}>가위</button>
    <button className="buttonStyle" onClick={()=>playing("rock")}>바위</button>
    <button className="buttonStyle" onClick={()=>playing("paper")}>보</button>
    </div>

    <div>{result}</div>
    </div>
  );
}

export default App;
