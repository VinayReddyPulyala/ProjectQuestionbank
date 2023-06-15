import React, { useState } from "react";
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Question() {
    let Navigate = useNavigate();
    let [Subject, setSubject] = useState('');
    let [Difficulty, setDifficulty] = useState('');
    let [Question, setQuestion] = useState('');
    let [OptionA, setOptionA] = useState('');
    let [OptionB, setOptionB] = useState('');
    let [OptionC, setOptionC] = useState('');
    let [OptionD, setOptionD] = useState('');
    let [Answer, setAnswer] = useState('');
    let postobj = {
        Subject: Subject,
        Difficulty: Difficulty,
        Question: Question,
        OptionA: OptionA,
        OptionB: OptionB,
        OptionC: OptionC,
        OptionD: OptionD,
        Answer: Answer
    }
    let handlesubmit = (event) => {
        if (Answer === OptionA || Answer === OptionB || Answer === OptionC || Answer === OptionD) {
            Axios.post('http://localhost:8800/api/Questions', postobj)
                .then(() => {
                    alert("Succesfully posted");
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        else {
            event.preventDefault();
            alert("Answer Should match with any one of the Options");
        }
    }
    return (
        <form>
            <div className="qsn container p-4">
                {/* <div className="col-12 col-md-9 mt-3 p-3 border border-dark">
                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">
    <div class="carousel-item active">*/}
                <div className="d-flex justify-content-between mb-2">
                    <div>
                        <select className='slct' onChange={(event) => {
                            setSubject(event.target.value);
                        }} required>
                            <option selected disabled>Subject</option>
                            <option value="Java">Java</option>
                            <option value="PHP">PHP</option>
                            <option value="Python">Python</option>
                            <option value="Data Structures">Data Structures</option>
                        </select>
                    </div>
                    <div>
                        <select className='slct' onChange={(event) => {
                            setDifficulty(event.target.value);
                        }} required>
                            <option selected disabled>Difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Difficult">Difficult</option>
                        </select>
                    </div>
                </div>
                <div className="col-12 col-md-9 border border-dark">
                    <div className="col-12 col-md-9 p-3">
                        <p className="mb-2">
                            <b>
                                Enter Question:
                            </b>
                        </p>
                        <textarea className="col-12 col-md-9" rows="4" onChange={(event) => {
                            setQuestion(event.target.value);
                        }} required></textarea>
                        <div className="col-12 col-md-9 text-end my-2">
                            <input className="inp2 col-6 col-sm-3" type="text" placeholder="Answer" onChange={(event) => {
                                setAnswer(event.target.value);
                            }} required />
                        </div>

                        <div className="options ">
                            Enter options:
                            <input className="inp2 col-6 col-sm-3" type="text" placeholder="A." onChange={(event) => {
                                setOptionA(event.target.value);
                            }} required />
                            <input className="inp2 col-6 col-sm-3" type="text" placeholder="B." onChange={(event) => {
                                setOptionB(event.target.value);
                            }} required />
                            <input className="inp2 col-6 col-sm-3" type="text" placeholder="C." onChange={(event) => {
                                setOptionC(event.target.value);
                            }} required />
                            <input className="inp2 col-6 col-sm-3" type="text" placeholder="D." onChange={(event) => {
                                setOptionD(event.target.value);
                            }} required />
                        </div>
                    </div>
                </div>
                {/*<div className="carousel-item">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <select className='slct' name="Subject" required>
                                            <option value="" selected disabled>Subject</option>
                                            <option value="java">Java</option>
                                            <option value="PHP">PHP</option>
                                            <option value="Python">Python</option>
                                            <option value="Data Structures">Data Structures</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select className='slct' name="Difficulty" required>
                                            <option value="" selected disabled>Difficulty</option>
                                            <option value="Easy">Easy</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Difficult">Difficult</option>
                                        </select>
                                    </div>
                                </div>
                                <p className="mb-2">
                                    <b>
                                        Enter Question 2:
                                    </b>
                                </p>
                                <textarea className="col-12 col-md-9" name="Question" rows="4" required></textarea>
                                <div class="col-12 col-md-9 text-end my-2">
                                    <input className="inp2 col-6 col-sm-3" type="text" placeholder="Answer" required />
                                </div>

                                <div className="options ">
                                    Enter options:
                                    <input className="inp2 col-6 col-sm-3" type="text" placeholder="A." required />
                                    <input className="inp2 col-6 col-sm-3" type="text" placeholder="B." required />
                                    <input className="inp2 col-6 col-sm-3" type="text" placeholder="C." required />
                                    <input className="inp2 col-6 col-sm-3" type="text" placeholder="D." required />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <select className='slct' required>
                                            <option value="" selected disabled>Subject</option>
                                            <option value="java">Java</option>
                                            <option value="PHP">PHP</option>
                                            <option value="Python">Python</option>
                                            <option value="Data Structures">Data Structures</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select className='slct' required>
                                            <option value="" selected disabled>Difficulty</option>
                                            <option value="Easy">Easy</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Difficult">Difficult</option>
                                        </select>
                                    </div>
                                </div>
                                <p className="mb-2">
                                    <b>
                                        Enter Question 3:
                                    </b>
                                </p>
                                <textarea className="col-12 col-md-9" name="Question" rows="4" required></textarea>
                                <div class="col-12 col-md-9 text-end my-2">
                                    <input className="inp2 col-6 col-sm-3" type="text" placeholder="Answer" required />
                                </div>
                                <div className="options ">
                                    Enter options:
                                    <input className="inp2 col-6 col-sm-3" type="text" placeholder="A." required />
                                    <input className="inp2 col-6 col-sm-3" type="text" placeholder="B." required />
                                    <input className="inp2 col-6 col-sm-3" type="text" placeholder="C." required />
                                    <input className="inp2 col-6 col-sm-3" type="text" placeholder="D." required />
                                </div>
                            </div>
                        </div>
                    </div> */}
                {/* <div className="d-flex justify-content-between"> */}
                {/* <div className="d-flex justify-content-between align-items-center col-sm-2">
                        <button className="control-prev bton2 mov" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="material-symbols-outlined">
                                arrow_back_ios
                            </span>
                        </button>
                        <button className="control-next bton2 mov" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="material-symbols-outlined">
                                arrow_forward_ios
                            </span>
                        </button>
                    </div> */}
                <div className="d-flex justify-content-between col-12">
                    <div>
                        <button className="bton2" onClick={handlesubmit}>
                            Add New
                        </button>
                    </div>
                    <div>
                        <button className="bton2 sub2" onClick={() => {
                            Navigate('/Login');
                        }}>
                            Log Out
                        </button>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </form >
    );
};