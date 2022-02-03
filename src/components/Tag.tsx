import React from 'react';


interface Props {
    title: string;
    color?: string;
}


export default function Tag(props: Props) {
    const {
        title,
        color = '#757575'
    } = props;

    return (
        <div style={{ backgroundColor: color }}>
            {title}
        </div>
    );
}
