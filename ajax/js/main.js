document.getElementById('calcform').onsubmit = function (event) {
    event.preventDefault()

    let xhr = new XMLHttpRequest();

    xhr.open(this.method, this.action);
    xhr.send(new FormData(this));

    xhr.onload = function () {
        // if (xhr.status == 200) {
            switch (document.getElementById('op').value) {
                case 'sum':
                    let obj = JSON.parse(xhr.response);
                    document.getElementById('response').innerHTML =obj.sum;
                    break;
                case 'dif':
                    let obj1 = JSON.parse(xhr.response);
                    document.getElementById('response').innerHTML = obj1.dif;
                    break;
                case 'mull':
                    let obj2 = JSON.parse(xhr.response);
                    document.getElementById('response').innerHTML = obj2.mull;
                    break;
                case 'del':
                    let obj3 = JSON.parse(xhr.response);
                    document.getElementById('response').innerHTML = obj3.del;
                    break;
            }
        };
    }


