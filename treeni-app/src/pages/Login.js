import { Link } from "react-router-dom";


export default function Login ({ authenticate }) {
    console.log(authenticate)
    return(
        <div className="login">
            <h1>Login</h1>
            <button onClick={() => authenticate()}></button>
            <Link to="/register">Register</Link>
            <Link to="/diary">diary</Link>
        </div>
    )
}