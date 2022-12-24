import styled from "@emotion/styled";
import { Button, Divider, List, Popover, Typography } from "antd";
import { useProjects } from "../utils/project";

export const ProjectPopover = (props: { projectButton: JSX.Element }) => {
    const { data: projects, isLoading } = useProjects()
    const pinnedProjects = projects?.filter(prject => prject.name)
    const content = <Container>
        <Typography.Text type="secondary">收藏项目</Typography.Text>
        <List>
            {
                pinnedProjects?.map(project => <List.Item>
                    <List.Item.Meta title={project.name} />
                </List.Item>)
            }
        </List>
        <Divider />
        {props.projectButton}
    </Container>
    return <Popover placement="bottom" content={content}>
        项目
    </Popover>
}

const Container = styled.div`
    min-width:30rem;
`