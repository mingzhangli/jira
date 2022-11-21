import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Routes, Route } from 'react-router'
import { KanbanScreen } from '../kanban'
import { EpicScreen } from '../epic'
export const ProjectScreen = () => {
    return <div>
        <h1>ProjectScreen</h1>
        <Link to={'Kanban'}>看板</Link>
        {/* 这里如果是/Kanban  react路由会默认认为是根路由/Kanban,所以这里不需要加，因为是跟付在路由后面 */}
        <Link to={'epic'} > 任务组</Link>
        <Routes>
            <Route path={'/Kanban'} element={<KanbanScreen />}></Route>
            <Route path={'/epic'} element={<EpicScreen />}></Route>
            <Route index element={<KanbanScreen />} />
        </Routes>
    </div>


}