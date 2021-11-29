import React, { useState, useEffect, useHistory } from 'react';


export default function Login({ login, error }) {
    const [details, setDetails] = useState({ username: "", password: "" });

    const submitHandler = async (e) => {
        try {
            e.preventDefault();
            await login(details);
            // localStorage.setItem('token', 'auth-user');

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <React.Fragment>
            <form onSubmit={submitHandler}>
                <h2>Login System :</h2><hr />

                <div className="offset-3 col-sm-5">
                    {(error != "") ? (
                        <div class="toast show align-items-center text-white bg-danger border-0 mb-3 " role="alert" aria-live="assertive" aria-atomic="true">
                            <div class="d-flex">
                                <div class="toast-body">
                                    {error}
                                </div>
                                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                        </div>

                    ) : ""}
                    <div class="mb-3 row">
                        <label for="username" class="col-sm-2 col-form-label">Username: </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                placeholder="Enter Username"
                                class="form-control"
                                id="username"
                                onChange={(e) => setDetails({ ...details, username: e.target.value })} value={details.username} />
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="password" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input
                                type="password"
                                placeholder="Enter Password"
                                class="form-control"
                                id="password"
                                onChange={(e) => setDetails({ ...details, password: e.target.value })} value={details.password} />
                        </div>
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-primary btn-sm mb-3">Login</button>
                    </div>
                </div>
            </form>

        </React.Fragment>
    )
}


    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [newEntry, setNewEntry] = useState("");
    // const history = useHistory();

    // const submitForm = () => {
    //     const newEntry = { username, password };
    // }

    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //         // history.push('/');
    //         console.log("Hello LocalStorage")
    //     }
    // }, []);

    // function login() {
    //     let item = { username, password };
    //     console.log(item);
    //     // localStorage.setItem(JSON.stringify(result));
    // }