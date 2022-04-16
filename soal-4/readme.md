Petunjuk penggunaan vuejs:
- npm install
- npm run dev

Petunjuk Penggunaan Website:
- pada halaman login, terdapat input username dan password. 
  input username diambil dari api https://swapi.dev/api/people.
  ex: (username 'Luke' dan password '19BBY') dan (username 'C-3PO' dan password '112BBY').
  form login juga memiliki beberapa validasi, diantara lain :
  - username belum terisi
  - password belum terisi
  - username dan password salah

- setelah berhasil login, akan tiba di halaman home (menu films) yang akan menampilkan
  deskripsi film dalam bentuk card. terdapat paginasi juga pada halaman ini
- masuk ke menu character, akan menampilkan sebuah tabel berisi informasi
  character star war movies. halaman ini terdapat fitur search, filter, dan paginasi
- terakhir ada button logout

Keterangan:
- terdapat page error jika user salah memasukkan url
- terdapat permission pengecekan token (hardcode) apabila user mengetik url
  selain login sebelum login. jika tidak ada token, maka user tidak bisa masuk ke page selain login
