import './App.css';
import React, { useState } from 'react';
import Box from './component/Box';

const choice = {
    rock: {
        name: 'Rock',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNuNyR2UYjZVddmjrvTV9uQbx3aHEsynDcg&usqp=CAU',
    }, // 가위
    scissor: {
        name: 'Scissor',
        img: 'http://file2.instiz.net/data/file/20141006/7/d/c/7dc7f898af7833869e7fd2b6accc3f2c.jpg',
    }, // 바위
    paper: {
        name: 'Paper',
        img: 'data:image/jpeg;base64,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',
    }, // 보
};
function App() {
    const [userSelect, setUserSelect] = useState(null);
    const [computerSelect, setComputerSelect] = useState(null);
    const [result, setResult] = useState(''); // 승,패 빈값으로 저장
    const play = (userChoice) => {
        setUserSelect(choice[userChoice]); // 진실문장
        // 함수의 매개변수로써 choice함수의 우리가 고른 것 uesr함수 (가위 바위 보) 인지 값을 던져준다. 뭘 골랐는 지를 갖다가 선택이 되게끔 해준다
        // 스테이스 즉 화면에 보여주기 위한 함수를 만든다.
        let computerChoice = randomChoice(); // 함수
        setComputerSelect(computerChoice); // 넘겨준다
        setResult(judgement(choice[userChoice], computerChoice)); //승패의 값을 다이나믹한 값을 보여준다. 승패를 가리기 위해선 유저가 낸 값과 컴퓨터가 랜덤으로 낸 값
        // 묶는 이유는 judgement는 스트링으로 반환을 하기 때문에 매개변수로써 전달을 해줘야 한다.
    };
    const judgement = (user, computer) => {
        if (user.name === computer.name) return 'Tie';
        else if (user.name === 'Rock') return computer.name === 'Scissor' ? 'Win' : 'Lose';
        else if (user.name === 'Scissor') return computer.name === 'Paper' ? 'Win' : 'Lose';
        else if (user.name === 'Paper') return computer.name === 'Rock' ? 'Win' : 'Lose';
    };
    // 인자 두 개 받을 수 있게 매개변수 지정
    // 삼항연산자로 이겼는 지 졌는 지 스트링으로 리턴
    const randomChoice = () => {
        let itemArray = Object.keys(choice); // 인자를 초이스를 넘겨줬다, 배열화로 만들기
        // 객체를 인자로 전달해주면 키값을 가지고 배열화 시켜준다. rock(0), scissor(1), paper(2)
        // 인덱스 번호가 있기 때문에 랜덤으로 받아오기를 하면 된다.
        let randomItem = Math.floor(Math.random() * itemArray.length);
        // 랜덤숫자 0~1 사이 하지만 우리가 갖고 있는 아이템은 가위 바위 보 연관을 짓는 방법은? 정답은 함수! 배열화로 만들어준다. Math.floor() = 소수점버리기
        let final = itemArray[randomItem];
        // 가위 바위 보 의 랜덤 값을 넣었다 = final
        return choice[final];
    };
    return (
        <div>
            <div className="main">
                <Box title="You" item={userSelect} result={result} />
                <Box title="Computer" item={computerSelect} result={result} />
            </div>
            <div className="main">
                <button onClick={() => play('scissor')}>가위</button>
                <button onClick={() => play('rock')}>바위</button>
                <button onClick={() => play('paper')}>보</button>
            </div>
        </div>
    );
}
/* 
    setUesrSelect를 어떻게 넘겨주냐 item = {setUesrSelect} 내가 고른 아이템 가위 바위 보 인지
*/
/* 
    가위,바위,보 클릭해서 play 함수 호출
    콜백함수로 넣어줘야한다.
    () =>   :   다른 익명의 함수에다가 다시 넣어준 것.
    리엑트를 할 때 주의사항
        동기적으로 실행, 바로 실행이 되지 않게끔 익명의 함수로 넣어야 함..
        리엑트는 바로 실행되기 때문에 콜백함수 형태로 전달해줘야 한다.
    onClick을 사용할 때 콜백함수로 넣어줘야 한다. () => play
*/
export default App;
/* 
    1. 박스 두 개를 그린다.. (사용자, 사진, 결과표시가 들어간다)
    2. 가위, 바위, 보 버튼이 있다.
    3. 버튼을 클릭하면, 클릭한 값이 박스에 보인다.
    4. 컴퓨터는 랜덤하게 아이템이 선택된다.
    5. 3번과 4번의 결과를 가지고 승패를 따진다.
    6. 5번의 결과의 따라 박스 테두리 컬러가 바뀐다.
        (이기면 그린, 지면 레드, 비기면 블랙)
*/

/* 
    이벤트 처리하기
        1. 기존에 HTML에서 이벤트를 처리할 때는 함수를 문자열 형태로 전달을 해주었다.
            <button onclick="active()">
            엑티부
            </button>
        2.  리엑트에서는 문자열이 아닌 함수를 받아서 이벤트를 실행한다.
            <button onclick={active}>
            엑티부
            </button>
        3. onclick 안에서 HTML에서 전달해준 것 처럼 active() 라고 전달을 해주면 이는 함수를 호출(실행)하는
            문장이기 때문에 이벤트가 발생하지 않았는데도 렌더링 하면 바로 호출(실행)이 되어버린다.
            따라서 함수를 콜백의 형태로 전달해주는 것이 중요하다.
        4. 전달해 줄 매개변수가 있는 경우
            <button onClick={() => active()}>
                엑티부
            </button>
            와 같은 형식으로 콜백함수의 형태로 작성을 해주어야 한다.
        5. 참고 문서 : https://ko.reactjs.org/docs/handling=events.html
*/
/* 
    가위바위보의 로직 정의하기
    유저가 선택한 값이랑 컴퓨터가 선택한 값이 같다 그렇다면 비긴 것
        user == computer : tie
        user == rock, computer == scissor : win
        user == rock, computer == paper : lose
        user == scissor, computer == paper : win
        user == scissor, computer == rock : lose
        user == paper, computer == rock : win
        user == paper, computer == scissor : lose
    먼저 결과값을 보지 말고 구동되는 로직만 먼저 생각해보기
    경우의 수는 두 가지
*/
