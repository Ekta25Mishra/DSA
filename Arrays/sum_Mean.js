let n=4;
let arr=[10,20,30,40];
    // Write your logic here
    let sum=0;
    for(let i=0; i<n; i++){
        sum += arr[i];
    }
    let mean= Math.floor(sum / n);
    // return "Sum: " + sum + ", Mean: " + mean;
    console.log(`Sum:${sum}, Mean: ${mean}`);

    
