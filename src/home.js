export default function loadHome() {
    const content = document.getElementById('content');
    const homeDiv = document.createElement('div');
    homeDiv.innerHTML = `
      <h1>Welcome to My Restaurant!</h1>
      <p>Enjoy the best dishes in town.</p>
    `;
    content.appendChild(homeDiv);
  }
  