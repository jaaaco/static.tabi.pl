$(document).ready(function(){
    // skrypt do rela
    $("a[rel='external']")
        .addClass("external")
        .click(function() {
            var href = $(this).attr('href');
            
            var prefix1 = "http://";
            var prefix2 = "https://";
            var new_href = href;
            if ((href.search(prefix1) == -1)&&(href.search(prefix2) == -1)) {
                new_href = prefix1 + href;
            }
            
            window.open(new_href);
            return false;
        })
});