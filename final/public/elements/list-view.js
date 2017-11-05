class ListViewElement extends HTMLElement {
  connectedCallback(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/data/list.json");
    xhr.addEventListener("load", () => this.renderItems(JSON.parse(xhr.responseText)));
    xhr.addEventListener('error', () => this.showNetworkError());
    xhr.send();
  }

  renderItems(items) {
    this.innerHTML = items.reduce((a, item) => a + `
      <a href="/detail/${item.id}">
        <img src="${item.imageUrl}" alt="${item.name}" />
        <div>${item.name}</div>
      </a>`, '');
  }

  showNetworkError(){
    this.innerHTML = `
      <a href="/" class="close-btn">&times;</a>
      <p class="error">No network connection</p>`;
  }

}

customElements.define('list-view', ListViewElement);