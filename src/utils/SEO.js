export const SEO = () => {
  document.title = "My portfolio"
  document.querySelector("html").setAttribute("lang", "en")
  let meta = document.createElement("meta")
  meta.setAttribute("name", "Description")
  meta.setAttribute("content", "This is my description")
  document.querySelector("head").appendChild(meta)
}
