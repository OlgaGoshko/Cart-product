function Cart(){
   // Статичні змінні
   const $buttonsAdd = document.querySelectorAll('[data-cart-add]')
   const $cartContainers = document.querySelectorAll('[data-cart-container]')
   const $cartProductRoot = document.querySelector('[data-cart-product-render]')
   const $cartStatCount = document.querySelector('[ data-cart-count]')

   const CartProp = JSON.parse(localStorage.getItem('CartProp')) ?  JSON(localStorage.getItem('CartProp')) : {
      totalPrice: 0,
      amountProduct: 0,
      products: [],
   }

   function renderCartProduct(cart){
      $cartProductRoot.innerHTML = ''

      cart.products.forEach(product => {
         $cartProductRoot.insertAdjacentHTML('beforeend', `
            <li class="popup-items__item">
               <img class="popup-items__image" src="${product.image}" alt="cart image">
               <div class="popup-items__name">${product.name}</div>
               <div class="popup-items__price">${product.price}</div>
            </li>
         `)
      })

      $cartStatCount.textContent = cart.amountProduct
   }

   return {
      init(){
         // Старт модуля
         $buttonsAdd.forEach( $button => {
            $button.addEventListener('click', this.addCartItem)
         } )
      },
      addCartItem(event){
         // Add Cart Product
         event.preventDefault()

         const product = {}
         let nameProductValue = null
         let priceProductValue = null
         let imageProductSrc = null

         for (let i=0; i < $cartContainers.length; i++){
            if (i === +event.target.dataset.cartAdd){
               nameProductValue = $cartContainers[i].querySelector('[data-cart-name]').textContent
               priceProductValue = +$cartContainers[i].querySelector('[data-cart-price]').textContent
               imageProductSrc = $cartContainers[i].querySelector('[data-cart-image]').getAttribute('src')
               break
            }
         }

         CartProp.amountProduct++

         product.name = nameProductValue
         product.price = priceProductValue
         product.amount = 1
         product.priceAll = product.amount * product.price
         product.image = imageProductSrc

         CartProp.products.push(product)

         
         renderCartProduct(CartProp)
      }
   }
}

Cart().init()