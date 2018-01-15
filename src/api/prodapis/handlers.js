let adder = (sum, element) => {
	let p = new Promise ((resolve) => {
    resolve(sum + element);
  });
  return p;
}

export let loop = async (request, h) => {
  let numbers = [1,2,3,4,5,6,7,8,9,10];
  let sum = 0;
  for(let n of numbers){
    console.log(`Trying to add ${n}`);
    sum = await adder(sum, n);
    console.log(`Current sum is ${sum}`);
  }
  return sum;
};

export let csv2json = (request, h) => {
  let fs = require('fs');
  let jsonData = [];
  let fileContents = fs.readFileSync('assets/myFile.csv');
  let lines = fileContents.toString().split('\n');
  let header=(lines[0]).split(',');
  let iterData = lines.slice(1);
  for(let i in iterData){
    let data = {};
    let rowData = iterData[i].split(',');
    for (let k=0;k<header.length;k++){
      data[header[k]] = rowData[k];
    }
    jsonData.push(data);
  }
  return jsonData;
}

