//Ini JS .

//Function menghitung luas segitiga
function luas(){
    const alas = document.getElementById('alas')
    const tinggi = document.getElementById('tinggi')
    const satuan_luas = document.getElementById('satuan_luas')
    const hitung_luas = document.getElementById('hitung_luas')
    const output_luas = document.getElementById('output_luas')
    hitung_luas.addEventListener('click', function(){
        let a = alas.value
        let t = tinggi.value
        let sl = satuan_luas.value
        let luas = 0.5*parseFloat(a)*parseFloat(t)
        //l = luas.toFixed(3)
        output_luas.innerHTML = 
        `<strong>Penyelesaian:<br></strong>
        L = <sup>1</sup>&frasl;<sub>2</sub> x a x t <br>
        L = <sup>1</sup>&frasl;<sub>2</sub> x ${a} x ${t} <br>
        L = ${luas} ${sl}<sup>2</sup>`
    reset_luas.addEventListener('click', function(){
        output_luas.innerHTML = ``
    })    
    })
}

//Function menghitung keliling segitiga
function keliling(){
    const sisi1 = document.getElementById('sisi1')
    const sisi2 = document.getElementById('sisi2')
    const sisi3 = document.getElementById('sisi3')
    const satuan_keliling = document.getElementById('satuan_keliling')
    const hitung_keliling = document.getElementById('hitung_keliling')
    const output_keliling = document.getElementById('output_keliling')
    hitung_keliling.addEventListener('click', function(){
        let s1 = sisi1.value
        let s2 = sisi2.value
        let s3 = sisi3.value
        let sk = satuan_keliling.value
        let keliling = parseFloat(s1)+parseFloat(s2)+parseFloat(s3)
        //k = keliling.toFixed(3)
        output_keliling.innerHTML = 
        `<strong>Penyelesaian:<br></strong>
        K = Sisi 1 + Sisi 2 + Sisi 3 <br>
        K = ${s1} + ${s2} + ${s3} <br>
        K = ${keliling} ${sk}`
        reset_keliling.addEventListener('click', function(){
            output_keliling.innerHTML = ``
        })    
    })
}