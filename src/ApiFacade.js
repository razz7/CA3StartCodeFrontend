
import URL from "./settings" 
import LoginFacade from "./LoginFacade"



function handleHttpErrors(res) {
    if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
   }


function ApiFacade() {
    const fetchData = (urlendpoint) => {
        const options = LoginFacade.makeOptions("GET", true); //True add's the token
        return fetch(URL + urlendpoint, options).then(handleHttpErrors);
      }
    const getUser = () => {
      return fetchData("/api/info/user");
    }
    
    const getAdmin = () => {
      
      return fetchData("/api/info/admin");
    }
    
    const getSwapi = () => {
      return fetchData("/api/info/fetch");
    }

    return {
        getUser,
        getAdmin,
        getSwapi
    }
    
}


export default ApiFacade;