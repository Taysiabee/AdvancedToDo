let newItem = document.querySelector('.new-item')
let addItem = document.querySelector('.add-item')
let todo = document.querySelector('.todo') 
let clear =   document.querySelector('.clear-finished')
let total = document.querySelector('.total')
let done = document.querySelector('.done')
let fuckIt = document.querySelector('.fuck-it')


let addTheThing = function() {

	if (!newItem.value) return


	let li = document.createElement('li')
	li.innerText = newItem.value
	todo.appendChild( li )

	let checkedOffButton = document.createElement("button")
	li.appendChild(checkedOffButton)
	checkedOffButton.innerText ="check-offf"
	// checkedOffButton.style.backgroundColor = "green"
	// checkedOffButton.style.border = "green"
	// checkedOffButton.style.width = "20px"
	// checkedOffButton.style.height = "20px"
	// checkedOffButton.style.opacity = ".6"
	// checkedOffButton.style.transition = "all .12s, border-color .08s"			

//when clicked
	checkedOffButton.addEventListener('click', function(){
		checkedOffButton.classList.toggle('back')
		li.classList.toggle('finished')
			doTheCounting()
		
	})

	clear.addEventListener('click', function(){
		if (li.classList.contains('finished')) {
	    	li.remove()
	    	doTheCounting()
			
	  	}
	})

	fuckIt.addEventListener('click', function(){
		li.remove()
		doTheCounting()
	})
}





addItem.addEventListener('click', function(){
// do other stuff
	addTheThing()
	doTheCounting()
	newItem.value = ""
})


newItem.addEventListener('keyup', function (event) {
	if (event.code === 'Enter') {
		console.log('enter')
		addTheThing()
		doTheCounting()
		newItem.value = ""	
	}

})


let doTheCounting = function() {
	total.innerHTML = document.querySelectorAll('li').length

	total.innerHTML = document.querySelectorAll('li:not(.finished)').length
	done.innerHTML = document.querySelectorAll('li.finished').length
}


