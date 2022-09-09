const express = require ("express")
const app = express()
app.use(express.json())
const cors = require("cors")
app.use(cors())

let products = [
    {
        id: 1,
        productName: "Arroz Rei Arthur 5kg"
    }
]

app.get("/listAllProducts",(request,response) => {
    return response.json(products)
})

app.post("/createProducts",(request,response) => {
    const lastId = products[products.length - 1].id
    const {productName} = request.body
    products.push(
    {
        id: lastId + 1,
        productName: productName
    }
    )
    return response.json("product registered succefully")
})

app.listen(3333, () => {
    console.log("Backend Rodando!")
})