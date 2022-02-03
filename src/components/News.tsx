import React from 'react';
import Posts from './Posts';
import Events from './Events';


export default function News(): JSX.Element {
    return (
        <section className="w-full flex justify-between">
            <Posts className="w-1/2"/>
            <Events className="w-1/2"/>
        </section>
    );
}
