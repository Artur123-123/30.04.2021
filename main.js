function sentence1() {
    const sent1 = document.getElementById('sent1').value
    console.log(sent1)
}

function sentence2() {
    const sent2 = document.getElementById('sent2').value
    console.log(sent2)
}

function zero(){
    const sent1 = document.getElementById('sent1').value
    const sent2 = document.getElementById('sent2').value
    if(sent1.length === 0 || sent2.length === 0) {
        alert("Nie podałeś wartości")
    } else
    console.log(sent1 + sent2)
}

function table(){
    const inp = document.querySelectorAll('|type=text|')
    console.log(inp)
    for()
}