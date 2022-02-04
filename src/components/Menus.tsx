import { useState } from 'react';
import Header from './Header';
import Menu from './Menu';


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
            <Menu open={menuOpen}/>
        </>
    );
}
