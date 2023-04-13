const monthEl = document.querySelector(".date h1")
const fullDateEl = document.querySelector(".date p")
const datesEl = document.querySelector(".date")

const monthIndex = new Date().getMonth()
const lastDate = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate()
const firstDate = new Date(new Date().getFullYear(), monthIndex,1).getDay()

const months=["Janeiro", "Fevereiro", "Março",  "Abril",  "Maio",
"Junho","Julho","Agosto", "Setembro",
"Outubro", "Novembro", "Dezembro"]

const days=["Domingo","Segunda","Terça",
"Quarta","Quinta","Sexta","Sábado"]

monthEl.innerText= months[monthIndex]

const newDate=new Date()

fullDateEl.innerText= days[newDate.getDay()] + ", " + newDate.getDate() + " " + months[newDate.getMonth()] + " " + newDate.getFullYear();

let dates="";

for(i=firstDate; i>0; i--){
    dates += `<div class="empty"></div>`
}

for(i=l; i<=lastDate; i++){
    if(i === new Date().getDate()){
        dates += `<div class="today">${i}</div>`
    }else{
        dates += `<div>${i}</div>`
    }
}

datesEl.innerHTML = dates
