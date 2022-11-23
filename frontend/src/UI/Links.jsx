import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../configure/paths';


const Links = () => {
    return (
        <div>
            {links.map(l =>
            <div><Link to={l.path}>{l.pName}</Link></div>)}
        </div>
);

};

export default Links;