export default function Login ({ authenticate }) {
    return(
        <div className="user-wrapper">
            <div id="login-component">
                <h1>Login</h1>
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
                    <input type="submit" value="Submit" onClick={(e) => authenticate(e)}></input>
                </form>
            </div>
        </div>
    )
}