// src/scripts/pages/binarySearch.js
import { renderMenu } from "../utils/renderMenu.js";
import { renderIframe } from "../utils/renderIframe.js";

export function renderBinarySearch() {
  /* html */
  return `
    <!-- code generated in binarySearch.js -->
    <h1>Binary Search Project</h1>    
    ${renderMenu()}
    <article>
      <p>Assignment: Create a program built on the concept of binary search</p>
      <hr>
      <p>In this Project Me and Jayden worked together to creat a program that would guess your character out of a list of 49 characters </p>
      ${renderIframe(
        "https://iacs-cs.github.io/binary-search-jayden-and-mason/",
        "My Project Title"
      )}
    </article>
    <!-- end code generated in binarySearch.js -->
  `;
}
