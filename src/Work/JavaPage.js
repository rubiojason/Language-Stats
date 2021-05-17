import React, { useState, useEffect, useRef } from 'react'; 
import CsharpPage from './CsharpPage';
import PythonPage from './PythonPage';
import JavascriptPage from './JavascriptPage';
import MainPage from './MainPage';
import '../Language.scss'; 
import { Line, Bar } from 'react-chartjs-2'
import { javaPay, javaPop } from "./Data.js"
import gsap from 'gsap'; 

function JavaPage() {

    //useRef 
    const anim1 = useRef(null); 

    //useState 
    const [pageState, setPageState] = useState("java"); 

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

    const handlePageStateJavascript = () => {
        setPageState("javascript"); 
    }


    const Ldata = {
        labels: ["2012", "2014", "2016", "2018", "2020"], 
        datasets: [
            {
                label: "Java",  
                data: javaPay, 
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
                label: "Java", 
                data: javaPop,  
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

    else if (pageState === "c#") {
        return <CsharpPage/>
    }

    else if (pageState === "python") {
        return <PythonPage/>
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
                    <div className="other-button" onClick={handlePageStatePython} style={{backgroundColor: "rgb(240, 240, 240)"}}>Python</div>
                    <div className="other-button" onClick={handlePageStateC} style={{backgroundColor: "rgb(240, 240, 240)"}}>C#</div>
                    <div className="other-button" style={{backgroundColor: "white"}} ref={anim1}>Java</div>
                    <div className="other-button" onClick={handlePageStateJavascript} style={{backgroundColor: "rgb(240, 240, 240)"}}>Javascript</div>
                </div>
            </div>

            <div className="right-side-container">
                
                <h1>Java</h1>

                <div className="top-p-thing">
                    Java is a high-level programming language developed 
                    by Sun Microsystems. It was originally designed for 
                    developing programs for set-top boxes and handheld 
                    devices, but later became a popular choice for creating
                    web applications. The Java syntax is similar to C++, 
                    but is strictly an object-oriented programming language.
                </div>

                <div className="graph-div">
                    <p>
                        Over the last decade, the pay for Java Developers 
                        peaked midway through the decade. Ever since 2018, 
                        the average pay has fallen into 2020.
                    </p>
                    <div className="line-stuff">
                        <Line data={Ldata} options={Loptions}/>
                    </div>
                </div>

                <div className="graph-div">
                    <p>
                        The demand and popularity for Java has remained pretty 
                        steady throughout the decade. Companies demand for Java 
                        Developers is around the same now than how it was in 2010.
                    </p>
                    <div className="line-stuff">
                        <Bar data={Bdata} options={Boptions}/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default JavaPage
