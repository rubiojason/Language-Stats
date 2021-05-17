import React, { useState, useEffect, useRef } from 'react'
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2'
import CsharpPage from './CsharpPage.js';
import { pythonPay, pythonPop, pythonPayA, pythonPopA, 
         javaPay, javaPop, javaPayA, javaPopA, 
         csharpPay, csharpPop, csharpPayA, csharpPopA, 
         javascriptPay, javascriptPop, javascriptPayA, javascriptPopA } from "./Data.js"
import JavaPage from './JavaPage.js';
import JavascriptPage from './JavascriptPage.js';
import PythonPage from './PythonPage.js';
import '../Main.scss'; 
import gsap from 'gsap'; 

function MainPage() {


    //what i need to do is make a temporary usestate that gets the user first and second 
    //language on the onChange function. Then on the onSubmit function that's where you 
    //input all the data into the tables and graphs.
    
    //useRef 
    const anim1 = useRef(null); 

    //usestate 
    const [errorOpacity, setErrorOpacity] = useState(0); 

        //language state 
    const [tempfirstlan, setTempFirstLan] = useState("");
    const [tempsecondlan, setTempSecondLan] = useState(""); 
    const [firstlanguage, setFirstlanguage] = useState(""); 
    const [secondlanguage, setSecondlanguage] = useState(""); 

        //python state 
    const [PythonPay, setPythonPay] = useState([]); 
    const [PythonPopularity, setPythonPopularity] = useState([]); 

        //java state 
    const [JavaPay, setJavaPay] = useState([]); 
    const [JavaPopularity, setJavaPopularity] = useState([]); 


        //c# state 
    const [CsharpPay, setCsharpPay] = useState([]); 
    const [CsharpPopularity, setCsharpPopularity] = useState([]); 

        //javascript state 
    const [JavascriptPay, setJavascriptPay] = useState([]); 
    const [JavascriptPopularity, setJavascriptPopularity] = useState([]); 


        //page state 
    const [pageState, setPageState] = useState("compare"); 

    const handleSubmit = e => {
        e.preventDefault(); 

        if (tempfirstlan === tempsecondlan || tempfirstlan === "" || tempsecondlan === "") {
            setErrorOpacity(1); 
            return 
        }

        //first case 
        if (tempfirstlan === "Python") {
            //final language state 
            setFirstlanguage(tempfirstlan);
            //set data 
            setPythonPay(pythonPay);
            setPythonPopularity(pythonPop);  
            setJavaPay([]); 
            setJavaPopularity([]); 
            setCsharpPay([]); 
            setCsharpPopularity([]); 
            setJavascriptPay([]); 
            setJavascriptPopularity([]); 

            setErrorOpacity(0); 
        }
    
        if (tempfirstlan === "Java") {
            //final language state 
            setFirstlanguage(tempfirstlan); 
            //set data
            setJavaPay(javaPay); 
            setJavaPopularity(javaPop); 
            setPythonPay([]);
            setPythonPopularity([]);  
            setCsharpPay([]); 
            setCsharpPopularity([]);
            setJavascriptPay([]); 
            setJavascriptPopularity([]); 

            setErrorOpacity(0); 
        }

        if (tempfirstlan === "C#") {
            //final language state 
            setFirstlanguage(tempfirstlan);
            //set data  
            setCsharpPay(csharpPay); 
            setCsharpPopularity(csharpPop); 
            setPythonPay([]);
            setPythonPopularity([]); 
            setJavaPay([]); 
            setJavaPopularity([]); 
            setJavascriptPay([]); 
            setJavascriptPopularity([]); 

            setErrorOpacity(0); 
        }

        if (tempfirstlan === "Javascript") {
            //final language state 
            setFirstlanguage(tempfirstlan); 
            //set data 
            setJavascriptPay(javascriptPay); 
            setJavascriptPopularity(javascriptPop); 
            setPythonPay([]);
            setPythonPopularity([]); 
            setJavaPay([]); 
            setJavaPopularity([]); 
            setCsharpPay([]); 
            setCsharpPopularity([]);

            setErrorOpacity(0); 
        }

        //second case 
        if (tempsecondlan === "Python") {
            //final language state 
            setSecondlanguage(tempsecondlan);
            //set data  
            setPythonPay(pythonPay);
            setPythonPopularity(pythonPop);  
            setJavaPay([]); 
            setJavaPopularity([]); 
            setCsharpPay([]); 
            setCsharpPopularity([]); 
            setJavascriptPay([]); 
            setJavascriptPopularity([]); 

            setErrorOpacity(0); 
        }
    
        if (tempsecondlan === "Java") {
            //final language state 
            setSecondlanguage(tempsecondlan); 
            //set data 
            setJavaPay(javaPay); 
            setJavaPopularity(javaPop);
            setPythonPay([]);
            setPythonPopularity([]);  
            setCsharpPay([]); 
            setCsharpPopularity([]);
            setJavascriptPay([]); 
            setJavascriptPopularity([]); 

            setErrorOpacity(0); 
        }

        if (tempsecondlan === "C#") {
            //final language state 
            setSecondlanguage(tempsecondlan); 
            //set data 
            setJavaPay(csharpPay); 
            setJavaPopularity(csharpPop); 
            setPythonPay([]);
            setPythonPopularity([]); 
            setJavaPay([]); 
            setJavaPopularity([]); 
            setJavascriptPay([]); 
            setJavascriptPopularity([]); 

            setErrorOpacity(0); 
        }

        if (tempsecondlan === "Javascript") {
            //final language state 
            setSecondlanguage(tempsecondlan); 
            //set data 
            setJavascriptPay(javascriptPay); 
            setJavascriptPopularity(javascriptPop); 
            setPythonPay([]);
            setPythonPopularity([]); 
            setJavaPay([]); 
            setJavaPopularity([]); 
            setCsharpPay([]); 
            setCsharpPopularity([]);

            setErrorOpacity(0); 
        }
    }

    //handle first language 
    const firstLanChange = e => {
        e.preventDefault(); 
        console.log(e.target.value); 
        setTempFirstLan(e.target.value); 
    }

    //handle second language 
    const secondLanChange = e => {
        e.preventDefault(); 
        console.log(e.target.value); 
        setTempSecondLan(e.target.value); 
    }

    //line graph 
    const Ldata = {
        labels: ["2012", "2014", "2016", "2018", "2020"], 
        datasets: [
            {
                label: firstlanguage,  
                data: firstlanguage === "Python" ? pythonPay : 
                      firstlanguage === "Java" ? javaPay : 
                      firstlanguage === "C#" ? csharpPay : 
                      firstlanguage === "Javascript" ? javascriptPay : [], 
                borderColor: "rgb(144, 19, 247)", 
                backgroundColor: "rgba(144, 19, 247, 0.4)", 
                pointBackgroundColor: "rgb(144, 19, 247)", 
                pointBorderColor: "rgb(144, 19, 247)", 
            }, 
            {
                label: secondlanguage, 
                data: secondlanguage === "Python" ? pythonPay : 
                      secondlanguage === "Java" ? javaPay : 
                      secondlanguage === "C#" ? csharpPay : 
                      secondlanguage === "Javascript" ? javascriptPay : [], 
                borderColor: "rgb(5, 255, 255)", 
                backgroundColor: "rgba(5, 255, 255, 0.4)", 
                pointBackgroundColor: "rgb(5, 255, 255)", 
                pointBorderColor: "rgb(5, 255, 255)", 
            }
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
                    //ticks: { min: 60000, max: 130000, stepSize: 17500}
                    ticks: { min: 60000, max: 130000, stepSize: 40000 }
                }
            ]
        }
    }

    //bar graph 
    const Bdata = {
        labels: ["2012", "2014", "2016", "2018", "2020"], 
        datasets: [
            {
                label: firstlanguage, 
                data: firstlanguage === "Python" ? pythonPop : 
                      firstlanguage === "Java" ? javaPop : 
                      firstlanguage === "C#" ? csharpPop : 
                      firstlanguage === "Javascript" ? javascriptPop : [],  
                borderColor: "rgb(144, 19, 247)", 
                backgroundColor: "rgba(144, 19, 247)", 
                pointBackgroundColor: "rgb(144, 19, 247)", 
                pointBorderColor: "rgb(144, 19, 247)", 
            }, 
            {
                label: secondlanguage, 
                data: secondlanguage === "Python" ? pythonPop : 
                      secondlanguage === "Java" ? javaPop : 
                      secondlanguage === "C#" ? csharpPop : 
                      secondlanguage === "Javascript" ? javascriptPop : [],  
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
                    ticks: { min: 8000, max: 35000, stepSize: 12000}
                }
            ]
        }
    }

    //donut graph 
    const Ddata = {
        labels: [firstlanguage, secondlanguage],
        datasets: [
          {
            label: 'Sales 2019 (M)',
            data: [firstlanguage === "Python" ? Math.round(pythonPayA) : 
                   firstlanguage === "Java" ? Math.round(javaPayA) : 
                   firstlanguage === "C#" ? Math.round(csharpPayA): 
                   firstlanguage === "Javascript" ? Math.round(javascriptPayA) : [], 

                   secondlanguage === "Python" ? Math.round(pythonPayA) : 
                   secondlanguage === "Java" ? Math.round(javaPayA) : 
                   secondlanguage === "C#" ? Math.round(csharpPayA) : 
                   secondlanguage === "Javascript" ? Math.round(javascriptPayA) : []],
            borderColor: [
              'rgb(144, 19, 247)',
              'rgb(5, 255, 255)',
            ],
            backgroundColor: [
              'rgba(144, 19, 247, 0.4)',
              'rgba(5, 255, 255, 0.4)'
            ]
          }
        ]
      }
    const Doptions = {
        title: {
          display: true,
          text: 'Bar Chart'
        },
      }

    //circle graph 
    const Cdata = {
        labels: [firstlanguage, secondlanguage],
        datasets: [
          {
            label: 'Sales 2019 (M)',
            data: [firstlanguage === "Python" ? Math.round(pythonPopA) : 
                   firstlanguage === "Java" ? Math.round(javaPopA) : 
                   firstlanguage === "C#" ? Math.round(csharpPopA): 
                   firstlanguage === "Javascript" ? Math.round(javascriptPopA) : [], 

                   secondlanguage === "Python" ? Math.round(pythonPopA) : 
                   secondlanguage === "Java" ? Math.round(javaPopA) : 
                   secondlanguage === "C#" ? Math.round(csharpPopA) : 
                   secondlanguage === "Javascript" ? Math.round(javascriptPopA) : []],
            borderColor: [
              'rgb(144, 19, 247)',
              'rgb(5, 255, 255)',
            ],
            backgroundColor: [
              'rgba(144, 19, 247, 0.4)',
              'rgba(5, 255, 255, 0.4)'
            ]
          }
        ]
      }
    const Coptions = {
        title: {
          display: true,
          text: 'Pay'
        },
      }

      //useEffect 
      useEffect(() => {
          gsap.fromTo(anim1.current, { background: "rgb(240,240,240)" }, { background: "linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%" })
      }, [])

    //functions 
    const handlePageStatePython = () => {
        setPageState("python"); 
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

    if (pageState === "python") {
        return <PythonPage/>
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
        <div className="page-container">

            <div className="left-side-container">
                <div className="img-container">
                    <img alt="" src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/445/4923940445_398d42e5-d903-4e8e-ba08-df943c0765d8.png?cb=1616534087"/>
                </div>
                <div className="left-side-box">
                    <div className="compare-button" style={{backgroundColor: "white"}} ref={anim1}>Compare</div>
                    <div className="other-button" style={{backgroundColor: "rgb(240, 240, 240)"}} onClick={handlePageStatePython}>Python</div>
                    <div className="other-button" style={{backgroundColor: "rgb(240, 240, 240)"}} onClick={handlePageStateC}>C#</div>
                    <div className="other-button" style={{backgroundColor: "rgb(240, 240, 240)"}} onClick={handlePageStateJava}>Java</div>
                    <div className="other-button" style={{backgroundColor: "rgb(240, 240, 240)"}} onClick={handlePageStateJavascript}>Javascript</div>
                </div>
            </div>

            <div className="right-side-container">

                <form className="input-container" onSubmit={handleSubmit}>

                    <div className="input-stuff-container">
                        <div className="left-select"></div>
                        <select onChange={firstLanChange} >
                            <optgroup>
                                <option defaultValue>Choose</option>
                                <option value="Java">Java</option>
                                <option value="Python">Python</option>
                                <option value="C#">C#</option>
                                <option value="Javascript">Javascript</option>
                            </optgroup>
                        </select>

                        <select onChange={secondLanChange}>
                            <optgroup>
                                <option defaultValue>Choose</option>
                                <option value="Java">Java</option>
                                <option value="Python">Python</option>
                                <option value="C#">C#</option>
                                <option value="Javascript">Javascript</option>
                            </optgroup>
                        </select>
                        <div className="right-select"></div>
                    </div>

                    <button className="main-button">Go</button>

                </form>

                <div id="red-error" style={{opacity: errorOpacity, color: "red"}}>You cannot input the same language</div>
                
                <div className="graph-container">
                    <div className="line-graph-donut-container">
                        <div className="line-div">
                            <Line data={Ldata} options={Loptions}/>
                        </div>
                        <div className="donut-div">
                            <Doughnut data={Ddata} options={Doptions} />
                        </div>
                    </div>

                    <div className="bar-graph-pie-container">
                        <div className="pie-div">
                            <Pie data={Cdata} options={Coptions} />
                        </div>
                        <div className="bar-div">
                            <Bar data={Bdata} options={Boptions}/> 
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainPage
