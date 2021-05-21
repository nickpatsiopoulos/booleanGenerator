let transformButton = document.getElementById('transform');
let clearButton = document.getElementById('clear');
let copyButton = document.getElementById('copy');
let output = document.getElementById('boolOutput');
let input = document.getElementById('textEntry');
let copyInput = document.getElementById('just_for_copy');
let numInput = document.getElementById('splitNum');

function captureText(){
  let finalArr=[];
  let txt = input.value.trim();
  let stringLen = numInput.value;

  let textArr = txt.split(' ');
  while (textArr.length>0) {
      let newArr=[];
      newArr = textArr.splice(0, stringLen);
      finalArr.push(newArr.join(' '));     
  }
  let finalText = finalArr.join('" AND "');
  finalText = ('"' + finalText + '"');
  
  output.innerHTML = finalText;
}

function clearText(){
  input.value = '';
  output.innerHTML = '';
}

function copyToClip(){
  copyInput.value = output.innerHTML;
  let justForCopy = copyInput;
  justForCopy.select();
  document.execCommand('copy');
}

transformButton.onclick = captureText;
clearButton.onclick = clearText;
copyButton.onclick = copyToClip;