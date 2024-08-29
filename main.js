class GlobalHeader extends HTMLElement {
    constructor() {
        super();
        console.info( 'constructed' );
    }
    connectedCallback() {
        console.info( 'connected' );

        let self = this;
        $.get("pages/nav.html", function(data) {
            let context = $(data).find("#navBar").html();
            self.innerHTML = data;
        });
    }
}

customElements.define('global-header', GlobalHeader)