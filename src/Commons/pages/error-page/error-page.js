import { useRouteError } from "react-router-dom";

export function ErrorPage() {

    const error = useRouteError();

    return (
        <h1>There is an error {error.message}</h1>
    )

}