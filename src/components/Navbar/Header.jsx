import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="navbar flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">Birbal.</h1>
            <ul className="flex space-x-4">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/project">Project </Link></li>
                <li><Link to="/contact">Contact </Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
            </ul>
        </div>
    )
}

export default Header
