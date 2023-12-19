import React from "react";

import * as Styles from "./not-found.styles.ts";
import { Typography } from "../../shared";

export const NotFound: React.FC = () => {
    return (
        <Styles.Container>
            <Typography type="h1">404 - Страница не найдена</Typography>
            <Typography>Извините, запрошенная страница не существует.</Typography>
        </Styles.Container>
    );
};
