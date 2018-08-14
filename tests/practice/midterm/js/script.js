//select Elements  && defining variables



//define functions and classes
class Bitcoin{
  constructor(/* Parameters here if needed */){
    /* Create properties using this and invoke methods that should be called automatically here */
  }
  getPrices(){
    $.ajax({
      url: "https://bitpay.com/api/rates",
      dataType: "json",
      success: data =>{
        console.log(data)
      },
      error: error=>{
        console.log("There was an error")
      }
    })
  }
  setPrices(nums){
    console.log("Running setPrices... I should first console.log nums to see if I'm using the resources properly")
  }
  refresh(){
    console.log("Refreshing the prices")
  }
}


//adding event listeners, calling functions, and creating instances of classes


