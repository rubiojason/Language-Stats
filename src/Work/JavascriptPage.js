import React, { useState, useRef, useEffect } from 'react'; 
import CsharpPage from './CsharpPage';
import PythonPage from './PythonPage';
import JavaPage from './JavaPage';
import MainPage from './MainPage';
import '../Language.scss'; 
import { Line, Bar } from 'react-chartjs-2'
import { javascriptPay, javascriptPop } from "./Data.js"
import gsap from 'gsap'; 

function JavascriptPage() {

    //useRef
    const anim1 = useRef(null); 

    //useState 
    const [pageState, setPageState] = useState("javascript"); 

    //functions 
    const handlePageStateCompare = () => {
        setPageState("compare"); 
    }

    const handlePageStateC = () => {
        setPageState("c#"); 
    }

    const handlePageStatePython = () => {
        setPageState("python"); 
    }

    const handlePageStateJava = () => {
        setPageState("java"); 
    }


    const Ldata = {
        labels: ["2012", "2014", "2016", "2018", "2020"], 
        datasets: [
            {
                label: "Javascript",  
                data: javascriptPay, 
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
                    ticks: { min: 60000, max: 130000, stepSize: 17500}
                }
            ]
        }
    }


    const Bdata = {
        labels: ["2012", "2014", "2016", "2018", "2020"], 
        datasets: [
            {
                label: "Javascript", 
                data: javascriptPop,  
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
                    ticks: { min: 8000, max: 35000, stepSize: 6750}
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

    else if (pageState === "c#") {
        return <CsharpPage/>
    }

    else if (pageState === "python") {
        return <PythonPage/>
    }

    else if (pageState === "java") {
        return <JavaPage/>
    }

    return (
        <div className="page-container">

            <div className="left-side-container">
                <div className="img-container">
                    <img alt="" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/445/4923940445_398d42e5-d903-4e8e-ba08-df943c0765d8.png?cb=1616534087"/>
                </div>
                <div className="left-side-box">
                    <div className="compare-button" onClick={handlePageStateCompare} style={{backgroundColor: "rgb(240, 240, 240)"}}>Compare</div>
                    <div className="other-button" onClick={handlePageStatePython} style={{backgroundColor: "rgb(240, 240, 240)"}}>Python</div>
                    <div className="other-button" onClick={handlePageStateC} style={{backgroundColor: "rgb(240, 240, 240)"}}>C#</div>
                    <div className="other-button" onClick={handlePageStateJava} style={{backgroundColor: "rgb(240, 240, 240)"}}>Java</div>
                    <div className="other-button" style={{backgroundColor: "white"}} ref={anim1}>Javascript</div>
                </div>
            </div>

            <div className="right-side-container">
                
                <h1>Javascript</h1>

                <div className="top-p-thing">
                    JavaScript is a lightweight, interpreted, object-oriented 
                    language with first-class functions, and is best known as 
                    the scripting language for Web pages, but it's used in 
                    many non-browser environments as well. It is a prototype-based, 
                    multi-paradigm scripting language that is dynamic, and supports 
                    object-oriented, imperative, and functional programming styles.
                </div>

                <div className="graph-div">
                    <p>
                        The demand for javascript developers has increased over 
                        the last decade. Mainly the demand comes from web 
                        development itself.
                    </p>
                    <div className="line-stuff">
                        <Line data={Ldata} options={Loptions}/>
                    </div>
                </div>

                <div className="graph-div">
                    <p>
                        The popularity and demand for javascript developers varies 
                        from React JS, Vue Js, and Angular, atleast that's the demand. 
                        This has remained the same throughout the last decade.
                    </p>
                    <div className="line-stuff">
                        <Bar data={Bdata} options={Boptions}/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default JavascriptPage
