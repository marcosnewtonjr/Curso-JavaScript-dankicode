var lastIndex = 0
var images = document.querySelectorAll('.container img')

images.forEach((item,index) => {
    document.querySelectorAll('.seletor')[index].addEventListener('click', () => {
        let lastImage = document.querySelectorAll('.container img')[lastIndex]
        let actualImage = document.querySelectorAll('.container img')[index]

        document.querySelectorAll('.seletor')[lastIndex].classList.remove('active')

       document.querySelectorAll('.seletor')[index].classList.add('active')

        lastImage.style.opacity = 0
        actualImage.style.opacity = 1

        lastIndex = index
    })
})