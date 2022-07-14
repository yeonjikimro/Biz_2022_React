// Store(Context.Provider) import
import AppContext from "../context/Context";
import { useContext } from "react";

const Input = () => {
  // Context.Provider Store 에 보관된 2개의 state 변수와
  // 2개의 setState 함수를 사용 요청한다.
  const { address, setAddress, addrList, setAddrList } = useContext(AppContext);
  // address state (객체) 변수에서 각 요소를 추출 : Input box 에서 사용
  const { a_name, a_tel, a_address } = address;

  const onChangeEvent = (e) => {
    // e.target.name 과 e.target.value 속성을
    // 각각 name, value 변수로 추출하기
    const { name, value } = e.target;
    /* JS 에서는 변수에 담긴 문자열을 직접 변수명으로 생성하는 방법이 있다
        const name = "a_tel" 이라는 변수가 있을 때
        [name] 형식으로 사용하면 마치 a_tel 이라는 변수가 만들어진 것처럼
        사용할 수 있다
        event 핸들러의 e.target.name 값을 이용하여
        각 input 가 공통으로 사용할 수 있는 코드 작성이 가능하다.    
    */
    // [name] = value;
    // 다음의 코드는 각각 input 의 event 에 따라서
    //     setAddress({...address, [name]: value });
    //    setAddress({...address, [name]: value });
    //    setAddress({...address, [name]: value });
    // 의 코드가 자동으로 생성된다.

    setAddress({ ...address, [name]: value });
    // 이 코드는 기존의 address 에 담긴 데이터를 복사하면서
    // {[name] : value } 코드의 name 변수에 해당하는 값만 변경한다.

    // react 에서는 state 변수 = 값 과 같은 코드는 절대 금지이므로
    // 반드시 setState 함수를 사용하여 값을 변경해야 한다.
    // 때문에 Main 의 setAddress 함수를 props 로 전달받아 사용해야 한다.
  };

  /*
  저장버튼을 클릭하면
  address 에 저장된 데이터를 addrList 추가하기
  addrList 도 Main 에서 만든 state 배열이다
  때문에 addrList 에 데이터를 추가하려면 Main 에서 함수를 생성하여
  props 로 전달하고 여기의 onClickEvent 에서
  호출하여 addrList 에 추가한다

  Main setAddrList 함수를 props 로 전달받고
  setAddrList 함수를 사용하여 addrList 에 추가하는 코드를 작성한다.
  */
  const onClickEvent = (e) => {
    // addrList 배열을 복제하고
    // address state 변수를 추가하여 새로운 addrList 를 setting
    setAddrList([...addrList, address]);
  };

  return (
    <>
      <input
        onChange={onChangeEvent}
        name="a_name"
        placeholder="이름"
        value={a_name}
      />
      <input
        onChange={onChangeEvent}
        name="a_tel"
        placeholder="전화번호"
        value={a_tel}
      />
      <input
        onChange={onChangeEvent}
        name="a_address"
        placeholder="주소"
        value={a_address}
      />
      <button onClick={onClickEvent}>저장</button>
    </>
  );
};

export default Input;
