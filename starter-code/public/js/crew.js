//objeto que vai ser utilizado para preencher as informações no front.
var crewText = {
    task:'',
    name:'',
    text:''
}

//variaveis
const dots = document.querySelectorAll(".li-dot")
const taskText = document.querySelector(".task")
const nameText = document.querySelector(".name")
const paragrapherText = document.querySelector(".p-text")

console.log(dots)
console.log(taskText)
console.log(nameText)
console.log(paragrapherText) 

//função unica para refatorar

dots.forEach(function(btn){
    btn.onclick = (e) => {
        for(i=0;i<dots.length;i++){
            dots[i].classList.contains("selected") ? dots[i].classList.remove("selected") : ""
        }
        e.target.classList.add("selected")
    }
})