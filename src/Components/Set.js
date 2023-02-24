import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Questions() {
    let Navigate = useNavigate();
    let [eq, seteq] = useState(0);
    let [mq, setmq] = useState(0);
    let [dq, setdq] = useState(0);
    let [t, sett] = useState(0);
    let handleeqchange = (event) => {
        seteq(Number(event.target.value));
        sett(eq + mq + dq);
        console.log(eq);
    };
    let handlemqchange = (event) => {
        setmq(Number(event.target.value));
        sett(eq + mq + dq);
    };
    let handledqchange = (event) => {
        setdq(Number(event.target.value));
        sett(eq + mq + dq);
    };
    return (
        <div className="bg-light col-6 p-4 mx-auto mt-5">
            <div>
                <select className='col-8 col-sm-3' name="Subject" required>
                    <option value="" selected disabled>Subject</option>
                    <option value="java">Java</option>
                    <option value="PHP">PHP</option>
                    <option value="Python">Python</option>
                    <option value="Data Structures">Data Structures</option>
                </select>
                <table>
                    <tbody>
                        <tr>
                            <td>Enter no. of easy questions: </td>
                            <td><input className="inp4 col-10" type="number" onChange={handleeqchange} /></td>
                        </tr>
                        <tr>
                            <td>Enter no. of Medium difficulty questions: </td>
                            <td><input className="inp4 col-10" type="number" onChange={handlemqchange} /></td>
                        </tr>
                        <tr>
                            <td>Enter no. of difficult questions: </td>
                            <td><input className="inp4 col-10" type="number" onChange={handledqchange} /></td>
                        </tr>
                        <tr>
                            <td>Total:</td>
                            <td><input className="inp4 col-10" type="number" value={t} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="mt-2 text-end">
                <button className="set" onClick={() =>{
                    alert("Question Paper succesfully downloaded");
                    Navigate('/Login')}
                }> Get the paper</button>
            </div>
        </div>
    );
};
