import { Drawer, Button } from "antd";
import React from "react";

export const ProjectModal = (props: { projectModalOpen: boolean, onClose: () => void }) => {
    return <Drawer
        width={'100%'}
        placement="right"
        open={props.projectModalOpen}
        onClose={props.onClose}
    >
        <Button onClick={props.onClose}>取消</Button>
        <h1>抽屉</h1>
    </Drawer>
}