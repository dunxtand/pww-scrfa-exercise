interface Page {
    id: number;
    title: string;
    link: string;
    parentId: number | null;
}

interface Post {
    id: number;
    title: string;
    link: string;
    text: string;
    published: string;
    tags: number[];
}

interface Event {
    id: number;
    title: string;
    location: string;
    date: string;
    phone: string | null;
    tags: number[];
}

interface Tag {
    id: number;
    color: string | null;
}
