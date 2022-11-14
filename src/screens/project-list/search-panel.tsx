import React from 'react'

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
                <input type="text" value={param.name} onChange={evt => setParam({
                    ...param,
                    name: evt.target.value
                })} />
                <select value={param.personId} onChange={evt => setParam({
                    ...param,
                    personId: evt.target.value
                })}>
                    <option value={''}>负责人</option>
                    {
                        users.map((user, index) => <option value={user.id} key={index}>{user.name}</option>)
                    }
                </select>
            </form>
        </div>
    )
}
export default Searchpanel