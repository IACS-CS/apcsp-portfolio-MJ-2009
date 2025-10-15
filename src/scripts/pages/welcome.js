// src/scripts/pages/welcome.js
import { renderMenu } from "../utils/renderMenu.js";

export function renderWelcome() {
  /* html */
  return `
    <!-- code generated in welcome.js -->
    <h1>Masons APCSP Portfolio</h1>
    <!-- make cicle where I put my picture and add about me --->
    <div class="profile-section">
      <img src="/Mepic.jpg" alt="Picture of Mason" style="width:200px;height:200px;border-radius:100%;">
      <div class="profile-text">
        <h2>About Me</h2>
        <p>I am Mason, a junior at Innovation Academy Charter School.</p>
      </div>
    </div>
  </div>
    <!-- co polilot helped me with this img tag and text block--->
    <!-- an example image: Notice that images live in public/ -->

    <div class="text-center">
<h2>Welcome to my AP Computer Science Portfolio!</h2>
</div>
<div class="text-center">
  ${renderMenu()}
</div>
  `;
}
