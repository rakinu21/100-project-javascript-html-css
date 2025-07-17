const copyTextArea = document.querySelector('textarea[name=copyText]');
const finalTextArea = document.querySelector('textarea[name=finalText]');
const moveBtn = document.querySelector('.movebtn');
const copyBtn = document.querySelector('.copybtn');
const output = document.querySelector('.output')



copyBtn.addEventListener('click',()=>{
    let temp = copyTextArea.value;
    copyToClip(temp)
})

moveBtn.addEventListener('click',()=>{
    let temp = copyTextArea.value;
    finalTextArea.value = temp;
})


copyTextArea.addEventListener('click',()=> this.select())
finalTextArea.addEventListener('click',()=> this.select())


function copyToClip (str){

    const outputContainer = document.querySelector('.container-output');
    const textarea = document.createElement('textarea');
    textarea.value = str;
    outputContainer.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    outputContainer.removeChild(textarea)
    output.innerHTML = `<h3>content copy</h3>`
    output.classList.add('added')

    setTimeout(()=>{
        output.classList.toggle('added');
        output.textContent = ''

    },2000)
}

