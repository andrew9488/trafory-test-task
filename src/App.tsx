import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout, AppRoutes } from "./shared";
import { NotFound } from "./pages/not-found";
import { Orders } from "./pages/orders";
import { Order } from "./pages/order";

export const App: React.FC = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path={AppRoutes.Orders} element={<Orders />} />
                <Route path={AppRoutes.Order} element={<Order />} />

                <Route path={AppRoutes.Companies} element={<div>{AppRoutes.Companies}</div>} />
                <Route path={AppRoutes.Groups} element={<div>{AppRoutes.Groups}</div>} />
                <Route path={AppRoutes.Users} element={<div>{AppRoutes.Users}</div>} />
                <Route path={AppRoutes.Credits} element={<div>{AppRoutes.Credits}</div>} />
                <Route path={AppRoutes.Documents} element={<div>{AppRoutes.Documents}</div>} />

                <Route path={`${AppRoutes.Home}`} element={<Navigate to={AppRoutes.Orders} />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};
