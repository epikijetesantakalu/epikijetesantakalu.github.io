var map = L.map('map').setView([0, 0], 1);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//ma suli
const maAmelika = L.marker([19, -96],{icon: L.spriteIcon('red')}).addTo(map).bindPopup("<h1>ma Amelika</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maAntasika = L.marker([-90, 0],{icon: L.spriteIcon('red')}).addTo(map).bindPopup("<h1>ma Antasika</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maApika = L.marker([0, 30],{icon: L.spriteIcon('red')}).addTo(map).bindPopup("<h1>ma Apika</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maAsija = L.marker([45, 100],{icon: L.spriteIcon('red')}).addTo(map).bindPopup("<h1>ma Asija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maElopa = L.marker([55, 20],{icon: L.spriteIcon('red')}).addTo(map).bindPopup("<h1>ma Elopa</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maOsejanija = L.marker([-15, 180],{icon: L.spriteIcon('red')}).addTo(map).bindPopup("<h1>ma Osejanija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");

//ma lawa
//ma Apika
const maAnkola = L.marker([-11.274034,17.774308],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Ankola</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maEliteja = L.marker([15.232312,39.866768],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Eliteja</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maIsijopija = L.marker([9.192518, 40.489983],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Isijopija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKamelun = L.marker([7.404583, 12.286659],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Kamelun</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKana = L.marker([7.87033, -0.993746],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Kana</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKanpija = L.marker([13.440882,-15.410078],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Kanpija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKapon = L.marker([-0.905242, 11.514622],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Kapon</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKenja = L.marker([0.062279,37.90822],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Kenja</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKine = L.marker([9.944623, -11.602987],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Kine</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKinejekatolija = L.marker([1.812508,9.86979],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Kinejekatolija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKinepisa = L.marker([11.670696,-15.266189],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Kinepisa</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKomo = L.marker([-12.075489,43.899637],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Komo</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKonkopimatomoKinsasa = L.marker([-4.08881,21.672375],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Konko pi ma tomo Kinsasa</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_Konko_pi_ma_tomo_Kinsasa'>lipu Wikipesija</a></p>");
const maKonkopimatomoPasawi = L.marker([-0.720169,14.843614],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Konko pi ma tomo Pasawi</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_Konko_pi_ma_tomo_Pasawi'>lipu Wikipesija</a></p>");
const maKosiwa = L.marker([7.463522,-5.548176],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Kosiwa</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maLapewija = L.marker([6.358456,-9.4877],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Lapewija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maLesoto = L.marker([-29.629811,28.233542],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Lesoto</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maLipija = L.marker([26.636885,17.384072],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Lipija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maLuwanta = L.marker([-1.943824,29.880385],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Luwanta</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maMalakasi = L.marker([-18.905727,46.82037],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Malakasi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maMalawi = L.marker([-13.279956,34.295216],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Malawi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maMali = L.marker([17.728035,-3.98645],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Mali</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maMalipe = L.marker([31.172821, -7.336248],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Malipe</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maMasu = L.marker([26.937171,30.243217],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Masu</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maMosanpi = L.marker([-18.827471,35.633378],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Mosanpi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maMowisi = L.marker([-20.277754,57.556252],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Mowisi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maMulitanija = L.marker([21.151652,-11.035715],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Mulitanija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maNamipija = L.marker([-23.100427,18.394884],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Namipija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maNaseliija = L.marker([9.010687,8.677473],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Naselija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maNise = L.marker([17.70263,8.082816],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Nise</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPenen = L.marker([9.238929,2.310906],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Penen</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPosuwana = L.marker([-22.417515,24.686268],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Posuwana</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPukinapaso = L.marker([12.262498,-1.552118],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Pukinapaso</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSajawari = L.marker([23.822939,-12.216968],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Sajawali</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_Sajalawi'>lipu Wikipesija</a></p>");
const maSanpija = L.marker([-13.224792,27.853955],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Sanpija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSantapiken = L.marker([6.631696,20.940698],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Santapiken</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSasali = L.marker([28.528975,1.664215],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Sasali</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSate = L.marker([15.601766,18.73674],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Sate</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSawasi = L.marker([-26.520694,31.462893],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Sawasi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSeneka = L.marker([14.47506, -14.452961],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Seneka</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSese = L.marker([-4.665225,55.46115],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Sese</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_Sesele'>lipu Wikipesija</a></p>");
const maSetapika = L.marker([-28.767075,25.02],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Setapika</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSijelalijon = L.marker([8.380871,-11.886011],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Sijelalijon</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSinpapuwe = L.marker([-19.051879,29.152824],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Sinpapuwe</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSipusi = L.marker([11.855246,42.714609],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Sipusi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSomalija = L.marker([8.367677, 49.083416],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Somalija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSomalilan = L.marker([9.489939,45.527129],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Somalilan</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_Somalilan'>lipu Wikipesija</a></p>");
const maSutan = L.marker([14.584444, 29.49177],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Sutan</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maTansanija = L.marker([-6.524712, 35.787846],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Tansanija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maToko = L.marker([8.780026, 1.019976],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Toko</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maTunisi = L.marker([34.078796,9.701047],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Tunisi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maUkanta = L.marker([1.377593,32.28687],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Ukanta</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");

//ma Amelika
const maAlensina = L.marker([-34.001584,-64.00239],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Alensina</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maAwisi = L.marker([19.139996, -72.357094],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Awisi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maEkato = L.marker([-1.329569,-78.232042],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Ekato</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKalalinuna = L.marker([68.318627,-44.016172],{icon: L.spriteIcon('purple')}).addTo(map).bindPopup("<h1>ma Kalalinuna</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKanata = L.marker([60.714411,-97.000004],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Kanata</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKatemala = L.marker([15.787968,-90.220787],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Katemala</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKenata = L.marker([12.193143,-61.608385],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Kenata</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKosalika = L.marker([9.624821,-84.284058],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Kosalika</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKupa = L.marker([21.567421,-79.543488],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Kupa</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maMesiko = L.marker([25.32388,-101.169998],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Mesiko</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maMewika = L.marker([39.503574, -99.018364],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Mewika</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maOntula = L.marker([15.212422,-86.242767],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Ontula</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPalakawi= L.marker([-23.512661,-58.449335],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Palakawi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPanama= L.marker([8.519726, -80.088554],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Panama</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPapeto= L.marker([13.190244,-59.535463],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Papeto</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPasila= L.marker([-15.197082,-51.306012],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Pasila</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPawama= L.marker([24.773655, -78.000053],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Pawama</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPelu= L.marker([-6.86997, -75.045853],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Pelu</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPemuta= L.marker([32.319303,-64.767426],{icon: L.spriteIcon('purple')}).addTo(map).bindPopup("<h1>ma Pemuta</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPenesuwela= L.marker([8.356209,-66.56184],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Penesuwela</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSameka= L.marker([18.11975,-77.270966],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Sameka</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSile= L.marker([-33.363322,-70.766597],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Sile</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSinita= L.marker([10.719203,-61.186319],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Sinita</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maTominika= L.marker([19.293881,-70.08989],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Tominika</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maUlukawi= L.marker([-32.979868,-55.785177],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Ulukawi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");

//ma Asija
const maAja= L.marker([40.082182,45.040224],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Aja</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maAkanisan= L.marker([34.056516,67.703732],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Akanisan</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maAnku= L.marker([35.922779,127.834904],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Anku</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maIlakija= L.marker([33.318841,43.949705],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Ilakija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maIlan= L.marker([32.64753, 54.56435],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Ilan</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maIntonesija= L.marker([-2.640134,118.111771],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Intonesija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maIsale= L.marker([30.812426, 34.859478],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Isale</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maJamanija= L.marker([16.347124, 47.891525],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Jamanija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKanpusi= L.marker([12.556631,104.98386],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Kanpusi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKatelo= L.marker([42.000006,44.000008],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Katelo</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKuli= L.marker([35.976068,44.347687],{icon: L.spriteIcon('purple')}).addTo(map).bindPopup("<h1>ma Kuli</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKusala= L.marker([22.3998,71.325386],{icon: L.spriteIcon('purple')}).addTo(map).bindPopup("<h1>ma Kusala</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKuwasi= L.marker([29.317142,47.778683],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Kuwasi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maLanka= L.marker([7.882626,80.751503],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Lanka</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maLosi= L.marker([69.673056,99.693936],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Losi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maLunpan= L.marker([33.922211, 35.895355],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Lunpan</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maMalasija= L.marker([3.781534,102.308559],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Malasija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maMijama= L.marker([21.987457,96.010549],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Mijama</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maNijon= L.marker([35.820451,137.961196],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Nijon</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPakisan= L.marker([30.010395,71.003547],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Pakisan</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPalani= L.marker([26.112542,50.596582],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Palani</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPalata= L.marker([22.793499,83.011673],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Palata</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPanla= L.marker([23.638496,90.350998],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Panla</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPilipina= L.marker([12.008435,123.008155],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Pilipina</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPo= L.marker([31.71122,86.946367],{icon: L.spriteIcon('purple')}).addTo(map).bindPopup("<h1>ma Po</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSajusi= L.marker([24.512817,45.080927],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Sajusi</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_Sajusi'>lipu Wikipesija</a></p>");
const maSinkapo= L.marker([1.318586,103.841743],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Sinkapo</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_Sinkapo'>lipu Wikipesija</a></p>");
const maSonko= L.marker([35.861127,103.450927],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Sonko</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSulija= L.marker([34.640186, 39.049412],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Sulija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maTawi= L.marker([13.148852,101.491222],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Tawi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maTuki= L.marker([39.030179,35.245687],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Tuki</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maUman= L.marker([21.674609,56.027288],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Uman</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maUtun= L.marker([31.301702,37.092148],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Utun</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maWije= L.marker([15.995378,107.999151],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Wije</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");

//ma Elopa
const maAlan= L.marker([53.486369,-8.335808],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Alan</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maAntola= L.marker([42.5453, 1.575427],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Antola</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maElena= L.marker([38.31902,24.398282],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Elena</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maEpanja= L.marker([40.054695,-2.75],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Epanja</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maEsalasi= L.marker([47.721779,13.34],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Esalasi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maEsi= L.marker([58.745034,24.796312],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Esi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maEsaka= L.marker([42.965824,-2.589006],{icon: L.spriteIcon('purple')}).addTo(map).bindPopup("<h1>ma Esaka</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maInli= L.marker([52.368511, -1.256046],{icon: L.spriteIcon('purple')}).addTo(map).bindPopup("<h1>ma Inli</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maIsilan= L.marker([64.984272,-19.013569],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Isilan</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maItalija= L.marker([42.083955,12.64801],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Italija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maJuke= L.marker([53.941648,-1.740702],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Juke</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKanse= L.marker([46.435633,2.20606],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Kanse</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKatala= L.marker([41.703962,1.742397],{icon: L.spriteIcon('purple')}).addTo(map).bindPopup("<h1>ma Katala</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKinla= L.marker([52.417213,-4.160083],{icon: L.spriteIcon('purple')}).addTo(map).bindPopup("<h1>ma Kinla</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKiposi= L.marker([34.794085,32.997004],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Kiposi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKosowa= L.marker([42.496696,20.909831],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Kosowa</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_Kosowa'>lipu Wikipesija</a></p>");
const maKuseKuposi= L.marker([35.223658,33.56103],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Kuse Kiposi</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_Kuse_Kiposi'>lipu Wikipesija</a></p>");
const maLawi= L.marker([56.899557,24.421239],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Lawi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maLijatuwa= L.marker([55.194064,23.745618],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Lijatuwa</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maLisensan= L.marker([47.164809,9.555003],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Lisensan</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maLomani= L.marker([45.990878,25.15371],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Lomani</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maLowasi= L.marker([44.406762,16.328876],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Lowasi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maLowenki= L.marker([48.681294,19.69945],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Lowenki</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maLowensina= L.marker([46.119946, 14.815333],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Lowensina</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maLusepu= L.marker([49.817172,6.131505],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Lusepu</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maMaketonijalete= L.marker([41.617676,21.743477],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Maketonija lete</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_Maketonija_lete'>lipu Wikipesija</a></p>");
const maMosijo= L.marker([47.180286,19.505798],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Mosijo</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maMotowa= L.marker([47.28796, 28.567095],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Motowa</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maNetelan= L.marker([52.169294, 5.25655],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Netelan</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maNosiki= L.marker([61.396442,9.054819],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Nosiki</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPelalusi= L.marker([53.789218,27.970556],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Pelalusi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPesije= L.marker([50.510331,4.474018],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Pesije</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPeson= L.marker([48.000002,-2.999997],{icon: L.spriteIcon('purple')}).addTo(map).bindPopup("<h1>ma Peson</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPinesowi= L.marker([47.215164,29.453652],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Pinesowi</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_Pinesowi'>lipu Wikipesija</a></p>");
const maPokasi= L.marker([42.743358,25.622343],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Pokasi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPosan= L.marker([43.931423,17.676237],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Posan</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPosuka= L.marker([52.121022,19.107711],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Posuka</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPotuke= L.marker([39.623644,-8.104033],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Potuke</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSamalino= L.marker([43.933336,12.466671],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Samalino</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSeki= L.marker([49.819949,15.474914],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Seki</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSipe= L.marker([41.168144,20.02921],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Sipe</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSopisi= L.marker([44.153412, 20.551439],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Sopisi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSukosi= L.marker([57.881528,-4.687225],{icon: L.spriteIcon('purple')}).addTo(map).bindPopup("<h1>ma Sukosi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSumi= L.marker([65.412221,26.067672],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Sumi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSuwasi= L.marker([46.824627,8.224464],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Suwasi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maTansi= L.marker([56.242027,11.634195],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Tansi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maTosi= L.marker([51.335021,10.452248],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Tosi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maUkawina= L.marker([49.487198, 31.271832],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Ukawina</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maWasikano= L.marker([41.90341,12.452855],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Wasikano</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSensa= L.marker([62.973577,17.554912],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Sensa</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");

//ma Osejanija
const maKilipasi= L.marker([1.850895, -157.407944],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Kilipasi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maNusilan= L.marker([-44.144742, 172.535294],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Nusilan</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maOselija= L.marker([-27.799423,136.015175],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Oselija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPapuwanijukini= L.marker([-6.236875,150.267578],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Papuwanijukini</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPisi= L.marker([-17.855302,177.93301],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Pisi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSamowa= L.marker([-13.758217,-172.101059],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Samowa</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maTona= L.marker([-21.233622, -175.137527],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Tona</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maTuwalu= L.marker([-6.289193, 176.321121],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Tuwalu</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maWanuwatu= L.marker([-16.704774,168.392754],{icon: L.spriteIcon('orange')}).addTo(map).bindPopup("<h1>ma Wanuwatu</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");

//laso kasi
const nenamaKilimansalo= L.marker([-3.06666,37.35918],{icon: L.spriteIcon('green')}).addTo(map).bindPopup("<h1>nena ma Kilimansalo</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/nena_ma_Kilimansalo'>lipu Wikipesija</a></p>");
const nenamaSomolama= L.marker([27.988054,86.925008],{icon: L.spriteIcon('green')}).addTo(map).bindPopup("<h1>nena ma Somolama</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/nena_ma_Somolama'>lipu Wikipesija</a></p>");
const nenamaTakoma= L.marker([46.853045,-121.760595],{icon: L.spriteIcon('green')}).addTo(map).bindPopup("<h1>nena ma Takoma</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/nena_ma_Takoma'>lipu Wikipesija</a></p>");
const nenamaTawisen= L.marker([35.371428,133.546481],{icon: L.spriteIcon('green')}).addTo(map).bindPopup("<h1>nena ma Tawisen</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/nena_ma_Tawisen'>lipu Wikipesija</a></p>");
const nenaUlulu= L.marker([-25.343797,131.034658],{icon: L.spriteIcon('green')}).addTo(map).bindPopup("<h1>nena Ululu</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/nena_Ululu'>lipu Wikipesija</a></p>");

//ma tomo
//ma Anku
const matomoInsen= L.marker([37.454143,126.703867],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Insen</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Insen'>lipu Wikipesija</a></p>");

//ma Epanja
const matomoAmasan= L.marker([41.486239,-2.532135],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Amasan</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Amasan'>lipu Wikipesija</a></p>");

//ma Isilan
const matomoAkuleli= L.marker([65.678687,-18.112457],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Akuleli</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Akuleli'>lipu Wikipesija</a></p>");
const matomoLekawi= L.marker([64.12616,-21.852621],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Lekawi</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Lekawi'>lipu Wikipesija</a></p>");


//ma Mewika
const matomoNuOlin= L.marker([29.953229,-90.071017],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Nu Olin</h1><p>lipu mama: <a href='https://mun.la/lipu/jan-pi-ma-nu-olin.html'>lipu pi jan Kekan San</a></p>");

//ma Nijon
const matomoJonako= L.marker([35.437685, 133.358421],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Jonako</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Jonako'>lipu Wikipesija</a></p>");
const matomoKijoto= L.marker([34.9842, 135.757937],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Kijoto</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Kijoto'>lipu Wikipesija</a></p>");
const matomoKulajosi= L.marker([35.45457,133.849461],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Kulajosi</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Kulajosi'>lipu Wikipesija</a></p>");
const matomoNala= L.marker([34.676401,135.805934],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Nala</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Nala'>lipu Wikipesija</a></p>");
const matomoNakoja= L.marker([35.147317,136.926369],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Nakoja</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Nakoja'>lipu Wikipesija</a></p>");
const matomoOsaka= L.marker([34.692085,135.504299],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Osaka</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Osaka'>lipu Wikipesija</a></p>");
const matomoSakawiminato= L.marker([35.515491,133.235229],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Sakawiminato</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Sakawiminato'>lipu Wikipesija</a></p>");
const matomoSapolo= L.marker([43.065608,141.374867],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Sapolo</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Sapolo'>lipu Wikipesija</a></p>");
const matomoSatama= L.marker([35.866489,139.644452],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Satama</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Satama'>lipu Wikipesija</a></p>");
const matomoSenta= L.marker([38.261228,140.884926],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Senta</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Senta'>lipu Wikipesija</a></p>");
const matomoSipa= L.marker([35.606416,140.123113],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Sipa</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Sipa'>lipu Wikipesija</a></p>");
const matomoTokijo= L.marker([35.689552, 139.691818],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Tokijo</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Tokijo'>lipu Wikipesija</a></p>");
const matomoTotoli= L.marker([35.49417,134.208769],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Totoli</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Totoli'>lipu Wikipesija</a></p>");

//ma Juke
const matomoSanwelepusukuwinkisikokelekuwelentolopusulantasilijokokokoko= L.marker([53.221246,-4.208922],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Sanwelepusukuwinkisikokelekuwelentolopusulantasilijokokokoko</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Sanwelepusukuwinkisikokelekuwelentolopusulantasilijokokokoko'>lipu Wikipesija</a></p>");

//ma Naselija
const matomoEko= L.marker([6.457397,3.387968],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Eko</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Eko'>lipu Wikipesija</a></p>");

//ma Pesije
const matomoAloseta= L.marker([50.937788,4.041153],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Aloseta</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Aloseta'>lipu Wikipesija</a></p>");
const matomoPuse= L.marker([50.845005,4.358252],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Puse</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Puse'>lipu Wikipesija</a></p>");

//ma Sonko
const matomoApin= L.marker([45.801916,126.535816],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Apin</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Apin'>lipu Wikipesija</a></p>");

//ma Tosi
const matomoAnpu= L.marker([53.547524,9.990728],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Anpu</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Anpu'>lipu Wikipesija</a></p>");
const matomoliliPinikepeke= L.marker([50.737151,6.238785],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo lili Pinikepeke</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_lili_Pinikepeke'>lipu Wikipesija</a></p>");

//ma Tuki
const matomoAnkala= L.marker([39.896181,32.86238],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Ankala</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Ankala'>lipu Wikipesija</a></p>");
const matomoAntalija= L.marker([36.886537,30.711361],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Antalija</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Antalija'>lipu Wikipesija</a></p>");
const matomoIsumi= L.marker([38.416456,27.126095],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Isumi</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Isumi'>lipu Wikipesija</a></p>");
const matomoItanpu= L.marker([41.010135,28.974358],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Itanpu</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Itanpu'>lipu Wikipesija</a></p>");
const matomoKonija= L.marker([37.872581,32.492203],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Konija</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Konija'>lipu Wikipesija</a></p>");
const matomoManisa= L.marker([38.6184,27.424338],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Manisa</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Manisa'>lipu Wikipesija</a></p>");
const matomoPolu= L.marker([40.730798,31.598023],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Polu</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Polu'>lipu Wikipesija</a></p>");
const matomoPusa= L.marker([40.192108,29.062499],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Pusa</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Pusa'>lipu Wikipesija</a></p>");
const matomoSansun= L.marker([41.289458,36.339977],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Sansun</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Sansun'>lipu Wikipesija</a></p>");
const matomoSijapaku= L.marker([37.914451,40.222562],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Sijapaku</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Sijapaku'>lipu Wikipesija</a></p>");
const matomoWan= L.marker([38.503756,43.395578],{icon: L.spriteIcon('blue')}).addTo(map).bindPopup("<h1>ma tomo Wan</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_tomo_Wan'>lipu Wikipesija</a></p>");

//ma ante
//ma Nijon
const maOkato= L.marker([43.498059,142.58213],{icon: L.spriteIcon('purple')}).addTo(map).bindPopup("<h1>ma Okato</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_Okato'>lipu Wikipesija</a></p>");
const maSisujoka= L.marker([35.121783,138.327568],{icon: L.spriteIcon('purple')}).addTo(map).bindPopup("<h1>ma Sisujoka</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_Sisujoka'>lipu Wikipesija</a></p>");
const maTotoli= L.marker([35.335241,133.828598],{icon: L.spriteIcon('purple')}).addTo(map).bindPopup("<h1>ma Totoli</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_Totoli'>lipu Wikipesija</a></p>");

//ma Pesije
const maPantelen= L.marker([51,4.5],{icon: L.spriteIcon('purple')}).addTo(map).bindPopup("<h1>ma Pantelen</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_Pantelen'>lipu Wikipesija</a></p>");