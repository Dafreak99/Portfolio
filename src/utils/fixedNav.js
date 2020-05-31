export const fixedNav = () => {
  window.addEventListener("scroll", () => {
    let nav = document.querySelector(".hero-section__navigation")
    let content = document.querySelector(".hero-section__content")
    if (window.pageYOffset > 200) {
      nav.classList.add("active")
      content.classList.add("active")
    } else {
      nav.classList.remove("active")
      content.classList.remove("active")
    }
  })
}
