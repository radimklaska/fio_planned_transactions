# tl;dr
* Calculate balance after each planned transaction on your dasboard on https://ib.fio.cz.
* Don't trust me, or anyone adding JS code to your internet banking app. *Seriously! Read the code!*
* Chrome: https://www.google.cz/search?q=tampermonkey+chrome
* Firefox: https://www.google.cz/search?q=greasemonkey#q=greasemonkey+firefox
* IE: http://stackoverflow.com/questions/11876852/how-to-run-a-modern-userscript-on-internet-explorer
* https://github.com/radimklaska/fio_planned_transactions/raw/master/fio_planned_transactions.user.js

# What it does
* Looks for your current balance.
* Loops trough all planned transactions.
* Appends balance calculated after the transaction and all previous ones.

# Installation
* It's small script running in your browser.
* You need something like Greasemonkey for FireFox ("Allows you to customize the way a web page displays or behaves, by using small bits of JavaScript.") to run the script. https://addons.mozilla.org/cs/firefox/addon/greasemonkey/
* There is Chrome alternative, Tampermonkey: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
* After installing the browser extension, install the script: http://wiki.greasespot.net/Greasemonkey_Manual:Installing_Scripts / http://tampermonkey.net/faq.php?ext=dhdg#Q102
* The script you need is here: https://github.com/radimklaska/fio_planned_transactions/raw/master/fio_planned_transactions.user.js Just visit the URL and Tamper/Grease monkeay should catch it. Or do whatever their manual says. :)
