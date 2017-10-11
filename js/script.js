(function($) {
    $(document).ready(function() {
        var grid = $("div.grid.grid-12"),
            link = $("nav a[href^='http']"),
            paragraf = $("div#text p:not(:has('*')):first");
        console.log(paragraf.length);
        paragraf.fadeTo( 1500, 0.3 );
    });
})(jQuery);