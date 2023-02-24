import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Questions() {
    let Navigate = useNavigate();
    let [subjt, setSubjct] = useState('All');
    let [questions, setquestions] = useState([]);
    let handlesubjectchange = (event) => {
        setSubjct(event.target.value);
    }
    useEffect(() => {
        Axios.get('http://localhost:8800/api/Questions')
            .then((res) => setquestions(res.data))
            .catch((err) => console.log(err));
    }, []);
    let handledelete = (id) => {
        Axios.delete(`http://localhost:8800/api/Questions/delete/${id}`)
            .then(() => {
                window.location.reload(false);
                alert("Successfully deleted");
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className="container cntr my-4">
            <select className="slct3" onChange={handlesubjectchange} required>
                <option value="All">All Questions</option>
                <option value="Java">Java</option>
                <option value="PHP">PHP</option>
                <option value="Python">Python</option>
                <option value="Data Structures">Data Structures</option>
            </select>
            {questions.map((val, index) => {
                if (subjt === 'All') {
                    return (
                        <div key={index}>
                            <textarea rows='6' className='ps-2' style={{ width: '100%'}} value={
                                val.Question + '\nA. ' + val.OptionA + '\nB. ' + val.OptionB + '\nC. ' + val.OptionC + '\nD. ' + val.OptionD
                            }></textarea>
                            <div className="choice">
                                <div><button className='bton'> Reason </button></div>
                                <div>
                                    <button className="bton Accept mx-1"> Accept </button>
                                    <button className="bton Reject mx-1" onClick={() => {
                                        handledelete(val._id);
                                    }}> Reject </button>
                                </div>
                            </div>
                        </div>
                    );
                }
                else if (subjt === val.Subject) {
                    return (
                        <div key={index}>
                            <textarea rows='6' className='ps-2' style={{ width: '100%'}} value={
                                val.Question + '\nA. ' + val.OptionA + '\nB. ' + val.OptionB + '\nC. ' + val.OptionC + '\nD. ' + val.OptionD
                            }></textarea>
                            <div className="choice">
                                <div><button className='bton'> Reason </button></div>
                                <div>
                                    <button className="bton Accept mx-1"> Accept </button>
                                    <button className="bton Reject mx-1" onClick={() => {
                                        handledelete(val._id);
                                    }}> Reject </button>
                                </div>
                            </div>
                        </div>
                    );
                }
                return null;
            })
            }
            <div className="mt-5 mb-0 text-end">
                <button className="set" onClick={() => Navigate('/Set')}> Set the paper</button>
            </div>
        </div>
    );
};