export default function Register ({ authenticate }) {
    return (
        <div className="user-wrapper">
        <div className="user-component">
            <h1>Register</h1>
            <form>
                <label>
                    Username:
                    <input type="text" name="username"  ></input>
                </label>
                <br/>
                <label>
                    Password:
                    <input type="text" name="password"></input>
                </label>
                <br/>
                <label>
                    Password again:
                    <input type="text" name="repassword"></input>
                </label>
                <br/>
                <input type="submit" value="Submit" onClick={(e) => authenticate(e)}></input>
            </form>
        </div>
    </div>
    )
}