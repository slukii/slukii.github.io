//variaveis
const dots = document.querySelectorAll(".li-dot")
const taskText = document.querySelector(".task")
const nameText = document.querySelector(".name")
const paragrapherText = document.querySelector(".p-text")
const imageCrew = document.querySelector(".image-modify")

//função unica para refatorar

dots.forEach(function(btn){
    btn.onclick = (e) => {
        for(i=0;i<dots.length;i++){
            dots[i].classList.contains("selected") ? dots[i].classList.remove("selected") : ""
        }
        e.target.classList.add("selected")
        
        //troca de texto e imagem a medida que for alterando os dots
        if(e.target.classList.contains("dot-01")){
            taskText.innerText = "Commander"
            nameText.innerText = "Douglas Hurley"
            paragrapherText.innerText = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
            imageCrew.src = "../../assets/crew/image-douglas-hurley.png"

        }else if(e.target.classList.contains("dot-02")){
            taskText.innerText = "Mission Specialist"
            nameText.innerText = "Mark Shuttleworth"
            paragrapherText.innerText = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
            imageCrew.src = "../../assets/crew/image-mark-shuttleworth.png"

        }else if(e.target.classList.contains("dot-03")){
            taskText.innerText = "Pilot"
            nameText.innerText = "Victor Glover"
            paragrapherText.innerText = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
            imageCrew.src = "../../assets/crew/image-victor-glover.png"

        }else if(e.target.classList.contains("dot-04")){
            taskText.innerText = "Flight Engineer"
            nameText.innerText = "Anousheh Ansari"
            paragrapherText.innerText = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
            imageCrew.src = "../../assets/crew/image-anousheh-ansari.png"
        }
    }
})