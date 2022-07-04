/*
    fetch 함수를 사용하여 data.go.kr 의 API 연결하기
*/

const apiURL = "/get/1360000/WthrWrnInfoService/getWthrWrnList";
const apiServiceKey =
  "%2BBhnj16DSLnH2DKQNJPM0wURWNxJ85zLjSHReTP87QGStX0uSR8G%2FuJ7nVFt33fT2VxbBYSoH5BdgePewPGGiA%3D%3D";

const fetchData = async () => {
  const serviceURL = `${apiURL}?serviceKey=${apiServiceKey}&dataType=JSON&pageNo=1&numOfRow=100`;
  console.log(serviceURL);
  const response = await fetch(serviceURL);
  const json = await response.json();
  return json;
};

export { fetchData };
