function Popup(){
   const $popapOpen = document.querySelectorAll('[data-popup-open]')
   const $popapName = document.querySelectorAll('[data-popup-name]')
   const $popapClose = document.querySelectorAll('[data-popup-close]')

   return {
      init(){
         $popapOpen.forEach( ($button) => {
            $button.addEventListener('click', this.open($button))
         } )

         $popapClose.forEach( ($button) => {
            $button.addEventListener('click', this.close($button))
         } )
      },
      open(button){
         function main(){
            for (let $popup of $popapName){
               if (button.dataset.popupOpen === $popup.dataset.popupName){
                  $popup.classList.add('show')
                  break
               }
            }
         }
         return main
      },
      close(button){
         function main(){
            for (let $popup of $popapName){
               if (button.dataset.popupClose === $popup.dataset.popupName){
                  $popup.classList.remove('show')
                  break
               }
            }
         }
         return main
      }
   }
}

Popup().init()