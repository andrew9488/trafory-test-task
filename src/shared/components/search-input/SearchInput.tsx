import React from "react";
import { Input, InputProps } from "antd";
import { SearchOutlined } from "@ant-design/icons";

interface ISearchInput extends InputProps {
    inputRef?: React.Ref<HTMLInputElement>;
}

export const SearchInput: React.FC<ISearchInput> = (props) => {
    return <Input prefix={<SearchOutlined />} {...props} />;
};
