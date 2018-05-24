// ==UserScript==
// @name         Fio: Planned transaction balance.
// @namespace    http://klaska.net
// @version      1.0
// @description  Calculate balance after each planned transaction.
// @author       Radim Klaška
// @match        https://ib.fio.cz/*
// @downloadURL  https://raw.githubusercontent.com/radimklaska/fio_planned_transactions/master/fio_planned_transactions.user.js
// @updateURL    https://raw.githubusercontent.com/radimklaska/fio_planned_transactions/master/fio_planned_transactions.user.js
// @grant        none
// ==/UserScript==

var s       = document.createElement('script');
s.type      = 'text/javascript';
s.textContent =  '(' + function() {

    // Get current balance.
    var balance = $('.indexZustatkyBox div.balanceSum.availableBalance').text();
    balance = balance.replace(/[^0-9.]/g, "");
    balance = balance.substring(0, balance.length - 2);

    // Find all planned transactions (Widget called "Plánované platby")
    var planned_transactions = $('.planovanePlatby td.amount.amount_value');
    // Last match is sum of planned transaction. We don't need that.
    planned_transactions.splice(-1,1);
    planned_transactions.each(function(index) {
        // Get change ammount as number.
        var change = $(this).attr('data-value');
        change = change.replace(/[^0-9.]/g, "");
        change = change.substring(0, change.length - 5);
        // Update running balance.
        balance = balance-change
        // Present current balance after planned transaction.
        $(this).append("| "+ formatNumber(balance));
    });

    // Bit of formatting, just add spaces after thousands.
    function formatNumber(nStr)
    {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ' ' + '$2');
        }
        return x1 + x2;
    }
 } + ')();';

// Inject Script. Can't use jQuery yet, because the page is not
// accessible from Tampermonkey
document.getElementsByTagName("head")[0].appendChild(s);
