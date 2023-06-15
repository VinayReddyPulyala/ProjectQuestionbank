import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Questions() {
    let Navigate = useNavigate();
    let [eq, seteq] = useState(0);
    let [mq, setmq] = useState(0);
    let [dq, setdq] = useState(0);
    let [subject,setsub]=useState(0);
    // let [t, sett] = useState(0);
    // const pdfRef = useRef(null);
    
    // const handleDownload = () => {
    //     const content = pdfRef.current;
    //     console.log(content);
    //     const doc = new jsPDF();
    //     doc.html(content, {
    //         callback: function (doc) {
    //             doc.save('QuestionPaper.pdf');
    //         }
    //     });
    // };
    return (
        <div className="bg-light col-6 p-4 mx-auto mt-5">
            <div>
                <select className='col-8 col-sm-3' name="Subject" onChange={(event) => {
                                setsub(event.target.value);
                            }} required>
                    <option value="" selected disabled>Subject</option>
                    <option value="Java">Java</option>
                    <option value="PHP">PHP</option>
                    <option value="Python">Python</option>
                    <option value="Data Structures">Data Structures</option>
                </select>
                <table>
                    <tbody>
                        <tr>
                            <td>Enter no. of easy questions: </td>
                            <td><input className="inp4 col-10" type="number" onChange={(event) => {
                                seteq(Number(event.target.value));
                                
                            }} /></td>
                        </tr>
                        <tr>
                            <td>Enter no. of Medium difficulty questions: </td>
                            <td><input className="inp4 col-10" type="number" onChange={(event) => {
                                setmq(Number(event.target.value));
                                
                            }} /></td>
                        </tr>
                        <tr>
                            <td>Enter no. of difficult questions: </td>
                            <td><input className="inp4 col-10" type="number" onChange={(event) => {
                                setdq(Number(event.target.value));
                                
                            }} /></td>
                        </tr>
                        {/* <tr>
                            <td>Total:</td>
                            <td><input className="inp4 col-10" type="number" value={t} /></td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
            <div className="mt-2 text-end">
                <button className="set" onClick={() => {
                    // handleDownload();
                    // alert("Question Paper succesfully downloaded");
                    Navigate('/qp',{state:{eq:eq,mq:mq,dq:dq,subject:subject}});

                }
                }> Get the paper</button>
            </div>
        </div>
    );
};
