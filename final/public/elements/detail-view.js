class DetailViewElement extends HTMLElement {
  static get observedAttributes() {
    return ['path'];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr !== 'path' || !newValue) {
      return;
    }

    this.innerHTML = '';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `/data${newValue}.json`);
    xhr.addEventListener('load', () => this.renderItems(JSON.parse(xhr.responseText)));
    xhr.addEventListener('error', () => this.showNetworkError());
    xhr.send();
  }

  renderItems(item) {
    this.innerHTML = `
      <img src="${item.imageUrl}">
      <a href="/" class="close-btn">&times;</a>
      <div>
        <h1>${item.name}</h1>
        <p>${item.description}</p>
      </div>`;
  }

  showNetworkError() {
    this.innerHTML = `
      <a href="/" class="close-btn">&times;</a>
      <p class="error">No network connection</p>`;
  }
}

customElements.define('detail-view', DetailViewElement);
