(function(root) {

    var bench = root.benchrunner,
        suites = bench.suites,
        libs = bench.libs;

    var jQueryEl,
        ZeptoEl,
        EvergreenEl;

    bench.setup.push(function() {
        document.getElementById('container').innerHTML +=
            '<div class="simple"></div>' +
            '<div class="a" style="display:none"><div class="b"><div class="c"><div><article><section data-foo=""><div><ul><li></li><li></li></ul></div></section><section data-foo=""><div><ul><li></li><li></li></ul></div></section></article></div></div><div class="c"><div><article><section data-foo=""><div><ul><li></li><li></li></ul></div></section><section data-foo=""><div><ul><li></li><li></li></ul></div></section></article></div></div><div class="c"><div><article><section data-foo=""><div><ul><li></li><li></li></ul></div></section><section data-foo=""><div><ul><li></li><li></li></ul></div></section></article></div></div></div></div>';

        jQueryEl = jQuery('#container');
        ZeptoEl = Zepto('#container');
        EvergreenEl = $('#container');
    });

    suites.push(Benchmark.Suite('Simple selector')
        .add(libs[0].name, function() {
            jQueryEl.find('.simple');
        })
        .add(libs[1].name, function() {
            ZeptoEl.find('.simple');
        })
        .add(libs[2].name, function() {
            EvergreenEl.find('.simple');
        })
    );

    suites.push(Benchmark.Suite('Complex selector')
        .add(libs[0].name, function() {
            jQueryEl.find('.a .b > .c + .c article > [data-foo] ul > li:first-child');
        })
        .add(libs[1].name, function() {
            ZeptoEl.find('.a .b > .c + .c article > [data-foo] ul > li:first-child');
        })
        .add(libs[2].name, function() {
            EvergreenEl.find('.a .b > .c + .c article > [data-foo] ul > li:first-child');
        })
    );

}(typeof global == 'object' && global || this));
