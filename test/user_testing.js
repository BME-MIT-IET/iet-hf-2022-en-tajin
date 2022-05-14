var baseURL = new Url();


var url;
document.getElementById('url').value=' ';
document.getElementById('encodeOutput').value='';
document.getElementById('decodeOutput').value='';
document.getElementById('urlCleared').value='';
document.getElementById('queryLength').value='';

function UseUrl(){
    url = document.getElementById('url').value
    console.log(url)
}

function urlencode(){
    let url1 = baseURL.encode(url)
    document.getElementById('encodeOutput').value=url1;
}
function urldecode(){
    let url1 = baseURL.decode(url)
    document.getElementById('decodeOutput').value=url1;
}
function urlclearQuery(){
    let url1=  baseURL.clearQuery(url)
    
    document.getElementById('urlCleared').value=url1;
}
function urlqueryLength(){
    let url1= new Url(url)
    let queryLength = url1.queryLength();
    document.getElementById('queryLength').value=queryLength;
}
