import React, { useState, useRef, useEffect } from 'react'; 
import PythonPage from './PythonPage'; 
import JavaPage from './JavaPage';
import JavascriptPage from './JavascriptPage';
import MainPage from './MainPage';
import '../Language.scss'; 
import { Line, Bar } from 'react-chartjs-2'; 
import { csharpPay, csharpPop } from "./Data.js"; 
import gsap from 'gsap'; 

function CsharpPage() {

    //useRef 
    const anim1 = useRef(null); 

    //useState 
    const [pageState, setPageState] = useState("c#"); 

    //functions 
    const handlePageStateCompare = () => {
        setPageState("compare"); 
    }

    const handlePageStateJava = () => {
        setPageState("java"); 
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
                label: "C#",  
                data: csharpPay, 
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
                label: "C#", 
                data: csharpPop,  
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

    else if (pageState === "java") {
        return <JavaPage/>
    }

    else if (pageState === "python") {
        return <PythonPage/>
    }

    else if (pageState === "javascript") {
        return <JavascriptPage/>
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
                    <div className="other-button" style={{backgroundColor: "white"}} ref={anim1}>C#</div>
                    <div className="other-button" onClick={handlePageStateJava} style={{backgroundColor: "rgb(240, 240, 240)"}}>Java</div>
                    <div className="other-button" onClick={handlePageStateJavascript} style={{backgroundColor: "rgb(240, 240, 240)"}}>Javascript</div>
                </div>
            </div>

            <div className="right-side-container">
                
                <h1>C#</h1>

                <div className="top-p-thing">
                    C# is a modern, general-purpose, object-oriented 
                    programming language developed by Microsoft and 
                    approved by European Computer Manufacturers Association 
                    and International Standards Organization. C# was developed 
                    by Anders Hejlsberg and his team during the development 
                    of .Net Framework.
                </div>

                <div className="graph-div">
                    <p>
                        The pay for C# developers has remained steady and 
                        constant over the decade.
                    </p>
                    <div className="line-stuff">
                        <Line data={Ldata} options={Loptions}/>
                    </div>
                </div>

                <div className="graph-div">
                    <p>
                        Although the demand for C# developers isn't as high 
                        as something like a Java or Python Developer, it is 
                        still one of the best technologes to use in some 
                        parts of the US.
                    </p>
                    <div className="line-stuff">
                        <Bar data={Bdata} options={Boptions}/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CsharpPage
