function carregar() {
    var detailsElement = window.document.getElementById('details')
    var dataNow = new Date
    var birthDate = new Date("2000-06-20")
    var dateTime = (dataNow - birthDate) / 1000 / 60 / 60 / 24 / 365
    detailsElement.innerHTML = `Daniel Jr / ${Math.floor(dateTime)}y / Brazilian / Dev Backend`
}