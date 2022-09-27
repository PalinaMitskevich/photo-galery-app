import React from "react";
import { Navigate } from "react-router-dom"
import { routes } from "../../constants";

const NotFound: React.FC = () => <Navigate to={routes.home} />;

export default NotFound;