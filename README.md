# CANDY CBT - EXTRAFEATURE

Sedikit fitur - fitur tambahan.

#### SOAL-SHORTCUT
 Siswa bisa mengerjakan soal menggunakan keyboard shortcut. Yuk ikuti bila ingin menambahkan fitur ini.
1. Download library nya dulu di [Mousetrap](https://craig.global.ssl.fastly.net/js/mousetrap/mousetrap.min.js?a4098 "Mousetrap") kecil sekali ukurannya.
2. Buat folder didalam plugin **mousetrap** kemudian simpan didalam folder tersebut file yg tadi sudah di download.
3. Edit file **index.php** tambah code dibawah ini 
`<script src='$homeurl/plugins/mousetrap/mousetrap.min.js'></script>`
4. Edit file **soal.php** tambah code  ini  [soal-shortcut.js](https://github.com/hasanbasri1993/candycbt-myfeature/blob/master/soal-shortcut.js "soal-shortcut.js") tepatnya di bawah *$(document).ready(function () {* kurang lebih berada di line 283
5. Edit file **index.php** tambah code  ini [soal-shortcut.php](https://github.com/hasanbasri1993/candycbt-myfeature/blob/master/soal-shortcut.php "soal-shortcut.php") tepatnya di bawah *$(document).ready(function () {* kurang lebih berada di line 1129
6. Save n reload di halaman siswa ujiannya. 
