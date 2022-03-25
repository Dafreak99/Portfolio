import React from "react"

function Filter() {
  const onClick = e => {
    let prevActive = document.querySelector(".projects__filter-link.active")
    prevActive.classList.remove("active")
    e.target.classList.add("active")
  }

  return (
    <div className="projects__filter">
      <ul className="projects__filter-list">
        <li>
          <a
            className="projects__filter-link "
            onClick={onClick}
            data-filter="*"
            href="#"
          >
            All
          </a>
        </li>
        <li>
          <a
            className="projects__filter-link active"
            onClick={onClick}
            data-filter=".react"
            href="#"
          >
            React
          </a>
        </li>
        <li>
          <a
            className="projects__filter-link"
            onClick={onClick}
            data-filter=".plain"
            href="#"
          >
            Plain
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Filter
