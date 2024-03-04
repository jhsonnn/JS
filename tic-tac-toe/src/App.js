import { useState } from "react";
import styled from "styled-components";

function App() {
  const [numArr, setNumArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [bClick, setbClick] = useState(false);
  const [play, setPlay] = useState(true);
  const [winner, setWinner] = useState("");

  let o = "O";
  let x = "X";

  const handleClick = (index) => {
    if (!play) {
      return;
    }
    if (numArr[index]) {
      const temp = [...numArr];
      if (typeof numArr[index] === "number") {
        if (bClick) {
          temp[index] = o;
          setbClick(!bClick);
        } else {
          temp[index] = x;
          setbClick(!bClick);
        }
      }
      setNumArr(temp);
      console.log(numArr);
      //setNumArr(['O', ...numArr.slice(1)])

      // if(((numArr[index%9]===numArr[(index+1)%9])&&(numArr[(index+1)%9]===numArr[(index+2)%9])) ||
      // ((numArr[index%9]===numArr[(index+3)%9])&&(numArr[(index+3)%9]===numArr[(index+6)%9])) ||
      // ((numArr[index%9]===numArr[(index+4)%9])&&(numArr[(index+4)%9]===numArr[(index+8)%9]))
      //   ){
      //     console.log(numArr[index])
      //   }
      const lines = [
        [0, 1, 2],
        [0, 3, 7],
        [0, 4, 8],
        [6, 7, 8],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [1, 4, 7],
      ];

      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (temp[a] === temp[b] && temp[b] === temp[c]) {
          console.log(temp[a]);
          setWinner(temp[a]);
          setPlay(false);
          break;
        }
      }
    }
  };
  const handleReplay = () => {
    // const temp = [...numArr];
    // for (let i = 0; i < temp.length; i++) {
    //   temp[i] = i + 1;
    // }
    // setNumArr(temp);
    setNumArr([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    setWinner("");
    setPlay(true);
  };

  return (
    <div className='App'>
      <h1>Tic Tac Toe</h1>
      <p>{winner}</p>
      <button onClick={() => handleReplay()}>replay</button>
      <Container>
        <tr>
          <Td onClick={() => handleClick(0)}>{numArr[0]}</Td>
          <Td onClick={() => handleClick(1)}>{numArr[1]}</Td>
          <Td onClick={() => handleClick(2)}>{numArr[2]}</Td>
        </tr>
        <tr>
          <Td onClick={() => handleClick(3)}>{numArr[3]}</Td>
          <Td onClick={() => handleClick(4)}>{numArr[4]}</Td>
          <Td onClick={() => handleClick(5)}>{numArr[5]}</Td>
        </tr>
        <tr>
          <Td onClick={() => handleClick(6)}>{numArr[6]}</Td>
          <Td onClick={() => handleClick(7)}>{numArr[7]}</Td>
          <Td onClick={() => handleClick(8)}>{numArr[8]}</Td>
        </tr>
      </Container>
    </div>
  );
}

const Container = styled.table`
  width: 100px;
  height: 100px;
`;

const Td = styled.td`
  border: 1px solid #000000;
  text-align: center;
`;

export default App;
