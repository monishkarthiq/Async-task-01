//DATA FETCH - from api url
let url = "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/honda/modelyear/2021?format=json";
async function fetchfromUrl()  {    
    let dataFetch = await fetch(url);
    // converting fetched data to json
    let jsonData1 = await dataFetch.json();
    // looping array containg json data and dynamic content creation using DOM
    function displayData(item) {
        let mainContainer = document.querySelector('#fetchContent');
        let row1 = domMachine('div','row');
        item.Results.forEach((e) => {        
            let col1 = domMachine('div','col-sm-12 col-md-4');

            let card1 = domMachine('card','m-1')

            let img1 = domMachine('img','card-img-top')
            img1.setAttribute('src','img1');
            img1.setAttribute('alt','carimage')

            let cardbody1 = domMachine('div','card-body')

            let h3Tag1 = domMachine('h3','Card Title text-center');
            h3Tag1.innerHTML = e.Model_Name
            
            let ul1 = domMachine('ul','List-group')
            let li11 = domMachine('li','list-group-item')
            li11.innerHTML = '<b>Make-Name :  </b>' + e.Make_Name;
            let li12 = domMachine('li',"list-group-item")
            li12.innerHTML = '<b>Model-ID : </b>' + e.Model_ID;
            let li13 = domMachine('li',"list-group-item")
            li13.innerHTML = '<b>Make_ID : </b>' + e.Make_ID;
            //Appending all elements
            ul1.append(li11,li12,li13);
            cardbody1.append(h3Tag1,ul1);
            card1.append(img1, cardbody1);
            col1.append(card1)

            row1.append(col1);
            mainContainer.append(row1);
        })
    }
    //Calling foreach loop on fetched jsonData
    displayData(jsonData1);   
};

//DOM element with class and id creater function
let domMachine =  ((element, className = '', elementId = '') => {
    let domMachineElement = document.createElement(element);
    domMachineElement.setAttribute('class',className);
    domMachineElement.setAttribute('id',elementId);
    return domMachineElement;
})

fetchfromUrl();
