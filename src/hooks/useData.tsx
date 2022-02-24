import { useState, useEffect } from 'react';


type DataType = 'events' | 'footer' | 'header' | 'hero' | 'pages' | 'popular' | 'posts' | 'tags';


export default function useData(type: DataType) {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetch(`/data/${type}.json`).then(res => {
            if (!res.ok) {
                return res.json().then(errJson => {
                    throw new Error(errJson)
                });
            }
            return res.json();
        }).then(json => {
            setData(json);
        }).catch(err => {
            console.error(`Error fetching data for '${type}':`, err);
        });
    }, []);

    return data;
}
