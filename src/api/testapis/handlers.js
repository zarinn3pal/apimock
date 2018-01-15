export let hello = (request, h) => {
	console.log("request", request.query);
	console.log("method", request.route.method);
	console.log("method", request.route.path);

	// console.log("h", h);
	let returnVal = 'Hello, world'
	if(request.query.name){
		let name = request.query.name;
		let capName = name[0].toUpperCase() + name.slice(1);
		returnVal = 'Hello, ' + capName;
	}
  return returnVal;
}

