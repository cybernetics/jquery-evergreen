describe('selectors', function() {

    var html = '<article><section><p>foo</p><p>bar</p></section></article>';

    it('should return an empty NodeList for falsey selectors', function() {

        expect($().forEach).to.be.a('function');
        expect($().length).to.equal(0);
        expect($(null).length).to.equal(0);
        expect($('').length).to.equal(0);
        expect($(0).length).to.equal(0);
    });

    it('should return queried elements', function() {
        var elements = $('#testFragment li');
        expect(elements.length).to.equal(5);
    });

    it('should return queried elements within provided context', function() {
        var elements = $('li', document.getElementById('testFragment'));
        expect(elements.length).to.equal(5);
    });

    it('should return the provided element', function() {
        expect($(window)[0]).to.equal(window);
        expect($(document)[0]).to.equal(document);
        expect($(document.body)[0]).to.equal(document.body);
    });

    it('should create a DOM fragment from string', function() {
        var fragment = $(html);
        expect(fragment[0].outerHTML).to.equal(html);
    });

    it('should provide a chainable API', function() {
        var element = $('body').find('#testFragment').find('.two');
        expect(element[0]).to.equal($('.two')[0]);
    });

});
