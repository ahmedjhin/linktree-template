const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

function copyText(e) {
    e.preventDefault()
    
}

shareButtons.forEach( shareButton => shareButton.addEventListener('click', copyText))