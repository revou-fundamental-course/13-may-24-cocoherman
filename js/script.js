

//Validasi nilai yang diinput
function funcLuas() {
    var alas = parseFloat(document.getElementById('inputAlas').value);
    var tinggi = parseFloat(document.getElementById('inputTinggi').value);
    var satuanLuas = document.getElementById('satuanLuas').value;

    if (alas === 0 || tinggi === 0 || satuanLuas == 0 || isNaN(alas) || isNaN(tinggi)) {
        alert("Data tidak valid. Nilai alas, tinggi dan satuan ukur tidak boleh nol.");
        return;
    }

    if (countDecimalPlaces(alas) > 3 || countDecimalPlaces(tinggi) > 3) {
        alert("Data tidak valid. Nilai alas atau tinggi tidak boleh lebih dari 3 digit desimal.");
        return;
    }

    //Nilai yang diinput dihitung
    let luas = 0.5 * alas * tinggi;
    console.log(alas, satuanLuas);
    console.log(tinggi, satuanLuas);
    console.log(luas, satuanLuas);

    // Menampilkan hasil luas dengan ketentuan
    if (Number.isInteger(luas)) {
        luas = luas.toFixed(0); // Tanpa digit desimal jika bilangan bulat
    } else {
        luas = luas.toFixed(3); // Hanya 3 digit desimal jika desimal
    }

    output_luas.innerHTML =
        `<strong>Penyelesaian:<br><br></strong>
        L = <sup>1</sup>&frasl;<sub>2</sub> x a x t <br>
        L = <sup>1</sup>&frasl;<sub>2</sub> x ${alas} x ${tinggi} <br>
        L = ${luas} ${satuanLuas}<sup>2</sup>`;

    reset_luas.addEventListener('click', function() {
        output_luas.innerHTML = ``;
    });
}

//Nilai desimal terdiri dari 3 angka
function countDecimalPlaces(num) {
    if (Math.floor(num) === num || !isFinite(num)) return 0;
    return num.toString().split(".")[1].length || 0;
}

//Function menghitung keliling segitiga

//Validasi nilai yang diinput
function funcKeliling() {
    var sisi1 = parseFloat(document.getElementById('inputSisi1').value);
    var sisi2 = parseFloat(document.getElementById('inputSisi2').value);
    var sisi3 = parseFloat(document.getElementById('inputSisi3').value);
    var satuanKeliling = document.getElementById('satuanKeliling').value;

    if (sisi1 === 0 || sisi2 === 0 || sisi3 === 0 || satuanKeliling == 0 || isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
        alert("Data tidak valid. Nilai alas, tinggi dan satuan ukur tidak boleh nol.");
        return;
    }

    if (countDecimalPlaces(sisi1) > 3 || countDecimalPlaces(sisi2) > 3 || countDecimalPlaces(sisi3) > 3 ) {
        alert("Data tidak valid. Nilai alas atau tinggi tidak boleh lebih dari 3 digit desimal.");
        return;
    }

    //Nilai yang diinput dihitung
    let keliling = sisi1+sisi2+sisi3;
    console.log(sisi1, satuanKeliling);
    console.log(sisi2, satuanKeliling);
    console.log(sisi3, satuanKeliling);
    console.log(keliling, satuanKeliling);

    // Menampilkan hasil keliling dengan ketentuan
    if (Number.isInteger(keliling)) {
        keliling = keliling.toFixed(0); // Tanpa digit desimal jika bilangan bulat
    } else {
        keliling = keliling.toFixed(3); // Hanya 3 digit desimal jika desimal
    }

    output_keliling.innerHTML =
        `<strong>Penyelesaian:<br><br></strong>
        K = Sisi 1 + Sisi 2 + Sisi 3 <br>
        K = ${sisi1} + ${sisi2} + ${sisi3} <br>
        K = ${keliling} ${satuanKeliling}`;

    reset_keliling.addEventListener('click', function() {
        output_keliling.innerHTML = ``;
    });
}

//Nilai desimal terdiri dari 3 angka
function countDecimalPlaces(num) {
    if (Math.floor(num) === num || !isFinite(num)) return 0;
    return num.toString().split(".")[1].length || 0;
}