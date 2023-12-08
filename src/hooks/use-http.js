import { useCallback, useState } from "react";

const useHttp = function() {

    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState(null);

    const sendRequest =  useCallback( async (requestConfig, applyData) => {

        setIsLoading(true);

        setError(null);
        try {

            const response = await fetch(requestConfig.url, {
               method: requestConfig.method,
               headers: requestConfig.headers,
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