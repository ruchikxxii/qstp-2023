var title = document.querySelector(".title");

title.textContent = "";

var t = "Quark Summer Technical Projects";

function run(i){
    if(i===t.length){
        return;
    }
    setTimeout(()=> {
        title.textContent += t[i];
        run(i+1)
    },100)
}

run(0);
