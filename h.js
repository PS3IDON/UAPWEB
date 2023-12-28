let barang = [
    {
     kode: "001",
     nama: "A",
     harga: 10000
    },

    {
    kode: "002",
    nama: "B",
    harga: 20000
    },

    {
    kode: "003",
    nama: "C",
    harga:30000
    }

];

function caribarang(kode) {
    for (let i = 0; i < barang.length; i++) {
        if (barang[i].kode === kode) {
            return barang[i];
        }
    }
    return null;
}

function proses() {
let kode = document.getElementById("kode").value;
let jumlah = parseInt(document.getElementById("jumlah").value);
let databarang = caribarang(kode);
if (!databarang) {
    alert("kode tidak ada");
    return;
}

let total = hargaBarang.harga * jumlah;

alert("total yang di bayar : rp" + total);
let bayar = parseInt(prompt("uang yang di bayar:"));
let kembalian = bayar - total;
alert("kembalian: rp." + kembalian)
}