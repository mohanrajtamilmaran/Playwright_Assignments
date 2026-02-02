testType = "Regression"
switch (testType) {
    case "Sanity":
        console.log("Executing Sanity Tests")    
        break;  
    case "Regression":
        console.log("Executing Regression Tests" )
        break;
    default:
        console.log("Execcuting Smoke Tests")
}    