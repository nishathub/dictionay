// INTERFACE MIDDLE
const interfaceMiddle = document.getElementById('interface-middle');
const showInterfaceMiddle = (data) =>{
    interfaceMiddle.innerHTML = '';
    data.forEach(word => { // we possibly have multiple words inside data

        word.meanings.forEach(item =>{ // we may have multiple items inside a word
            
        let partOfSpeech = document.createElement('h4');
        let definitionHead = document.createElement('h5');
        let definitionListBox = document.createElement('ul');
        let exampleHead = document.createElement('h5');
        let exampleListBox = document.createElement('ul');
        let synonymHead = document.createElement('h5');
        let synonymList = document.createElement('ul');
        let antonymHead = document.createElement('h5');
        let antonymList = document.createElement('ul');

        synonymList.classList.add('synonym-list');
        antonymList.classList.add('antonym-list');
        definitionListBox.classList.add('definition-list');
        exampleListBox.classList.add('example-list');

        interfaceMiddle.appendChild(partOfSpeech);
        interfaceMiddle.appendChild(definitionHead);
        interfaceMiddle.appendChild(definitionListBox);
        interfaceMiddle.appendChild(exampleHead);
        interfaceMiddle.appendChild(exampleListBox);
        interfaceMiddle.appendChild(synonymHead);
        interfaceMiddle.appendChild(synonymList);
        interfaceMiddle.appendChild(antonymHead);
        interfaceMiddle.appendChild(antonymList);

        partOfSpeech.innerText = `${item.partOfSpeech}`;
        definitionHead.innerText = 'Definitions';
        exampleHead.innerText = 'Examples';
        synonymHead.innerText = 'Synonyms';
        antonymHead.innerText = 'Antonyms';
        
        let exampleFound = false; // a flag to handle example head style
        const definitions = item.definitions;
        definitions.forEach(definitionItem => {
            let definitionListItem = document.createElement('li');
            definitionListItem.innerText = definitionItem.definition;
            definitionListBox.appendChild(definitionListItem);
            
            if(definitionItem.example){ // if example exist, run
                let exampleListItem = document.createElement('li');
                exampleListItem.innerText = definitionItem.example;
                exampleListBox.appendChild(exampleListItem);
                exampleFound = true;
            }
        })
        if(exampleFound){
            exampleHead.style.display = 'block';
        } else{
            exampleHead.style.display = 'none';
        }
       
        const synonyms = item.synonyms;
        if (synonyms.length >= 1){
            synonyms.forEach(item => {
                let synonymListItem = document.createElement('li');
                synonymListItem.innerHTML = `<a href = "#" onclick = 'runDictionary("${item}");'>${item}</a>`;
                synonymList.appendChild(synonymListItem);
            })
        } else {
            synonymHead.style.display = 'none';
        }

        const antonyms = item.antonyms;
        if (antonyms.length >= 1){
            antonyms.forEach(item => {
                let antonymListItem = document.createElement('li');
                antonymListItem.innerHTML = `<a href = "#" onclick = 'runDictionary("${item}");'>${item}</a>`;
                antonymList.appendChild(antonymListItem);
            })
        } else {
            antonymHead.style.display = 'none';
        }
    })
})
        
}
