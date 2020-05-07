const options = {
    year: 'numeric'
};
const options1 = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
};
document.getElementById("mdate").innerHTML = new Date(document.lastModified).toLocaleDateString('en-US', options1);
document.getElementById("year").innerHTML = new Date().toLocaleDateString('en-US', options);