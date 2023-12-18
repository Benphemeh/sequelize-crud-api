import {
    Column,
    Table,
    DataType,
    Model,
    AutoIncrement,
    PrimaryKey
  } from 'sequelize-typescript';


  @Table
  export default class User extends Model <User> {
    @AutoIncrement
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
         allowNull: false, 
       })
   id: number

    @Column({
         type: DataType.STRING,
          allowNull: false, 
        })
    name: string;
  
    @Column({
         type: DataType.STRING,
          allowNull: false,
         })
    email: string;
  
    @Column({
         type: DataType.STRING,
          allowNull: false, 
        })
        password: string;
   @Column({
        type: DataType.ENUM,
        values: ['male', 'female'],
        allowNull: false,
    })
    gender: string;
  }
