x = document.querySelectorAll(".reperti>div");

y = document.querySelectorAll(".CenaSz")[0]

z = document.querySelector(".badb>p")


b = document.querySelector("#wozek")

c = document.querySelector(".popap")

if(localStorage.getItem("wynik")){
    wynik=localStorage.getItem("wynik")
}
else{wynik = 0}

if(localStorage.getItem("wynik")&&localStorage.getItem("koszyk")){
    document.querySelector(".zamowienie").innerHTML=localStorage.getItem("koszyk")

    for(licznik=0;licznik<document.querySelectorAll(".marchew").length;licznik++){
    document.querySelectorAll(".marchew")[licznik].addEventListener("click",function(){ this.parentElement.remove() })
}
    document.querySelector(".suma").innerHTML = "Razem: " + localStorage.getItem("wynik") + " zł"

}


for (i = 0; i < 8; i++) {
    x[i].addEventListener("click", function () {
        document.querySelector(".promo").style.display = "none"
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
    document.querySelector(".promo").style.display = "block"
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
        nowyGuzik = document.createElement("button")
        nowyGuzik.innerText="x"
        nowyGuzik.className="marchew"
        nowyGuzik.addEventListener("click",function(){
            this.parentElement.remove() 
        })

        wynik = (parseFloat(wynik) + parseFloat((parseFloat(document.querySelector("#ilosc").value) *
            parseFloat(temp)).toFixed(2))).toFixed(2)
        nowy = document.createElement("div")
        nowy.innerText=document.querySelector("#ilosc").value +
            " x produkt nr " + temp2 +" z działu "+document.querySelectorAll(".stawka")[8].value+"(" + parseFloat((parseFloat(document.querySelector("#ilosc")
                .value) * parseFloat(temp)).toFixed(2)) + " zł)"
        
        
        nowy.appendChild(nowyGuzik)


        

        
        document.querySelector(".zamowienie").appendChild(nowy)
        document.querySelector(".suma").innerHTML = "Razem: " + wynik + " zł"

        localStorage.setItem("koszyk",document.querySelector(".zamowienie").innerHTML)
        localStorage.setItem("wynik",wynik)
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

    wynik=0
    document.querySelector(".zamowienie").innerText=""


    localStorage.removeItem("koszyk")
    localStorage.removeItem("wynik")
    window.location.reload(true)
    

})

document.querySelector("#rtv").addEventListener("click", function(){
    document.querySelector(".zdjecie1").src="zdjecia/rtv1.jpg"
    document.querySelector(".zdjecie2").src="zdjecia/rtv2.jpg"
    document.querySelector(".zdjecie3").src="zdjecia/rtv3.jpg"
    document.querySelector(".zdjecie4").src="zdjecia/rtv4.jpg"
    document.querySelector(".zdjecie5").src="zdjecia/rtv5.jpg"
    document.querySelector(".zdjecie6").src="zdjecia/rtv6.jpg"
    document.querySelector(".zdjecie7").src="zdjecia/rtv7.jpg"
    document.querySelector(".zdjecie8").src="zdjecia/rtv8.jpg"

    document.querySelectorAll(".stawka")[0].value=37.99
    document.querySelectorAll(".stawka")[1].value=44.20
    document.querySelectorAll(".stawka")[2].value=65.90
    document.querySelectorAll(".stawka")[3].value=29.90
    document.querySelectorAll(".stawka")[4].value=34.79
    document.querySelectorAll(".stawka")[5].value=35.69
    document.querySelectorAll(".stawka")[6].value=64.99
    document.querySelectorAll(".stawka")[7].value=39.99
    document.querySelectorAll(".stawka")[8].value="rtv"
})

document.querySelector("#meble").addEventListener("click", function(){
    document.querySelector(".zdjecie1").src="zdjecia/meble1.jpg"
    document.querySelector(".zdjecie2").src="zdjecia/meble2.jpg"
    document.querySelector(".zdjecie3").src="zdjecia/meble3.jpg"
    document.querySelector(".zdjecie4").src="zdjecia/meble4.jpg"
    document.querySelector(".zdjecie5").src="zdjecia/meble5.jpg"
    document.querySelector(".zdjecie6").src="zdjecia/meble6.jpg"
    document.querySelector(".zdjecie7").src="zdjecia/meble7.jpg"
    document.querySelector(".zdjecie8").src="zdjecia/meble8.jpg"

    document.querySelectorAll(".stawka")[0].value=300.70
    document.querySelectorAll(".stawka")[1].value=549.20
    document.querySelectorAll(".stawka")[2].value=869.90
    document.querySelectorAll(".stawka")[3].value=420.10
    document.querySelectorAll(".stawka")[4].value=356.79
    document.querySelectorAll(".stawka")[5].value=555.69
    document.querySelectorAll(".stawka")[6].value=345.99
    document.querySelectorAll(".stawka")[7].value=300.99
    document.querySelectorAll(".stawka")[8].value="meble"
})

document.querySelector("#ogrod").addEventListener("click", function(){


    document.querySelector(".zdjecie1").src="zdjecia/ogrod1.jpg"
    document.querySelector(".zdjecie2").src="zdjecia/ogrod2.jpg"
    document.querySelector(".zdjecie3").src="zdjecia/ogrod3.jpg"
    document.querySelector(".zdjecie4").src="zdjecia/ogrod4.jpg"
    document.querySelector(".zdjecie5").src="zdjecia/ogrod5.jpg"
    document.querySelector(".zdjecie6").src="zdjecia/ogrod6.jpg"
    document.querySelector(".zdjecie7").src="zdjecia/ogrod7.jpg"
    document.querySelector(".zdjecie8").src="zdjecia/ogrod8.jpg"

    document.querySelectorAll(".stawka")[0].value=354.70
    document.querySelectorAll(".stawka")[1].value=489.20
    document.querySelectorAll(".stawka")[2].value=699.90
    document.querySelectorAll(".stawka")[3].value=221.10
    document.querySelectorAll(".stawka")[4].value=233.79
    document.querySelectorAll(".stawka")[5].value=959.69
    document.querySelectorAll(".stawka")[6].value=477.99
    document.querySelectorAll(".stawka")[7].value=399.99
    document.querySelectorAll(".stawka")[8].value="ogrod"
})

document.querySelector("#glowna").addEventListener("click", function(){
    document.querySelector(".zdjecie1").src="zdjecia/index1.jpg"
    document.querySelector(".zdjecie2").src="zdjecia/index2.jpg"
    document.querySelector(".zdjecie3").src="zdjecia/index3.jpg"
    document.querySelector(".zdjecie4").src="zdjecia/index4.jpg"
    document.querySelector(".zdjecie5").src="zdjecia/index5.jpg"
    document.querySelector(".zdjecie6").src="zdjecia/index6.jpg"
    document.querySelector(".zdjecie7").src="zdjecia/index7.jpg"
    document.querySelector(".zdjecie8").src="zdjecia/index8.jpg"

    document.querySelectorAll(".stawka")[0].value=3.70
    document.querySelectorAll(".stawka")[1].value=4.20
    document.querySelectorAll(".stawka")[2].value=6.90
    document.querySelectorAll(".stawka")[3].value=2.10
    document.querySelectorAll(".stawka")[4].value=3.79
    document.querySelectorAll(".stawka")[5].value=5.69
    document.querySelectorAll(".stawka")[6].value=4.99
    document.querySelectorAll(".stawka")[7].value=3.99
    document.querySelectorAll(".stawka")[8].value="artykuły spożywcze"
})







//classList.add,remove,toggle,contains window.location.reload(true);