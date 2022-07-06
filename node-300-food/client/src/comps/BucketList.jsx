const BucketList = ({ bucketList }) => {
  const bucketBody = bucketList.map((food) => {
    return (
      <tr>
        <td width="20%">{food.b_date}</td>
        <td width="20%">{food.b_name}</td>
        <td width="20%">{food.b_amount}</td>
        <td width="20%">{food.b_cal}k</td>
        <td width="20%">{food.b_scal}k</td>
      </tr>
    );
  });

  return (
    <table className="w3-table w3-table-all">
      <tbody>{bucketBody}</tbody>
    </table>
  );
};

export default BucketList;
