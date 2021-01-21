import React, { Component } from 'react'
import {
  Card,
  Button,
  Table,
  Modal,
  message
} from 'antd'




export default class User extends Component {
  render() {
    return (
      <div>
        user
      </div>
    )
  }
}


// import LinkButton from "../../components/link-button/index"
// export default class User extends Component {
//   state = {
//     users:[] //
//   }

//   initColumns = () => {
//     this.columns = [
//       {
//         title: '用户名',
//         dataIndex: 'username'
//       },
//       {
//         title: '邮箱',
//         dataIndex: 'email'
//       },

//       {
//         title: '电话',
//         dataIndex: 'phone'
//       },
//       {
//         title: '注册时间',
//         dataIndex: 'create_time',
//         render: formateDate
//       },
//       {
//         title: '所属角色',
//         dataIndex: 'role_id',
//         render: (role_id) => this.roleNames[role_id]
//       },
//       {
//         title: '操作',
//         render: (user) => (
//           <span>
//             <LinkButton onClick={() => this.showUpdate(user)}>修改</LinkButton>
//             <LinkButton onClick={() => this.deleteUser(user)}>删除</LinkButton>
//           </span>
//         )
//       },
//     ]
//   }
//   componentWillMount(){
//     this.initColumns()
//   }



//   render() {
//     const title = <Button type='primary'>创建角色</Button>
//     return (
//       <Card title={title}>
//         <Table
//           bordered
//           rowKey='_id'
//           dataSource={users}
//           columns={this.columns}
//           pagination={{defaultPageSize: 2}}
//         />

//         <Modal
//           title={user._id ? '修改用户' : '添加用户'}
//           visible={isShow}
//           onOk={this.addOrUpdateUser}
//           onCancel={() => {
//             this.form.resetFields()
//             this.setState({isShow: false})
//           }}
//         >
//           <UserForm
//             setForm={form => this.form = form}
//             roles={roles}
//             user={user}
//           />
//         </Modal>
//       </Card>
//     )
//   }
// }
