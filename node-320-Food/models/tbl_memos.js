import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class tbl_memos extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    m_seq: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    m_author: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    m_date: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    m_time: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    m_memo: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    m_title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    m_image: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    m_up_image: {
      type: DataTypes.STRING(125),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_memos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "m_seq" },
        ]
      },
    ]
  });
  }
}
