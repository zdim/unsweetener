import React from 'react'
import { Link } from 'react-router-dom'

const Suggestions = (props) => {
    if(!props.items) return null;
    const options = props.items.map(i => (
        <li key={i.id}>
            <Link 
                to={{
                    pathname: '/' + i.id,
                    state: i
                    }}>
                {i.name}
            </Link>
        </li>
    ))

    return <ul>{options}</ul>
}

export default Suggestions