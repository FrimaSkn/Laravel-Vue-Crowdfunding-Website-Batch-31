// Soal 1
let daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];

for (let i = 0; i < daftarHewan.length; i++){
    console.log(daftarHewan.sort()[i]);
}


// Soal 2
function introduce(data){

    let str = "Nama saya " + data.name + ", umur saya " + data.age + " tahun, alamat saya di " + data.address + ", dan saya punya hobby yaitu " + data.hobby + "!";
    return str;
}

let data = {name : "John" , age : 30 , address : "Jalan Pelesiran" , hobby : "Gaming" };

let perkenalan = introduce(data);
console.log(perkenalan);


// Soal 3
function hitung_huruf_vokal(str) {
    let jumlah = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.split('').length; i++) {
        for (let j = 0; j < vokal.length; j++) {
            if (vokal[j] == str[i]) {
                jumlah++;
            }
        }
    }
    return jumlah;
}

const vokal = ["a", "e", "i", "o", "u"];

let hitung_1 = hitung_huruf_vokal("Muhammad");
let hitung_2 = hitung_huruf_vokal("Iqbal");

console.log(hitung_1 , hitung_2) ;


// Soal 4
function hitung(int) {
    let value = -2 + 2 * int;
    return value;
}

console.log(hitung(0));
console.log(hitung(1));
console.log(hitung(2));
console.log(hitung(3));
console.log(hitung(5));