function clickButton() {
    console.log(`Hello world!`);
    const mytext = document.getElementById("mytext");
    mytext.innerHTML = `It worked! Woohoo!`;

    mytext.className = `myclass`; 
    
    //const mybutton = document.getElementById("mybutton");
    //document.removeChild(mybutton);

    const bgcolor = document.getElementById("bgcolor");

    const body = document.body;

    body.style.backgroundColor = bgcolor.value;
}