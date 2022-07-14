import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _tbl_ems from "./tbl_ems.js";
import _tbl_memo from "./tbl_memo.js";
import _tbl_memos from "./tbl_memos.js";
import _tbl_student from "./tbl_student.js";
import _tbl_test from "./tbl_test.js";
import _tbl_users from "./tbl_users.js";

export default function initModels(sequelize) {
  const tbl_ems = _tbl_ems.init(sequelize, DataTypes);
  const tbl_memo = _tbl_memo.init(sequelize, DataTypes);
  const tbl_memos = _tbl_memos.init(sequelize, DataTypes);
  const tbl_student = _tbl_student.init(sequelize, DataTypes);
  const tbl_test = _tbl_test.init(sequelize, DataTypes);
  const tbl_users = _tbl_users.init(sequelize, DataTypes);

  return {
    tbl_ems,
    tbl_memo,
    tbl_memos,
    tbl_student,
    tbl_test,
    tbl_users,
  };
}
