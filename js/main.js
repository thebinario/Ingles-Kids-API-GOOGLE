var array = [
    sapo = './pages/animais/sapo/page_sapo.html',
    macaco = './pages/animais/macaco/page_macaco.html',
    macaco = './pages/animais/borboleta/page_borboleta.html'
];

var srcAtual = document.querySelector('iframe');

var i = 0;
document.querySelector('button#prox').disabled = true;
document.querySelector('button#prox').hidden = true
document.querySelector('button#volt').disabled = true;
document.querySelector('button#volt').hidden = true
document.querySelector('iframe').hidden = true;
document.querySelector("div.container").style="border: 1px solid #fff";

function playGame() {
    srcAtual.src = array[i];
    document.querySelector('button').hidden = true
    document.querySelector('button#prox').disabled = false;
    document.querySelector('button#prox').hidden = false;
    document.querySelector('button#volt').hidden = false;
    document.querySelector('iframe').hidden = false;
    document.querySelector("div.container").style="border: 3px solid #00f; border-radius: 25px;";

}
function bt_control(p) {

    if (p == '1') {
        i++;   
        document.querySelector('button#volt').disabled = false;
        if(i == array.length -1){
            document.querySelector('button#prox').disabled = true
        }
    }else if(p == '-1'){
        i--;
        document.querySelector('button#prox').disabled = false;
        if(i == 0){
            document.querySelector('button#volt').disabled = true;
        }

    }else{
        i=0;
    }
    srcAtual.src = array[i];
    console.log(i);
}