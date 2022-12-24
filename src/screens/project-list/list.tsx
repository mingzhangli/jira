import { User } from "./search-panel"
import { Dropdown, Menu, Table, Button } from 'antd'
import dayjs from "dayjs"
import { TableProps } from "antd/es/table";
import { Link, } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
export interface Project {
    id: string,
    name: string,
    personId: string,
    pin: boolean,
    organization: string,
    created: number,

}

interface ListProps extends TableProps<Project> {
    users: User[],
    setProjectModalOpen: (isOpen: boolean) => void
}
//这里的ListProps 是包含 ListProps和TableProps及Project三种接口
const List = ({ users, ...props }: ListProps) => {
    //这里的传参意思表示是  先取出users,剩下对象用解构赋值取出  例子：let a = {name:'ldd',age:16}   let fn = (...props) => {...props}  === {name:'ldd,age:16}
    return <Table pagination={false}  {...props} columns={[
        {
            title: "名称",
            sorter: (a, b) => a.name.localeCompare(b.name),
            render(value, project) {
                return (
                    <Link to={String(project.id)}>{project.name}</Link>
                );
            },
        },
        {
            title: '部门',
            dataIndex: 'organization',
        },
        {
            title: '创建时间',
            render(project) {
                return <span>
                    {project.created ? dayjs(project.created).format('YYYY-MM-DD') : '无'}
                </span>
            }
        },
        {
            title: '负责人',
            render(project) {
                return <span>
                    {users.find(user => user.id === project.personId)?.name || '未知'}
                </span>
            }
        },
        {
            title: '创建',
            render() {
                return <Dropdown overlay={<Menu>
                    <Menu.Item>
                        <Button type="link" onClick={() => props.setProjectModalOpen(true)}>编辑</Button>
                    </Menu.Item>
                </Menu>}>
                    <Button type="link">...</Button>
                </Dropdown>
            }
        }

    ]} />
}
export default List