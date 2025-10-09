 
import { renderMenu } from "../utils/renderMenu.js";

export function renderPortfolio() {
  /* html */
  return `
    <h1>Portfolio</h1>
    ${renderMenu()}
    <p>Initial template from my teacher</p>
    <p>Spent a little over a week worth of school time on this project</p>
    <p>semi worked with Jayden Conde to fix minor issues</p>
  <section>
      <h2>See All My Code</h2>
      <p>
        You can view all the code for this website on my 
        <a href="https://github.com/IACS-CS/apcsp-portfolio-MJ-2009" target="_blank" class="button">GitHub Repository</a>
      </p>
    </section>
  `;
}