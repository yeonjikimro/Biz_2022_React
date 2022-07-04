const TodoItem = ({ todo }) => {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>시작시간</th>
        <th>내용</th>
        <th>끝낸시간</th>
      </tr>
      <tr>
        <td>{todo.t_id}</td>
        <td>{todo.t_s_date}</td>
        <td>{todo.content}</td>
        <td>{todo.t_e_date}</td>
      </tr>
    </thead>
  );
};

export default TodoItem;
