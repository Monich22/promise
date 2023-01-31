function getData() {
    
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        //const data = [
          resolve(["Harry", "Ross", "Bruce", "Cook", "Carolyn", "Morgan",
          "Albert", "Walker", "Randy", "Reed", "Larry", "Barnes",
          "Lois", "Wilson", "Jesse", "Campbell", "Ernest", "Rogers",
          "Theresa", "Patterson", "Henry", "Simmons", "Michelle", "Perry",
          "Frank", "Butler", "Shirley"]);

        //resolve(data);
      }, 2000);
    });
   
}
  getData()
    .then(data => console.log(data))
    .catch(error => console.error(error));
  