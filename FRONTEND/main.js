
const BaseURL = "http://localhost:3333"

function getproducts(){
    axios.get(`${BaseURL}/listAllProducts`)
    .then(response => {const data = response.data
    content.textContent = JSON.stringify(data)
    })
    .catch (error=>{
        content.textContent = error
    })
}

getproducts()


const newProduct = {
    productName: "Batatinha"
}


function createdProducts(){
    axios.post(`${BaseURL}/createProducts`, newProduct)
    .then(response => {
        //alert ("Produto Cadastrado com sucesso!")
        getproducts()
        
            })
        .catch (error=>{
            alert(error)
        })
}
createdProducts()
