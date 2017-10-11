(function($) {
    $(document).ready(function() {
        var grid = $("div.grid.grid-12"),
            link = $("nav a[href^='http']"),
            inputs = $("input:checkbox[checked!='checked'], input:radio[checked!='checked']"),
            paragraf = $("div#text p:not(:has('*')):first"),
            pagination = $(".pagination-item:not('span')");

            grid.addClass("border-on");
            link.addClass("border-on");
            inputs.parent().addClass("border-on");
            paragraf.addClass("border-on");
            pagination.addClass("border-on");
    });
})(jQuery);