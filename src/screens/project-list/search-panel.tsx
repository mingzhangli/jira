import React from 'react'
import { Input, Select } from 'antd'
export interface User {
    id: string,
    name: string,
    email: string,
    title: string,
    organization: string,
    token: string
}

interface SearchPanelProps {
    users: User[],
    param: {
        name: string,
        personId: string
    }
    setParam: (param: SearchPanelProps['param']) => void
}

const Searchpanel = ({ users, param, setParam }: SearchPanelProps) => {

    return (
        <div>
            <form >
                {/* setParam(Object.assign({},param,name:evt.target.value)) */}
                <Input type="text" value={param.name} onChange={evt => setParam({
                    ...param,
                    name: evt.target.value
                })} />
                <Select value={param.personId} onChange={value => setParam({
                    ...param,
                    personId: value
                })}>
                    <Select.Option value={''}>负责人</Select.Option>
                    {
                        users.map((user, index) => <Select.Option value={user.id} key={index}>{user.name}</Select.Option>)
                    }
                </Select>
            </form>
        </div>
    )
}
export default Searchpanel