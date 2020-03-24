import Isotope from "isotope-layout"

const setUpFilter = () => {
  if (typeof window !== `undefined`) {
    var btns = document.querySelectorAll(".projects__filter-link")

    let grid = document.querySelector(".showcase")

    var iso = new Isotope(grid, {
      itemSelector: ".showcase__project",
      // TODO: Learn how to build responsive isotope
    })

    btns.forEach(btn =>
      btn.addEventListener("click", e => {
        e.preventDefault()
        let className = e.target.getAttribute("data-filter")

        iso.arrange({ filter: className })
      })
    )
  }
}

export default setUpFilter
