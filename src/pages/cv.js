import React from "react"
import cv from "../images/CV.pdf"
import { Document, Page } from "react-pdf"

const cvPage = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My CV</h1>
      <div
        className="cv__button-wrapper"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <a href="#" class="btn source" style={{ margin: 0 }}>
          Download
        </a>
      </div>
      <Document file={cv}>
        <Page pageNumber={1} renderMode="svg" width={900} />
      </Document>
    </div>
  )
}

export default cvPage
