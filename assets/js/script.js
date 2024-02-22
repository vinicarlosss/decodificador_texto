function verifyString(string){
    let regex = /([áàãâéèêíìóòõôúùũû])|([A-Z])|([ÁÀÃÂÉÈÊÍÌÓÒÕÔÚÙŨÛ])|([^\w\s])|([0-9])/;
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

function encrypt(){
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

function deecrypt(){
    let text = document.getElementsByClassName("main_section--content_div--output--text_p")[0].innerHTML;
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

let encryptbutton = document.getElementById("encrypt_button");
let decryptbutton = document.getElementById("decrypt_button");

encryptbutton.addEventListener('click', encrypt);
decryptbutton.addEventListener('click', deecrypt);