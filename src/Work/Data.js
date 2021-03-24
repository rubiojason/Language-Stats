const getAverage = arr => {
    var sum = 0; 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length - 1; 
}


//python 

export var pythonPay = [84000, 86000, 85000, 87000, 90000, 91000]
export var pythonPop = [10800, 11800, 12500, 13100, 13200, 14100]

export var pythonPayA = getAverage(pythonPay); 
export var pythonPopA = getAverage(pythonPop); 

//java 

export var javaPay = [100000, 101000, 112000, 121000, 120000, 107000]
export var javaPop = [29200, 28100, 26700, 29700, 28600, 27100]

export var javaPayA = getAverage(javaPay); 
export var javaPopA = getAverage(javaPop); 

//c#

export var csharpPay = [101000, 99000, 95100, 97000, 89700, 95200]
export var csharpPop = [9300, 10300, 11100, 11000, 10400, 9800]

export var csharpPayA = getAverage(csharpPay); 
export var csharpPopA = getAverage(csharpPop); 

//javascript

export var javascriptPay = [68000, 67800, 70000, 85000, 82300, 87000]
export var javascriptPop = [20200, 20500, 20700, 21200, 21600, 22000]

export var javascriptPayA = getAverage(javascriptPay); 
export var javascriptPopA = getAverage(javascriptPop); 
