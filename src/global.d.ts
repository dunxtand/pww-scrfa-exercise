interface Page {
    id: number;
    title: string;
    link: string;
    parentId: number | null;
    icon: string | null;
}

interface Post {
    id: number;
    title: string;
    link: string;
    text: string | null;
    published: string;
    tags: number[];
}

interface SCRFAEvent {
    id: number;
    title: string;
    location: string;
    date: string;
    phone: string | null;
    tags: number[];
}

interface Tag {
    id: number;
    title: string;
    color: string | null;
}
