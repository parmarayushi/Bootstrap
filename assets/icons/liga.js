/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'home3': '&#xe902;',
            'house3': '&#xe902;',
            'library2': '&#xe921;',
            'bank': '&#xe921;',
            'cart': '&#xe93a;',
            'purchase': '&#xe93a;',
            'coin-dollar': '&#xe93b;',
            'money': '&#xe93b;',
            'credit-card': '&#xe93f;',
            'money5': '&#xe93f;',
            'compass2': '&#xe94a;',
            'direction2': '&#xe94a;',
            'user': '&#xe971;',
            'profile2': '&#xe971;',
            'search': '&#xe986;',
            'magnifier': '&#xe986;',
            'equalizer': '&#xe992;',
            'sliders': '&#xe992;',
            'cog': '&#xe994;',
            'gear': '&#xe994;',
            'pie-chart': '&#xe99a;',
            'stats': '&#xe99a;',
            'stats-bars': '&#xe99c;',
            'stats3': '&#xe99c;',
            'stats-bars2': '&#xe99d;',
            'stats4': '&#xe99d;',
            'trophy': '&#xe99e;',
            'cup': '&#xe99e;',
            'eye': '&#xe9ce;',
            'views': '&#xe9ce;',
            'arrow-up-right2': '&#xea3b;',
            'up-right2': '&#xea3b;',
            'arrow-down-right2': '&#xea3d;',
            'down-right2': '&#xea3d;',
            'radio-checked': '&#xea54;',
            'radio-button': '&#xea54;',
            'svg': '&#xeae9;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
