import React from 'react'
import './Header.css'

export default function Header({black}) {
    return (
        
            <header className={black ? 'black' : ''}>
                <div className="header--logo">
                    <a href="/">
                        <img src="https://i.pinimg.com/564x/35/73/09/35730967c7ff4d78e4170a278e944c8e.jpg" alt="Netflix" />
                    </a>
                </div>
                <div className="header--user">
                    <a href="/">
                        <img src="https://i.pinimg.com/564x/ad/84/0c/ad840c3e6f1b754cbe8eb547d96fd0e2.jpg" alt="Usuario" />
                    </a>
                </div>

            </header>
        
    )
}


