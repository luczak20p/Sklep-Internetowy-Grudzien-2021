x = document.querySelectorAll(".reperti>div");

y = document.querySelectorAll(".CenaSz")[0]

z = document.querySelector(".badb>p")


b = document.querySelector("#wozek")

c = document.querySelector(".popap")

wynik = 0




for (i = 0; i < 8; i++) {
    x[i].addEventListener("click", function () {
        document.querySelector(".badb").style.display = "block"
    })
}

x[0].addEventListener("click", function () {
    y.innerHTML = "Cena za sztukę: " + document.querySelectorAll("#ceny>input")[0].value
    temp = document.querySelectorAll("#ceny>input")[0].value
    temp2 = 1
    document.querySelector(".imag2").src = document.querySelectorAll(".imag")[0].src

})

x[1].addEventListener("click", function () {
    y.innerHTML = "Cena za sztukę: " + document.querySelectorAll("#ceny>input")[1].value
    temp = document.querySelectorAll("#ceny>input")[1].value
    temp2 = 2
    document.querySelector(".imag2").src = document.querySelectorAll(".imag")[1].src

})
x[2].addEventListener("click", function () {
    y.innerHTML = "Cena za sztukę: " + document.querySelectorAll("#ceny>input")[2].value
    temp = document.querySelectorAll("#ceny>input")[2].value
    temp2 = 3
    document.querySelector(".imag2").src = document.querySelectorAll(".imag")[2].src

})
x[3].addEventListener("click", function () {
    y.innerHTML = "Cena za sztukę: " + document.querySelectorAll("#ceny>input")[3].value
    temp = document.querySelectorAll("#ceny>input")[3].value
    temp2 = 4
    document.querySelector(".imag2").src = document.querySelectorAll(".imag")[3].src

})
x[4].addEventListener("click", function () {
    y.innerHTML = "Cena za sztukę: " + document.querySelectorAll("#ceny>input")[4].value
    temp = document.querySelectorAll("#ceny>input")[4].value
    temp2 = 5
    document.querySelector(".imag2").src = document.querySelectorAll(".imag")[4].src

})
x[5].addEventListener("click", function () {
    y.innerHTML = "Cena za sztukę: " + document.querySelectorAll("#ceny>input")[5].value
    temp = document.querySelectorAll("#ceny>input")[5].value
    temp2 = 6
    document.querySelector(".imag2").src = document.querySelectorAll(".imag")[5].src

})
x[6].addEventListener("click", function () {
    y.innerHTML = "Cena za sztukę: " + document.querySelectorAll("#ceny>input")[6].value
    temp = document.querySelectorAll("#ceny>input")[6].value
    temp2 = 7
    document.querySelector(".imag2").src = document.querySelectorAll(".imag")[6].src

})
x[7].addEventListener("click", function () {
    y.innerHTML = "Cena za sztukę: " + document.querySelectorAll("#ceny>input")[7].value
    temp = document.querySelectorAll("#ceny>input")[7].value
    temp2 = 8
    document.querySelector(".imag2").src = document.querySelectorAll(".imag")[7].src

})

document.querySelector(".pp>.iks").addEventListener("click", function () {
    document.querySelector(".badb").style.display = "none"
})

document.querySelector(".iks").addEventListener("click", function () {
    document.querySelector("#wozek").style.display = "none"
})

document.querySelector("#sklep").addEventListener("click", function () {


    b.style.display = "flex"

})

document.querySelector("#ilosc").addEventListener("change", function () {
    if ((parseFloat(document.querySelector("#ilosc").value) * parseFloat(temp)) <= 0) {document.querySelectorAll(".CenaSz")[1].innerHTML = "Wybierz dodatnią ilość produktów"} 
    else {
        document.querySelectorAll(".CenaSz")[1].innerHTML = "Cena za podaną ilość: " + (parseFloat(
            document.querySelector("#ilosc").value) * parseFloat(temp)).toFixed(2)
    }
})

document.querySelector(".guzik").addEventListener("click", function () {
    if ((parseFloat(document.querySelector("#ilosc").value) * parseFloat(temp)) <= 0) {} else {
        wynik = (parseFloat(wynik) + parseFloat((parseFloat(document.querySelector("#ilosc").value) *
            parseFloat(temp)).toFixed(2))).toFixed(2)
        nowy = document.createElement("div")
        nowy.innerText=document.querySelector("#ilosc").value +
            " x produkt nr " + temp2 + "(" + parseFloat((parseFloat(document.querySelector("#ilosc")
                .value) * parseFloat(temp)).toFixed(2)) + " zł)"
        document.querySelector(".zamowienie").appendChild(nowy)
        document.querySelector(".suma").innerHTML = "Razem: " + wynik + " zł"
    }
})

document.querySelector(".zamow").addEventListener("click", function () {
    c.style.display = "flex"
    
})

document.querySelector(".czysc").addEventListener("click", function () {
    document.querySelector(".zamowienie").innerText = ""
    document.querySelector(".suma").innerText = ""
    wynik = 0
})

document.querySelector(".popap>div>button").addEventListener("click", function(){
    window.location.reload(true);
})


//alerta zmienić na pop up diva np.
//koszyk na element create zrobić
//classList.add,remove,toggle,contains window.location.reload(true);