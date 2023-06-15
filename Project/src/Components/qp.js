import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import Axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useRef } from 'react';
export default function Qp() {
    const location = useLocation();
    let [eqs, setEqs] = useState([]);
    let [mqs, setMqs] = useState([]);
    let [dqs, setDqs] = useState([]);
    let Navigate=useNavigate();
    useEffect(() => {
        Axios.get(`http://localhost:8800/api/Questions/easy`, {
            params: {
                subject: location.state.subject,
                number: location.state.eq
            },
        })
            .then((res) => setEqs(res.data))
            .catch((err) => console.log(err));
        Axios.get(`http://localhost:8800/api/Questions/medium`, {
            params: {
                subject: location.state.subject,
                number: location.state.mq
            },
        })
            .then((res) => setMqs(res.data))
            .catch((err) => console.log(err));
        Axios.get(`http://localhost:8800/api/Questions/difficult`, {
            params: {
                subject: location.state.subject,
                number: location.state.dq
            },
        })
            .then((res) => setDqs(res.data))
            .catch((err) => console.log(err));
    }, []);
    const pdfRef = useRef(null);
    const handleDownload = () => {
        // const content = pdfRef.current;
        // console.log(content);
        // const doc = new jsPDF({
        //     format: 'a4',
        //     unit: 'px',
        // });
        // doc.setFont('Inter-Regular', 'normal');
        // doc.html(pdfRef.current, {
        //     async callback(doc) {
        //         await doc.save('QuestionPaper.pdf');
        //     },
        // });
        Navigate('/Login');
    };
    let qcount = 0;
    return (
        <div ref={pdfRef}>
            <div className='bg-light mx-auto p-4'>
                <button style={{border:"1px solid black",borderRadius:"5px"}} onClick={handleDownload}>Log Out</button>
                <div className='text-center m-4'>
                    <h2>KESHAV MEMORIAL INSTITUTE OF TECHNOLOGY</h2>
                    <h3>(AN AUTONOMOUS INSTITUTE)</h3>
                    <h4>Approved by AICTE, Affiliated to JNTUH,Hyderabad-500 029</h4>
                    <h5>B.Tech II Year II Semester Regular Examinations, March-2023</h5>
                    <h2>{location.state.subject}</h2>
                </div>
                <div className='d-flex justify-content-between'>
                    <div>
                        <strong>Time: 3 Hrs</strong>
                    </div>
                    <div>
                        <strong>Max. Marks: NA</strong>
                    </div>
                </div>
                <div>
                    <div className='text-center mb-3'>
                        <h3>PART-A</h3>
                    </div>
                    {eqs.map((val, index) => {
                        qcount += 1;
                        console.log(qcount);
                        return (
                            <div key={index} className='mb-2'>
                                <div><strong>Question {qcount}</strong>  :</div>
                                <div className='mb-2'>   {val.Question}</div>
                                <div className='d-flex flex-column '>
                                    <div>
                                        <input type="radio" />   A.
                                        {val.OptionA}
                                    </div>
                                    <div>
                                        <input type="radio" />   B.
                                        {val.OptionB}
                                    </div>
                                    <div>
                                        <input type="radio" />   C.
                                        {val.OptionC}
                                    </div>
                                    <div>
                                        <input type="radio" />   D.
                                        {val.OptionD}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                    }
                </div>
                <div>
                    <div className='text-center mb-3'>
                        <h3>PART-B</h3>
                    </div>
                    {mqs.map((val, index) => {
                        qcount += 1;
                        return (
                            <div key={index} className='mb-2'>
                                <div><strong>Question {qcount}</strong>  :</div>
                                <div className='mb-2'>   {val.Question}</div>
                                <div className='d-flex flex-column '>
                                    <div>
                                        <input type="radio" />   A.
                                        {val.OptionA}
                                    </div>
                                    <div>
                                        <input type="radio" />   B.
                                        {val.OptionB}
                                    </div>
                                    <div>
                                        <input type="radio" />   C.
                                        {val.OptionC}
                                    </div>
                                    <div>
                                        <input type="radio" />   D.
                                        {val.OptionD}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                    }
                </div>
                <div>
                    <div className='text-center mb-3'>
                        <h3>PART-C</h3>
                    </div>
                    {dqs.map((val, index) => {
                        qcount += 1;
                        return (
                            <div key={index} className='mb-2'>
                                <div><strong>Question {qcount}</strong>  :</div>
                                <div className='mb-2'>   {val.Question}</div>
                                <div className='d-flex flex-column '>
                                    <div>
                                        <input type="radio" />   A.
                                        {val.OptionA}
                                    </div>
                                    <div>
                                        <input type="radio" />   B.
                                        {val.OptionB}
                                    </div>
                                    <div>
                                        <input type="radio" />   C.
                                        {val.OptionC}
                                    </div>
                                    <div>
                                        <input type="radio" />   D.
                                        {val.OptionD}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                    }
                </div>
            </div >
        </div>
    );
};