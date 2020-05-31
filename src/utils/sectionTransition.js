export const sectionTransition = () => {
  let currentIndex = 0
  let sections = document.querySelectorAll(".section")

  window.addEventListener("wheel", function(event) {
    if (event.deltaY < 0) {
      // Mouse wheel up
      --currentIndex

      if (currentIndex === 0) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      } else if (currentIndex > 0) {
        scrollTo()
      }
    } else if (event.deltaY > 0) {
      // Mouse wheel down

      ++currentIndex

      if (currentIndex <= sections.length - 1) {
        scrollTo()
      }
    }
  })

  const scrollTo = () => {
    let rect = sections[currentIndex].getBoundingClientRect()
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop

    window.scrollTo({
      top: rect.top + scrollTop,
      behavior: "smooth",
    })
  }
}
