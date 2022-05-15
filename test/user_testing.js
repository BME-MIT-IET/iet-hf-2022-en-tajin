var baseURL = new domUrl();


var url;
document.getElementById('url').value = ' ';
document.getElementById('encodeOutput').value = '';
document.getElementById('decodeOutput').value = '';
document.getElementById('urlCleared').value = '';
document.getElementById('queryLength').value = '';
document.getElementById('urltostring').value = '';
document.getElementById('urlparsed').value = '';
document.getElementById('isEmptyUrl').value = '';



function UseUrl() {
    url = document.getElementById('url').value
    console.log(url)
}

function urlencode() {
    let url1 = baseURL.encode(url)
    document.getElementById('encodeOutput').value = url1;
}
function urldecode() {
    let url1 = baseURL.decode(url)
    document.getElementById('decodeOutput').value = url1;
}
function urlclearQuery() {
    console.log(url)
    let url1 = new domUrl(url, true);
    url1.clearQuery();
    document.getElementById('urlCleared').value = url1.toString();
}
function urlqueryLength() {
    let url1 = new domUrl(url, true)
    let queryLength = url1.queryLength();
    document.getElementById('queryLength').value = queryLength;
}
function urlisEmpty() {
    let url1 = new domUrl(url, true)
    let result = url1.isEmptyQuery()
    console.log(result)
    if (result) {
        document.getElementById('isEmptyUrl').value = 'Url query is empty'
    }
    else {
        document.getElementById('isEmptyUrl').value = 'Url query is not empty'

    }
}

function urlToString() {
    let url1 = new domUrl(url, true)
    document.getElementById('urltostring').value = url1.toString()
}

function urlParse() {
    let url1 = new domUrl(url, true)
    document.getElementById('urlparsed').value = url1
}