const inputText = document.getElementById('inputText');
const generateBtn = document.getElementById('generateBtn');
const qrCode = document.getElementById('qrCode');
const downloadBtn = document.getElementById('downloadBtn');

//even the husband for the query of the department onto a pri
generateBtn.addEventListener('click', () => {
  const text = inputText.value.trim();
  qrCode.innerHTML='';
  if (text === '') return;
  new QRCode(qrCode, {
    text: text,
    width:80%,
    height:80%,
  });

  downloadBtn.style.display = 'block';
downloadBtn.addEventListener('click', ()=>{
    let img = document.querySelector('#qrCode img');
    if(img !== null){
      let imgAtrr = img.getAttribute('src');
      downloadBtn.setAttribute("href", imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
        // if nothing can be found then it generates a blank rectangle canvas
    }
});
});
