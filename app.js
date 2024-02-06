//Function to get all elments by tag used to get all buttons
function getElment(tag){
    let elm = document.getElementsByTagName(tag);
    return elm;
}
// My links to be used with when the button is clicked 
mySocialLinks = {
    "github":"https://github.com/Davidlinkcoil",
    "frontend mentor":"https://www.frontendmentor.io/profile/Davidlinkcoil",
    "linkedin":"https://www.linkedin.com/in/david-davarashvily-7538a51b8/",
    "tryhackme":"https://tryhackme.com/p/David.Divad",
    "microsoft learn" : "https://learn.microsoft.com/en-us/users/daviddavarashvily-9705/",
    "website":"https://l-ink.co.il"
}
//Getting the buttons 
const buttons = getElment('button');
//Adding the listtner to the buttois 
for (const btn of buttons){
    btn.addEventListener('click',(e)=>{
        console.log(e);
        window.open(mySocialLinks[btn.innerText.toLowerCase()]);
    });
}

