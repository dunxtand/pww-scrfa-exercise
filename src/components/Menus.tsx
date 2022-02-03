import React, { useState } from 'react';
import Header from './Header';


export default function Menus(): JSX.Element {
    const [searchOpen, setSearchOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <Header
                searchOpen={searchOpen}
                setSearchOpen={setSearchOpen}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />
        </>
    );
}
