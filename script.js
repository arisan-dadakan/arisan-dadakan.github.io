function salinRekening() {
  var copyText = document.querySelector("#rekening");
  copyText.select();
  document.execCommand("copy");
  alert('Rekening di salin')
}