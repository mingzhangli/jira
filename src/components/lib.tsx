import styled from '@emotion/styled'
import React from "react";
import { Button, Spin, Typography } from "antd";
import { DevTools } from "jira-dev-tool";

export const Row = styled.div<{
    gap?: number | boolean,
    between?: boolean
}>`
    display:flex;
    align-items:center;
    justify-content:${props => props.between ? 'space-between' : undefined};
> * {
    margin-top:0 !important;
    margin-bottom:0 !important;
    margin-right : ${props => typeof props.gap === 'number' ? props.gap + 'rem' : props.gap ? '2rem' : undefined}
}
`

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const FullPageLoading = () => (
    <FullPage>
        <Spin size={"large"} />
    </FullPage>
);

export const FullPageErrorFallback = ({ error }: { error: Error | null }) => (
    <FullPage>
        <DevTools />
        <ErrorBox error={error} />
    </FullPage>
);

export const ErrorBox = ({ error }: { error: unknown }) => {
    if (isError(error)) {
        return <Typography.Text type={"danger"}>{error?.message}</Typography.Text>;
    }
    return null;
};

const isError = (value: any): value is Error => value?.message;