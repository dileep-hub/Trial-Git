function lw() {
    // here xhr is a object from XMLHttpRequest() class
    var i = document.getElementById("cmd-inp").value

    var xhr = new XMLHttpRequest();
    // here fasle means sync and true means async[AJAX]
    xhr.open("GET", "http://192.168.43.187/cgi-bin/JS/cmd.py?x=" + i, true);
    xhr.send();

// here  onload will take the return text from server [cgi-bin folder]
    xhr.onload = function() {
            var output = xhr.responseText;
            document.getElementById("out-id").innerHTML = output;
    }
}

function create_pod() {
    // here xhr is a object from XMLHttpRequest() class
    var i = document.getElementById("pod-in1").value

    var xhr = new XMLHttpRequest();
    // here fasle means sync and true means async[AJAX]
    xhr.open("GET", "http://192.168.56.106/cgi-bin/k8s-cgi/server.py?x=${i} img-name=${j}" , true);
    xhr.send();

// here  onload will take the return text from server [cgi-bin folder]
    xhr.onload = function() {
            var output = xhr.responseText;
            document.getElementById("out-id").innerHTML = output;
    }
}