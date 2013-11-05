var requirejs = {
    paths: {
        q: "components/q/q",
        text : "components/requirejs-text/text",
        ready: "components/requirejs-domready/domReady"
    },

    config: {
        text: {
            useXhr: function (url, protocol, hostname, port) {
                return true;
            }
        }
    }
};
