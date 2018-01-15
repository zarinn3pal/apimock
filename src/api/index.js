import testRoutes from './testapis'; 
import prodRoutes from './prodapis'; 

let routes = [];
routes.push(testRoutes);
prodRoutes.forEach(route =>{
	routes.push(route);
});


export default routes;