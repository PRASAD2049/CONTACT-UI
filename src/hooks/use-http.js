import { useCallback, useState } from "react";

const useHttp = function() {

    const ENV = process.env;

    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState(null);

    const sendRequest =  useCallback( async (requestConfig, applyData) => {

        setIsLoading(true);

        setError(null);
        try {

            const headers = {
                token: `${localStorage.getItem('token')}`,
                ...requestConfig.headers,
            }

            const response = await fetch(`${ENV.REACT_APP_API_URI}${requestConfig.url}`, {
               method: requestConfig.method,
               headers: headers,
               body: JSON.stringify(requestConfig.body)
            });

            if (!response.ok) {
                throw new Error('Something went wrong')
            }

            const data = await response.json();

            applyData(data)

        } catch (error) {

            setError(error.message);

        }

        setIsLoading(false);


    }, []);

    return {isLoading, error, sendRequest}

   
}

export default useHttp;