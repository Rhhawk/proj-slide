let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')
let container = document.querySelector('.container')
let listContainer = document.querySelector('.list')
let thumb = document.querySelector('.thumb')



btnNext.onclick = ()=> moveItemClick('next')
btnBack.onclick = ()=> moveItemClick('back')

function moveItemClick(type){
    let listItems = document.querySelectorAll(".list .list-item")//querySelectorAll chama todos os items como node list(parecido com array)
    let thumbItems = document.querySelectorAll(".thumb .thumb-item")

    console.log(listItems)//visualisa como node list
    console.log(thumbItems)//visualisa como node list
    
    if(type === 'next'){
        listContainer.appendChild(listItems[0])//appendchild() ultilizado para verificar o node list apartir do ultimo da lista mudando para o inicio da lista 
        thumb.appendChild(thumbItems[0])
        container.classList.add('next')//.classList.add serve para criar uma classe no item = se fosse la no style e criasse a classe para o .container

    }else {
        listContainer.prepend(listItems[listItems.length - 1])//prepend() e o oposto da appendchuild
        thumb.prepend(thumbItems[listItems.length - 1])// listContainer.prepend(thumbItems[3]) essa forma e igual a com length - 1, so que a do length -1 e melhor pois não e necessario definir a quantidade de array[3] ela ja conta apartir do ultimo
        container.classList.add('back')
    
    }

    setTimeout(()=>{
        container.classList.remove('next')//coloquei um time para remover a class depois de 3s se nao ia ficar infinito
        container.classList.remove('back')
    
    }, 2000);

}