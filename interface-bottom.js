// INTERFACE BOTTOM
const interfaceFoot = document.getElementById('interface-foot');
const developerContact = document.getElementById('developer-contact');
const showInterfaceBottom = (data) => {
    interfaceFoot.innerHTML = `
    <h4> Source : <a href = '${data[0].sourceUrls}' target="_blank">Dictionary Link</a></h4>
    <h4>API Credit : <a href = 'https://dictionaryapi.dev/' target="_blank">dictionaryapi.dev</a></h4>
    
    `;
    developerContact.innerHTML = `
    <h5>Prepared By <span><a href = 'https://t.me/B42AE02' target="_blank">NISHAT</a></span></h5>
    `; 
}