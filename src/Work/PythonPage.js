import React, { useState, useEffect, useRef } from 'react'; 
import CsharpPage from './CsharpPage';
import JavaPage from './JavaPage';
import JavascriptPage from './JavascriptPage';
import MainPage from './MainPage';
import '../Language.scss'; 
import { Line, Bar } from 'react-chartjs-2'
import { pythonPay, pythonPop } from "./Data.js"
import gsap from 'gsap'; 

function PythonPage() {

    //useRef 
    const anim1 = useRef(null);

    //useState 
    const [pageState, setPageState] = useState("python"); 

    //functions 
    const handlePageStateCompare = () => {
        setPageState("compare"); 
    }

    const handlePageStateJava = () => {
        setPageState("java"); 
    }

    const handlePageStateC = () => {
        setPageState("c#"); 
    }

    const handlePageStateJavascript = () => {
        setPageState("javascript"); 
    }


    const Ldata = {
        labels: ["2012", "2014", "2016", "2018", "2020"], 
        datasets: [
            {
                label: "Python",  
                data: pythonPay, 
                borderColor: "rgb(144, 19, 247)", 
                backgroundColor: "rgba(144, 19, 247, 0.4)", 
                pointBackgroundColor: "rgb(144, 19, 247)", 
                pointBorderColor: "rgb(144, 19, 247)", 
            }, 
        ]
    }
    const Loptions = {
        title: {
            display: true, 
            text: 'Pay', 
        }, 
        scales: {
            yAxes: [
                {
                    ticks: { min: 60000, max: 130000, stepSize: 30000}
                }
            ]
        }
    }


    const Bdata = {
        labels: ["2012", "2014", "2016", "2018", "2020"], 
        datasets: [
            {
                label: "Python", 
                data: pythonPop,  
                borderColor: "rgb(5, 255, 255)", 
                backgroundColor: "rgba(5, 255, 255)", 
                pointBackgroundColor: "rgb(5, 255, 255)", 
                pointBorderColor: "rgb(5, 255, 255)", 
            }
        ]
    }
    const Boptions = {
        title: {
            display: true, 
            text: 'Popularity', 
        }, 
        scales: {
            yAxes: [
                {
                    ticks: { min: 8000, max: 35000, stepSize: 15000}
                }
            ]
        }
    }

    //useEffect 
    useEffect(() => {
        gsap.fromTo(anim1.current, { background: "rgb(240,240,240)" }, { background: "linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%" })
    }, [])

    if (pageState === "compare") {
        return <MainPage/>
    }

    else if (pageState === "java") {
        return <JavaPage/>
    }

    else if (pageState === "c#") {
        return <CsharpPage/>
    }

    else if (pageState === "javascript") {
        return <JavascriptPage/>
    }

    return (
        <div className="lan-page-container">

            <div className="left-side-container">
                <div className="img-container">
                    <img alt="" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/445/4923940445_398d42e5-d903-4e8e-ba08-df943c0765d8.png?cb=1616534087"/>
                </div>
                <div className="left-side-box">
                    <div className="compare-button" onClick={handlePageStateCompare} style={{backgroundColor: "rgb(240, 240, 240)"}}>Compare</div>
                    <div className="other-button" style={{backgroundColor: "white"}} ref={anim1}>Python</div>
                    <div className="other-button" onClick={handlePageStateC} style={{backgroundColor: "rgb(240, 240, 240)"}}>C#</div>
                    <div className="other-button" onClick={handlePageStateJava} style={{backgroundColor: "rgb(240, 240, 240)"}}>Java</div>
                    <div className="other-button" onClick={handlePageStateJavascript} style={{backgroundColor: "rgb(240, 240, 240)"}}>Javascript</div>
                </div>
            </div>

            <div className="right-side-container">
                
                <h1>Python</h1>

                <div className="top-p-thing">
                    Python is an interpreted, object-oriented, high-level 
                    programming language with dynamic semantics. Python's 
                    simple, easy to learn syntax emphasizes readability 
                    and therefore reduces the cost of program maintenance. 
                    Python supports modules and packages, which encourages 
                    program modularity and code reuse.
                </div>

                <div className="graph-div">
                    <p>
                        This language mainly focuses on jobs like 
                        Data Science and AI. While they do make a 
                        lot of money, the python developers/ software 
                        developers don't.
                    </p>
                    <div className="line-stuff">
                        <Line data={Ldata} options={Loptions}/>
                    </div>
                </div>

                <div className="graph-div">
                    <p>
                        The demand for Python jobs such as Data Science
                        and Machin Learning, has rose ever since the 
                        beginning of the last decade.
                    </p>
                    <div className="line-stuff">
                        <Bar data={Bdata} options={Boptions}/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PythonPage; 
