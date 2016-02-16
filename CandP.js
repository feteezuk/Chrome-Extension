function copySelectionText(){
	var copysuccess // var to check whether execCommand successfully executed
	try{
		copysuccess = document.execCommand("copy") // run command to copy selected text to clipboard
	} catch(e){
		copysuccess = false
	}
	return copysuccess
}
		
function selectElementText(el){
	var range = document.createRange() // create new range object
	range.selectNodeContents(el) // set range to encompass desired element text
	var selection = window.getSelection() // get Selection object from currently user selected text
	selection.removeAllRanges() // unselect any user selected text (if any)
	selection.addRange(range) // add range to Selection object to select it
}
		
	var motivatebox = document.getElementById('motivatebox')

	
motivatebox.addEventListener('dblclick', function(e){
	var e = e || event // equalize event object between modern and older IE browsers
	var target = e.target || e.srcElement // get target element mouse is over
	if (target.className == 'motivate'){
		selectElementText(target) // select the element's text we wish to read
		var copysuccess = copySelectionText()
		if (copysuccess){
			showtooltip(e)
		}
	}
}, false)