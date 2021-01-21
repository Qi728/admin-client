import React, { Component } from 'react'
import { Table, Button,Card } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [
  {
    "menus": [
        "/home"
    ],
    "_id": "5fffc16ea4aca2121c0046b9",
    "name": "爸爸在这",
    "create_time": 1610596718982,
    "__v": 0,
    "auth_name": "admin",
    "auth_time": 1610604877528
},
{
    "menus": [],
    "_id": "5fffc198a4aca2121c0046ba",
    "name": "妈妈在这",
    "create_time": 1610596760104,
    "__v": 0
},
];
// for (let i = 0; i < 46; i++) {
//   data.push({
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//   });
// }
export default class Test extends Component {

  render() {
    return (
      <Card>
        <Table  columns={columns} 
        // dataSource={data} 
        bordered />
      </Card>
    )
  }
}
