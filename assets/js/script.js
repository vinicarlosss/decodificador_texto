function verifyString(string){
    let regex = /([áàãâéèêíìóòõôúùũû])|([A-Z])|([ÁÀÃÂÉÈÊÍÌÓÒÕÔÚÙŨÛ])|([^\w\s.,!?])|([0-9])/;
    if(regex.test(string)){
        Toastify({
            text: "Texto inválido!",
            duration: 3000,
            gravity: "top", 
            position: "center",
            stopOnFocus: true,
            style: {
                background: "#0A3871",
        },
            close: true 
        }).showToast();
        return true
    }
};

function encrypt(words){
    let text = document.getElementById("input").value;
    if(verifyString(text)){
        return;
    };
    text = text.replaceAll("e", "enter");
    text = text.replaceAll("i", "imes");
    text = text.replaceAll("a", "ai");
    text = text.replaceAll("o", "ober");
    text = text.replaceAll("u", "ufat");
    writeText(text);
};

function decrypt(){
    let text = document.getElementById("input").value;
    if(verifyString(text)){
        return;
    };
    text = text.replaceAll("enter", "e");
    text = text.replaceAll("imes", "i");
    text = text.replaceAll("ai", "a");
    text = text.replaceAll("ober", "o");
    text = text.replaceAll("ufat", "u");
    writeText(text);
}

function writeText(text){
    let notfountimg = document.getElementsByClassName("main_section--content_div--output_img")[0];
    let divtext = document.getElementsByClassName("main_section--content_div--output--text")[0]
    let paragraph = document.getElementsByClassName("main_section--content_div--output--text_p")[0];
    if(!text){
        notfountimg.style.visibility = "visible";
        divtext.style.visibility = 'hidden'
        return;
    };
    notfountimg.style.visibility = "hidden";
    divtext.style.visibility = 'visible'
    paragraph.innerHTML = text
    
};

function copyText(){
    let text = document.getElementsByClassName("main_section--content_div--output--text_p")[0].innerHTML;
    navigator.clipboard.writeText(text)
        .then(()=>{
            Toastify({
                text: "Texto copiado para a área de trabalho!",
                duration: 3000,
                gravity: "top", 
                position: "center",
                stopOnFocus: true,
                style: {
                    background: "#0A3871",
            },
                close: true 
            }).showToast();
        }).catch((err)=>{
            Toastify({
                text: "Erro ao copiar texto!",
                duration: 3000,
                gravity: "top", 
                position: "center",
                stopOnFocus: true,
                style: {
                    background: "#0A3871",
            },
                close: true 
            }).showToast();
        });
}

function openModal(){
    let historysection = document.getElementsByClassName("about_section");
    historysection[0].style.visibility = "visible";
    historysection[0].classList.add("opened")
    let inputsection = document.getElementsByClassName("main_section--content_div--input")[0];
    let outputsection = document.getElementsByClassName("main_section--content_div--output")[0];
    let clickstopdiv = document.getElementsByClassName("clickstop_div")[0];
    clickstopdiv.style.visibility = "visible"
    inputsection.style.filter = "blur(5px)";
    outputsection.style.filter = "blur(5px)";
}

function closeModal(){
    let historysection = document.getElementsByClassName("about_section");
    historysection[0].classList.remove("opened")
    let inputsection = document.getElementsByClassName("main_section--content_div--input")[0];
    let outputsection = document.getElementsByClassName("main_section--content_div--output")[0];
    let clickstopdiv = document.getElementsByClassName("clickstop_div")[0];
    clickstopdiv.style.visibility = "hidden";
    inputsection.style.filter = "";
    outputsection.style.filter = "";
}

let encryptbutton = document.getElementById("encrypt_button");
let decryptbutton = document.getElementById("decrypt_button");
let copybutton = document.getElementById("copy_button");
let historybutton = document.getElementsByClassName("about_button")[0];
let closebutton = document.getElementsByClassName("about_section--closebutton")[0];

encryptbutton.addEventListener("click", ()=>{
    encrypt();
});
decryptbutton.addEventListener("click", ()=>{
    decrypt();
});
copybutton.addEventListener("click", copyText);
historybutton.addEventListener("click", (event)=>{
    event.preventDefault();
    openModal();
});
closebutton.addEventListener("click", closeModal)