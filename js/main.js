(function() {
    var app = new Vue({
        el: '#app',
        data: {
            showWindow: false
        },
        methods: {
            closePopup: function(e) {
                let el = e.target;
                console.dir(e);
                let inside = el.closest('#impressum') || el.closest('#impressum_btn');
                if (!inside) {
                    this.showWindow = false;
                }
            }
        }
    });

    // проверяем поддержку
    if (!Element.prototype.closest) {

        // реализуем
        Element.prototype.closest = function(css) {
            var node = this;

            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }

    if (!Element.prototype.matches) {

        // определяем свойство
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;

    }
})();