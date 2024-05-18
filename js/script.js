//Ini JS

//Function menghitung luas segitiga
function luas(){
    const alas = document.getElementById('alas')
    const tinggi = document.getElementById('tinggi')
    const hitung_luas = document.getElementById('hitung_luas')
    const output_luas = document.getElementById('output_luas')
    hitung_luas.addEventListener('click', function(){
        let a = alas.value
        let t = tinggi.value
        let l = 0.5*a*t
        output_luas.innerHTML = 
        `<strong>Penyelesaian:<br></strong>
        L = <sup>1</sup>&frasl;<sub>2</sub> x a x t <br>
        L = <sup>1</sup>&frasl;<sub>2</sub> x ${a} x ${t} <br>
        L = ${l} Cm<sup>2</sup>`
    })
}

//Function menghitung keliling segitiga
function keliling(){
    const sisi1 = document.getElementById('sisi1')
    const sisi2 = document.getElementById('sisi2')
    const sisi3 = document.getElementById('sisi3')
    const hitung_keliling = document.getElementById('hitung_keliling')
    const output_keliling = document.getElementById('output_keliling')
    hitung_keliling.addEventListener('click', function(){
        let s1 = sisi1.value
        let s2 = sisi2.value
        let s3 = sisi3.value
        let k = parseInt(s1)+parseInt(s2)+parseInt(s3)
        output_keliling.innerHTML = 
        `<strong>Penyelesaian:<br></strong>
        K = Sisi 1 + Sisi 2 + Sisi 3 <br>
        K = ${s1} + ${s2} + ${s3} <br>
        K = ${k} Cm`
    })
}

    





