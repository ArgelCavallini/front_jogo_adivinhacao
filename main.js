$(document).ready(function () {
  const numberSecret = Math.round(Math.random() * 10)
  var quantidade = 0

  $("#btnTentar").click(function () {
    var valor = $("#myNumber").val()
    quantidade = quantidade + 1

    if ($.isNumeric(valor) && valor >= 0 && valor <= 10) {
      setTimeout(function () {
        if (numberSecret == valor) {
          $(".screen1").addClass("hide")
          $(".screen2").removeClass("hide")
          $("#quantidade").text(quantidade)
        } else alert("Errou! Tente novamente!")
      }, 200)
    } else alert("Por favor, insira um número entre 0 e 10.")
  })

  $("#btnJogarNovamente").click(function () {
    location.reload()
  })
})
