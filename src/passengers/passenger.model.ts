import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'passengers',
})
export default class Passenger extends Model {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  phone: string;
}
