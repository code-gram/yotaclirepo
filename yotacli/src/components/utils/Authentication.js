import { Navigate } from "react-router-dom";
export function getAuthToken() {
    const token = sessionStorage.getItem('token');
    return token;
}

export function logout() {
    const token = sessionStorage.removeItem('token');
    return <Navigate to="/login" />;
}

export function headerContents() {
    const headerContent = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": getAuthToken()
    }
    return headerContent;
}
