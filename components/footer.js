import React from 'react'

const Footer = () => (
    <div className="container">
        <div>
            <div className="column"></div>
            <div></div>
            <div></div>
        </div>
        <style jsx>{`
        .container {
            height: 400px;
            width: 100%;
            display: flex;
            align-items: stretch;
            background-color: #2A2937;
        }

        .column {
            display: flex;
            flex-direction: column;
        }
        `}</style>
    </div>
)

export default Footer;