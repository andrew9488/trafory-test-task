import { styled } from "styled-components";
import { Layout as AntdLayout } from "antd";

export const Section = styled.section<{ bgColor?: string; radius?: number }>`
    flex-grow: 1;
    padding: 24px;
    background: ${({ bgColor }) => bgColor};
    border-radius: ${({ radius }) => `${radius}px`};
    max-height: 100%;
`;

export const Layout = styled(AntdLayout)`
    height: 100vh;
`;

export const Header = styled(AntdLayout.Header)<{ bgColor?: string }>`
    padding: 0;
    background: ${({ bgColor }) => bgColor};
`;

export const Content = styled(AntdLayout.Content)`
    margin: 16px;
    display: flex;
    flex-direction: column;
`;
