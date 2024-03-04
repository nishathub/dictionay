// INTERFACE TOP
const interfaceTop = document.getElementById('interface-head');
const showInterfaceTop = (data) => {
    const audioSources = getExistingSources(data[0].phonetics, data[1]?.phonetics);
    interfaceTop.innerHTML = `
    <div id= 'left'>
    <h2>${data[0].word}</h2>
    <h4>${data[0].phonetic ? data[0].phonetic : ''}</h4>
    </div>
    <div id= 'right'>
    <audio id = 'pronunciation' controls>
    ${audioSources}
    Sound not available
    </audio>     
    <button ${audioSources ? '' : 'style = "display: none;"'} id= 'play-button' onclick = pronounceWord()>&#9654;</button>
    </div>
    `;
}

const getExistingSources = (source1, source2) => {
    let sources = '';
    source1.forEach(item => {
        if (item && item.audio) {
            sources += `<source src="${item.audio}" type="audio/mpeg">`;
        }
    });
    if (source2 && source2.length > 0) { // whether s2 exist and length is greater than 0
        source2.forEach(item => {
            if (item && item.audio) { // whether item exist and item.audio exist
                // sources += `<source src="${item.audio}" type="audio/mpeg">`;
                // console.log(sources);

            }
        });
    }
    return sources;
}

