import React from 'react';
import CartWidget from './CartWidget';
const Navbar = () => {
    return (
        <nav> 
            <div>
                <ul>
                    <li> <a href= "a">Respaldo Lumbar</a>
                        <a href= "a">Cepillo de dientes Biodegradable</a>
                        <a href= "a">Despolvillador</a>
                    </li>
                </ul>
            </div>
            <CartWidget/>
            <h1>
                Bolivar Vip
            </h1>
        </nav>
    );
}

export default Navbar;
