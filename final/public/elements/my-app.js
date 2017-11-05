class MyAppElement extends HTMLElement {
  connectedCallback() {
    this.addEventListener('click', this.clickHandler);
    window.addEventListener('popstate', this.updateVisiblePage.bind(this));
    this.updateVisiblePage();
  }

  updateVisiblePage() {
    if (window.location.pathname.match('^/detail')) {
      this.loadElement('detail-view');
      document.body.classList.add('detail-view-active');
      console.log(window.location.pathname);
      this.querySelector('detail-view').setAttribute('path', window.location.pathname);
    } else {
      this.loadElement('list-view');
      document.body.classList.remove('detail-view-active');
    }
  }

  clickHandler(event) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey) {
      return;
    }

    let element = event.target;
    while (element !== this) {
      if (element.tagName === 'A') {
        event.preventDefault();
        window.history.pushState(null, '', element.href);
        this.updateVisiblePage();
        return;
      }
      element = element.parentNode;
    }
  }

  constructor() {
    super();
    this.loadElements = {};
  }

  loadElement(element){
    if(this.loadElements[element]){
      return;
    }

    const script = document.createElement("script");
    script.src = `/elements/${element}.js`;
    document.head.appendChild(script);
    this.loadElements[element] = script;
  }

}

customElements.define('my-app', MyAppElement);
