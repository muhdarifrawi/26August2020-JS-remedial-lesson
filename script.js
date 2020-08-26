// putting what I wish to select into variable x 
// for easy use (so i don't have to keep typing long sentences)
let x = document.getElementsByTagName("div");

console.log(x);

// replace the text within the first div 
x[0].innerText = "hello";

// selecting by ID
// there should only be ONE id with that particular name 
let y = document.getElementById("special");
console.log(y);
// inner HTML allows you to format using HTML
y.innerHTML = "<h1>success?</h1>";

// selecting by class
// class will give an array
let z = document.getElementsByClassName("box");
console.log(z);

z[0].style.margin = "20px";

// set attribute for functions
// this is the better practice
z[0].setAttribute("onClick", "turtle()");

z[0].setAttribute("onMouseOver", "hare()");

function turtle(){
    // alert box will pop-up
    alert();
}

function hare(){
    z[0].style.backgroundColor = "lime";
    z[0].style.cursor = "pointer";
}


// the axios method of getting API
// take note that you will have to import 
// html script from CDN 
// find it here: https://www.npmjs.com/package/axios

// give variable named API the URL or endpoint
let API = "https://api.data.gov.sg/v1/environment/psi"


// then pass it to the AXIOS 
axios.get(API)
  .then(function (response) {
    // handle success

    // Iterate arrays from json
    let length = response.data.region_metadata.length
    for (i=0;i<length;i++){
        console.log(response.data.region_metadata[i]);
    }
    

    // Iterate objects from json
    console.log(response.data.items[0].readings.o3_sub_index);

    object1 = response.data.items[0].readings

    for (let [key, value] of Object.entries(object1)) {
        console.log(key);
    }

    // Passing response data to funtion
    // To keep the success resonse are neat 
    test(response.data);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


  function test(apple){
    console.log(apple)
      
    object1 = apple.items[0].readings

    for (let [key, value] of Object.entries(object1)) {
        console.log(key);
    }
  }