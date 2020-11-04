export const fixedNav = () => {
  const nav = document.querySelector(".hero-section__navigation")
  const content = document.querySelector(".hero-section__content")

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
      nav.classList.add("active")
      content.classList.add("active")
    } else {
      nav.classList.remove("active")
      content.classList.remove("active")
    }
  })
}
