


"https://cdnjs.cloudflare.com/ajax/libs/mathjs/10.6.4/math.min.js"
integrity =
    "sha512-iphNRh6dPbeuPGIrQbCdbBF/qcqadKWLa35YPVfMZMHBSI6PLJh1om2xCTWhpVpmUyb4IvVS9iYnnYMkleVXLA=="
crossorigin = "anonymous"
referrerpolicy = "no-referrer" >

    function dis() {
        document.getElementById("result").value += val
    }
function myfunction(event) {
    if (event.key == '0' || event.key == '1' ||
        event.key == '2' || event.key == '3' ||
        event.key == '4' || event.key == '5' ||
        event.key == '6' || event.key == '7' ||
        event.key == '8' || event.key == '9' ||
        event.key == '+' || event.key == '-' ||
        event.key == '*' || event.key == '/')
        document.getElementById('result').value += event.key
}
var cal = document.getElementById("calculator")
cal.onkeyup = function (event) {
    if (event.keyCode === 13) {
        console.log("Enter")
        let x = document.getElementById("result").value
        console.log(x)
        sovle()

    }
}
function solve() {
    let x = document.getElementById("result").value
    let y = math.evaluate(x)
    document.getElementById("result").value = y
}
function clr() {
    document.getElementById("result").value = ""
}

// <![CDATA[  <-- For SVG support
if ('WebSocket' in window) {
    (function () {
        function refreshCSS() {
            var sheets = [].slice.call(document.getElementsByTagName("link"));
            var head = document.getElementsByTagName("head")[0];
            for (var i = 0; i < sheets.length; ++i) {
                var elem = sheets[i];
                var parent = elem.parentElement || head;
                parent.removeChild(elem);
                var rel = elem.rel;
                if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                    var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                    elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
                }
                parent.appendChild(elem);
            }
        }
        var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
        var address = protocol + window.location.host + window.location.pathname + '/ws';
        var socket = new WebSocket(address);
        socket.onmessage = function (msg) {
            if (msg.data == 'reload') window.location.reload();
            else if (msg.data == 'refreshcss') refreshCSS();
        };
        if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
            console.log('Live reload enabled.');
            sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
        }
    })();
}
else {
    console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
}
// ]]>
