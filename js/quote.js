/**
 * Created by david on 14/05/2016.
 */

$(document).ready(function () {
    $('.blockquote').each(function () {
        var openQuote = $('<i class="fa fa-quote-left">');
        var closeQuote = $('<i class="fa fa-quote-right">');
        $(this).prepend(openQuote).append(closeQuote);
    })
});