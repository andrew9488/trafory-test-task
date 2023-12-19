import { styled } from "styled-components";
import { Table as AntdTable } from "antd";

export const Table = styled(AntdTable)`
    ${(props) => {
        const onRowImplementation = props.onRow && props.onRow({});
        if (onRowImplementation?.onClick) {
            return `
        tbody tr:hover {
          cursor: pointer;
        }
        `;
        }
    }}
`;

export const Container = styled.div`
    height: 100%;
`;

export const PageHeader = styled.div`
    display: flex;
    align-items: center;
`;

export const InputContainer = styled.div`
    width: 260px;
    margin-left: 24px;
`;

export const TableContainer = styled.div`
    margin-top: 16px;
`;
