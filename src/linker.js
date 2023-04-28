import React from "react"
import { Link } from "react-router-dom"

class Linker extends React.Component {
    render() { return (

        <nav>
            <ul>
                <Link to={"/student"}>
                    <li>student</li>
                </Link>
                <Link to={"/admin"}>
                    <li>admin</li>
                </Link>
                <Link to={"/generate"}>
                    <li>Generate Certificate</li>
                </Link>
            </ul>
        </nav>
    ) 
    }
}

export default Linker

