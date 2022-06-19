//variaveis
const circles = document.querySelectorAll(".circle")
const object = document.querySelector(".object-vehicle")
const textModify = document.querySelector(".paragraph-text")
const imageTechnology = document.querySelector(".image-technology") 

circles.forEach(function(btn){
    btn.onclick = (e) => {
        for(i=0;i<circles.length;i++){
            circles[i].classList.contains("selected") ? circles[i].classList.remove("selected") : ""
        }
        e.target.classList.add("selected")
        
        //troca de texto e imagem a medida que for alterando os dots
        if(e.target.classList.contains("circle-01")){
            object.innerText = "Launch vehicle"
            textModify.innerText = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
            imageTechnology.src = "../../assets/technology/image-launch-vehicle-portrait.jpg"

        }else if(e.target.classList.contains("circle-02")){
            object.innerText = "Spaceport"
            textModify.innerText = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
            imageTechnology.src = "../../assets/technology/image-spaceport-portrait.jpg"

        }else if(e.target.classList.contains("circle-03")){
            object.innerText = "Space capsule"
            textModify.innerText = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
            imageTechnology.src = "../../assets/technology/image-space-capsule-portrait.jpg"

        }
    }
})
