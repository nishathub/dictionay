const searchBox = document.getElementById('search-box');
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const dictionaryInterface = document.getElementById('dictionary-interface');
const errorMessageDisplay = document.getElementById('error-message');
const loaderMessageDisplay = document.getElementById('loader-message');

const runDictionary = async (word) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    loaderMessageDisplay.style.display = 'block'; // showing while data loading
    try {
        errorMessageDisplay.innerText = '';
        const res = await fetch(url);
        if(!res.ok){
            if(res.status === 404){
                errorMessageDisplay.innerText = `"${word}" Not Found`;
            } else {
                errorMessageDisplay.innerText = `Error Retrieving Data From Dictionary API`;
            }
            loaderMessageDisplay.style.display = 'none'; // hide if error
            return;
        }
        const data = await res.json();
        showInterfaceTop(data);        
        showInterfaceMiddle(data);                
        showInterfaceBottom(data);                
    } catch (error) {
        console.log( error);
        errorMessageDisplay.innerText = `Network Error or unable to connect to the Dictionary API`;
        loaderMessageDisplay.style.display = 'none'; // hide if error 

    }
    loaderMessageDisplay.style.display = 'none'; // hide while data are loaded
}

let pseudoLabel = document.createElement('div'); // show up while search input value character > 2

searchButton.addEventListener('click', function(){
    const searchWord = searchInput.value;
    if(searchWord === ''){
        alert("Type a word");
    } else {
        runDictionary(searchWord);
    }
    searchInput.value = ''; // clear search input
    pseudoLabel.innerText = ''; // clear pseudo label
})

const pronounceWord = () => {
    const audio = document.getElementById('pronunciation');
    audio.play();
}

window.onload = function(){
    
    runDictionary('search'); // initial search word is 'search'
    searchInput.focus(); // set onfocus on the search box
}

// STYLE FOR INPUT FIELD
// let pseudoLabel = document.createElement('div'); // declared earlier
searchInput.addEventListener('input', function(){
    pseudoLabel.innerHTML = '';
    if (searchInput.value.length > 2){
        searchBox.classList.add('label');
        pseudoLabel.classList.add('pseudo-label');
        pseudoLabel.innerHTML = `
        <p id = 'label-message'>typing..</p>
        `;
        searchBox.appendChild(pseudoLabel);
        pseudoLabel.style.display = 'block';
    } else {
        // searchBox.classList.remove('label');
        // pseudoLabel.style.display = 'none';
        // searchBox.removeChild(pseudoLabel); No Need of these code anymore
    }
})
