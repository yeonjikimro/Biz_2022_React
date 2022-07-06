import { useState, useEffect } from "react";
import BucketList from "./BucketList";
import moment from "moment";

const BucketInput = () => {
  const [bucketList, setBuckList] = useState([]);

  const fetchBuckList = async () => {
    const response = await fetch("http://localhost:3000/food/list");
    const jsonBuck = await response.json();
    setBuckList(jsonBuck);
  };

  useEffect(() => {
    fetchBuckList();
  }, []);

  const onClick = () => {
    const b_name = document.querySelector("input[name='b_name']");
    const b_amount = document.querySelector("input[name='b_amount']");
    const b_cal = document.querySelector("input[name='b_cal']");
    const food = {
      b_date: moment().format("YYYY[-]MM[-]DD"),
      b_name: b_name.value,
      b_amount: b_amount.value,
      b_cal: b_cal.value,
      b_scal: b_amount.value * b_cal.value,
    };

    // fetch 를 사용하여 POST 로 서버로 데이터 보내기 위한 설정
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    };

    fetch("http://localhost:3000/food", postData)
      .then((res) => res.text())
      .then((result) => {
        if (result === "OK") {
          fetchBuckList();
        }
      });
  };

  return (
    <>
      <input name="b_name" placeholder="식품명" className="w3-input" />
      <input name="b_amount" placeholder="섭취량" className="w3-input" />
      <input name="b_cal" placeholder="칼로리" className="w3-input" />
      <button onClick={onClick}>섭취정보 등록</button>
      <table width="100%">
        <tr>
          <th>날짜</th>
          <th>식품명</th>
          <th>섭취량</th>
          <th>칼로리</th>
          <th>총칼로리</th>
        </tr>
      </table>
      <BucketList bucketList={bucketList} />
    </>
  );
};

export default BucketInput;
