const image = document.getElementById("image")
const preview = document.getElementById("preview")
const previewList = document.getElementById("preview-list")
const item = document.getElementById("item")
const price = document.getElementById("price")
const quantity = document.getElementById("quantity")
const Print = document.getElementById("checkout")
const addToList = document.getElementById
("addToList")
const inventory = [
    {name: "casamigos",
     price: "120,000",
    },
    {name: "jameson Black",
     price: "100,000",
    },
    {name: "Glenfiddich",
     price: "800,000",
    },
    {name: "heineken",
     price: "5,000",
    },
]



    const listItems = () => {

     for (el of inventory){
    const options = document.createElement("option")
    console.log(el)
    options.textContent = el.name
    item.appendChild(options)
    item.value = options.textContent
    console.log(item.value)
    checkPrice()
    }

    }
    
    
    const checkPrice = ()=>{
     for (el of inventory){
    const option = document.createElement("option")
    option.textContent = el.price
    price.appendChild(option)
    price.value = option.textContent
     }

    }

const addList = () => {
    const list = document.createElement("li")
    list.innerHTML = `<span id="preview-quantity">1</span> 
     <span id="preview-item">casamigos</span> 
     <span id="preview-price">120,000</span>`
     previewList.appendChild(list)
}

listItems()
    //console.log(itemPrice)
    //console.log(item.textContent)