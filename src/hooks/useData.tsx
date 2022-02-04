import { useState, useEffect } from 'react';


type DataType = 'events' | 'footer' | 'header' | 'hero' | 'pages' | 'popular' | 'posts' | 'tags';

const cache = {
    events: null,
    footer: null,
    header: null,
    hero: null,
    pages: null,
    popular: null,
    posts: null,
    tags: null
} as {
    events: Event[] | null;
    footer: Object | null;
    header: Object | null;
    hero: Object | null;
    pages: Page[] | null;
    popular: Object | null;
    posts: Post[] | null;
    tags: Tag[] | null;
}


export default function useData(type: DataType) {
    const [data, setData] = useState<any>(cache[type]);

    useEffect(() => {
        if (data) {
            return;
        }

        fetch(`/data/${type}.json`).then(res => {
            if (!res.ok) {
                return res.json().then(errJson => {
                    throw new Error(errJson)
                });
            }
            return res.json();
        }).then(json => {
            cache[type] = json;
            setData(json);
        }).catch(err => {
            console.error(`Error fetching data for '${type}':`, err);
        });
    }, []);

    return data;
}
