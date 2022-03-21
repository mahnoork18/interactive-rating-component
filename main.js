    const rate_buttons = document.querySelectorAll("#num");
    const feed = document.querySelector('#feedback');
    const submit =   document.querySelector("#cta");
    const modal = document.querySelector('.box-modal');
    const card = document.querySelector('.card-container');

    for(let i=0;i<5;i++){
        rate_buttons[i]++
    }

    rate_buttons.forEach(function (button){
        button.onclick= function(){
            let value= button.dataset.value;

            rate_buttons.forEach(function(btn){
              
            });
            submit.addEventListener('click',()=> showFeedback(value))

        }
    });
function showFeedback(value){
  modal.style.display = "flex";
    card.style.display = 'none';
    feed.innerHTML =`You have selected ${value} out of 5`
}
