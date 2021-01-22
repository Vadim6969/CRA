import React from "react";

export const useContacts = () => {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [isError, setIsError] = React.useState(false)
    React.useEffect(() => {
      const getContacts = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://randomuser.me/api/?results=10')
                const { results, error } = await response.json();
                if(error) {
                   throw new Error(error)
                }
                setData(results)
                setLoading(false)
                setIsError(false)
            } catch (e) {
                setIsError(true)
            } finally {
                setLoading(false)
            }
        };
       return  getContacts()

    }, [])
    return { data, loading, isError }
}