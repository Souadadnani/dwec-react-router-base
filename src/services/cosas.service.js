
const getCosas = async (token, setCosas) =>{
    try {
        const options = {
            headers: {
                Authorization: `Bearer ${token}`,
            } 
        }
        const cosas = await fetch("http://localhost:8080/api/cosas", options);
        const json = await cosas.json();
        setCosas(json);
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
    }
}

const addCosaNueva = async (token, nombre)=>{
    fetch("http://localhost:8080/api/cosas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ nombre }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(`cosa añadida ${nombre}`);
      });
}
export { getCosas, addCosaNueva };