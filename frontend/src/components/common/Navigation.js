import React from 'react';
import { Navbar } from 'react-materialize'
import { Link } from 'react-router-dom';

const Navigation = () => (
    <Navbar brand='Readable App' right >
        <Link to="/">Home</Link>
    </Navbar>
)

export default Navigation;