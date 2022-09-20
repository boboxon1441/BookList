window.addEventListener('DOMContentLoaded', ()=>{
    const title = document.querySelector('#title'),
			author = document.querySelector('#author'),
			year = document.querySelector('#year'),
			btn = document.querySelector('.btn'),
			bookList = document.querySelector('#book-list');

		btn.addEventListener('click',(event)=>{
			event.preventDefault()

			//Basic validation
			if(title.value == '' && author.value == '' && year.value == ''){
				alert('Iltimos matn kiriting')
			}else{
				const newRow = document.createElement('tr')


				//Create new Title
				const newTitle = document.createElement('th')
				newTitle.innerHTML = title.value
				newRow.appendChild(newTitle)


					// Create new Author
				const newAuthor = document.createElement('th')
				newAuthor.innerHTML = author.value
				newRow.appendChild(newAuthor)

				//Create new Year
				const dataYear = document.createElement('th')
				dataYear.innerHTML = year.value
				newRow.appendChild(dataYear)

				//Display in UI
				bookList.appendChild(newRow)

				title.value = ''
				year.value = ''
				author.value = ''
			}
		})
		
		
})

