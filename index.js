
function getData(callback) {
  setTimeout(() => {
    const data = ([ "Harry", 'Ross', "Bruce", "Cook", "Carolyn", "Morgan", 
             "Albert", "Walker", "Randy", "Reed", "Larry", "Barnes","Lois",
          //  "Wilson", "Jesse", "Campbell", "Ernest", "Rogers",     
           //"Theresa", "Patterson", "Henry", "Simmons", "Michelle", 
           "Perry",      "Frank", "Butler", "Shirley"]);
    callback(data);
  }, 2000);
}

function displayData(data) {
  console.log(data);
}

getData(displayData);



