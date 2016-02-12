$(document).ready(function () {

    var start = $('#start');
    var fail = $('#fail');
    var success = $('#success');
    var easteregg = $('#lamborghini');
    var a = $('#a');
    var b = $('#b');
    var c = $('#c');
    var cSpecial = $('#cSpecial');
    var d = $('#d');

    // register onclick handler
    $('#btnStart').click(function () {
        start.hide();
        a.show();
    });

    $('#btnNoEnglish').click(function () {
        start.hide();
        fail.show();
    });

    $('#btnFacebook').click(function () {
        a.hide();
        fail.show();
    });

    $('#btnPlan').click(function () {
        a.hide();
        b.show();
    });

    $('#btnCodeYes').click(function () {
        b.hide();
        c.show();
    });

    $('#btnCodeNo').click(function () {
        b.hide();
        cSpecial.show();
    });

    $('#btnCoFounder').click(function () {
        c.hide();
        d.show();
    });

    $('#btnCoFounderWithoutShare').click(function () {
        c.hide();
        fail.show();
    });

    $('#btnCoFounderS').click(function () {
        cSpecial.hide();
        d.show();
    });

    $('#btnCoFounderWithoutShareS').click(function () {
        cSpecial.hide();
        fail.show();
    });

    $('#btnMarketing').click(function () {
        d.hide();
        success.show();
    });

    $('#btnAudi').click(function () {
        d.hide();
        fail.show();
    });

    $('#btnLamborghini').click(function () {
        success.hide();
        easteregg.show();
    });
});
