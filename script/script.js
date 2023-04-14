const date = new Date();
let selectedDay = `0${date.getDate()}`.slice(-2);
let selectedMonth = `0${date.getMonth() + 1}`.slice(-2);
let selectedYear = date.getFullYear();
let todayDate = `${selectedDay}/${selectedMonth}/${selectedYear}`
let selectedDate = `${selectedDay}/${selectedMonth}/${selectedYear}`
let availableProducts = []
let cart = []

const handleAddProduct = (productId) => {
  if (!cart.includes(productId)) {
    cart.push(productId)
    console.log(`Cart Products: ${cart}`)
  } else {
    console.log('Product already added')
  }
}

let sendProducts = (cart, selectedDate) => {
  console.log(`Cart items: ${cart}, SelectedDate: ${selectedDate}`)
}

const getAvailableProducts = async () => {
  availableProducts = await fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then(availableProducts => {
      const productListNode = document.getElementById('productList')

      availableProducts.forEach(product => {
        let li = document.createElement('li');
        li.classList.add('product')
        const img = document.createElement('img'); 
        img.src = product.image;
        img.classList.add('productImage')
        const productName = document.createElement('p')
        productName.innerHTML = product.title
        productName.classList.add('productName')

        const disponibilityContainer = document.createElement('div')
        const disponibilityText = document.createElement('p')
        const disponibilityValue = document.createElement('p')
        disponibilityText.innerHTML = 'Disponibilidade'
        disponibilityValue.innerHTML = product.stock || Math.floor(Math.random() * 10) || 'Produto fora de estoque'; // Placeholder
        disponibilityContainer.classList.add('disponibilityContainer')
        disponibilityContainer.appendChild(disponibilityText)
        disponibilityContainer.appendChild(disponibilityValue)

        const btn = document.createElement('button')
        btn.innerHTML = 'Locar';
        btn.onclick = function() {
          handleAddProduct(product.id)
        };
        btn.classList.add('productBtn')

        li.appendChild(img)
        li.appendChild(productName)
        li.appendChild(disponibilityContainer)
        li.appendChild(btn)
        productListNode.appendChild(li)
      })

      return availableProducts
    })
    .catch(error => console.log(`Error handle: ${error}`))
}

getAvailableProducts()

document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    new datedreamer.calendar({
      element: "#calendar",
      t: "DD/MM/YYYY",
      inputLabel: 'Escolha uma data',
      darkMode: true,
      theme: 'lite-purple',
      onChange: (e) => {
        selectedDate = e.detail.match(/.+(?=T)/)[0]
        console.log('New selected date: ', selectedDate)
      },
    })
    
    document.getElementById('date').innerHTML = todayDate
  }
};