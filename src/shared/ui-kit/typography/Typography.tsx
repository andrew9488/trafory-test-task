import React from "react";
import { RegularText, H3Text, H1Text } from "./typography.styles";

type TypographyType = "regular-text" | "h3" | "h1";

const getTypographyElementByType = (type: TypographyType): React.FC => {
    switch (type) {
        case "h1":
            return H1Text;

        case "h3":
            return H3Text;

        default:
            return RegularText;
    }
};

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
    type?: TypographyType;
}

export const Typography: React.FC<TypographyProps> = ({ type = "regular-text", children, ...props }) => {
    const TypographyElement = getTypographyElementByType(type);

    return <TypographyElement {...props}>{children}</TypographyElement>;
};
