import React from 'react';

const Box = (props) => {
    let result;
    let def;
    if (props.title === 'Computer' && props.result !== 'Tie' && props.result !== '') {
        result = props.result === 'Win' ? 'Lose' : 'Win';
    } else {
        result = props.result;
    }
    /* 
        컴퓨터값만 바꾼 것
    */

    if (props.title === 'Computer' || props.title === 'You') {
        def = 'https://sites.google.com/site/hafsrsp/_/rsrc/1468855017636/config/customLogo.gif?revision=2';
    }
    return (
        <div>
            <div className={`box ${result}`}>
                <h1>{props.title}</h1>
                <img className="item-img" src={(props.item && props.item.img) || def} alt="가위바위보 이미지사진"></img>
                <h2>{result}</h2>
            </div>
        </div>
    );
};
/* 
    END연산자 = 먼저 나오는 거 다음에 나오는 거 둘 다 트루가 나와야 트루라는 값이 나온다, 하지만 먼저 나오는 게 폴스라면 뒤에 값은 보질 않는다 어차피 폴스라서
    OR연산자 = 하나만 트루가 나온다면 뒤에 값은 보질 않는다.
        => 논리 연산자의 논리오류
*/
/* 
    `box${result}` = 기본값 box의 result값
*/
/* 
    리엑트는 다이나믹한 걸 보여줘야 하기 때문에 프롭스로 넘어주기 된다
    처음엔 값을 설정을 안 해놨기 떄문에 엔드연산자 && 를 해준다
    만약에 아이템이 없다면 폴스가 되면 아이템이미지는 실행이 안된다
    왜냐 엔드연산자기 때문에 둘다 트루가 되야 한다.
    유저가 아이템이 있으면 null이 아니면 트루가 되면 이미지가 넘어오는거다
    리엑트로 작업을 하게 되면 막아줄 수 있는 값 가드값 (엔드연산자)

    타이틀 값은 가드값이 필요없다 명확하게 주는 값이 있기 때문에
    셀렉트 같은 값은 필요가 있다 명확하게 주는 값이 없기 때문에 null이기 때문에
    에러를 방지하기 위해 가드값이 필요 &&(엔드연산자)
*/
export default Box;
