import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    let Navigate = useNavigate();
    let [usname, setUsname] = useState('');
    let [pswd, setPaswd] = useState('');
    let [uerr, setuerr] = useState('');
    let [perr, setperr] = useState('');
    let [pwdt, setpwdt] = useState("password");
    let [dbvalidobj, setdbvalid] = useState([]);
    let [srcherr, setsrcherr] = useState('');
    useEffect(() => {
        Axios.get('http://localhost:8800/api/users')
        .then((res) => setdbvalid(res.data))
        .catch((err)=>{
            console.log(err)
        });
    }, []);
    let changepwd = () => {
        if (pwdt === "password") {
            setpwdt("text");
        }
        else {
            setpwdt("password");
        }
    };
    let handlepsdchange = (event) => {
        setPaswd(event.target.value);
    }
    let handleusnamechange = (event) => {
        setUsname(event.target.value);
    }
    let onsubmitcheck = (event) => {
        event.preventDefault();
        let flag = true;
        if (usname.length > 12 && usname.search(/[A-Z]/) === 0) {
            setuerr('');
        }
        else {
            flag = false;
            setuerr("*Username must have atleast 12 characters and first letter must be capital");
        }
        if (pswd.length > 8 && pswd.match(/[A-Z]/) && pswd.match(/[0-9]/) && pswd.match(/[a-z]/) && pswd.match(/[!@#$%^&*]/)) {
            setperr('');
        }
        else {
            flag = false;
            setperr("*Password(min 8 characters) must be a combination of uppercase letters, lowercase letters, numbers, and symbols.");
        }
        if (flag === true) {
            dbvalidobj.forEach((val) => {
                if (val.Username === usname && val.Password === pswd) {
                    if (val.isadmin === true) {
                        Navigate('/Questions')
                    }
                    else {
                        Navigate('/Question');
                    }
                }
            })
            setsrcherr("Not Found In our DataBase");

        }
    }

    return (
        <form>
            <div className="loginpage col-12 mx-auto mt-5">
                <div className="innerlogin mx-3 mt-3">
                    <div className="loginhead">
                        <h1>Log in</h1>
                    </div>
                    <div>
                        <div className='text-center fs-6' style={{color:'red'}}><p>{srcherr}</p></div>
                        <div className="mt-4">
                            <p id="uerr">{uerr}</p>
                            <input required className="inp" type="text" placeholder="Enter Username" name="Username"
                                onChange={handleusnamechange}
                                id="usname" />
                        </div>
                        <div className="mt-4">
                            <p id="perr">{perr}</p>
                            <input className="inp" type={pwdt} id="pwd" placeholder="Enter Password" name="password"
                                onChange={handlepsdchange}
                                required />
                            <label htmlFor="101">
                                <input className="check mt-3 ms-3" type="checkbox" id="101" onChange={changepwd} /> Show Password
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="submit mt-2">
                            <button className="sub" onClick={onsubmitcheck}>Log In</button>
                        </div>
                        <label htmlFor="rem">
                            <input className="check ms-2 mt-3 mb-4" type="checkbox" value="Remember me" id="rem" /> Remember Me
                        </label>
                    </div>
                </div>
            </div>
        </form>
    );
};