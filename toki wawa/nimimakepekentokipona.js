var map = L.map('map').setView([0, 0], 1);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//ma pi suli mute
const maAmelika = L.marker([19, -96]).addTo(map).bindPopup("<h1>ma Amelika</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maAntasika = L.marker([-90, 0]).addTo(map).bindPopup("<h1>ma Antasika</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maApika = L.marker([0, 30]).addTo(map).bindPopup("<h1>ma Apika</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maAsija = L.marker([45, 100]).addTo(map).bindPopup("<h1>ma Asija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maElopa = L.marker([55, 20]).addTo(map).bindPopup("<h1>ma Elopa</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maOsejanija = L.marker([-15, 180]).addTo(map).bindPopup("<h1>ma Osejanija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");

//ma suli
//ma Apika
const maAnkola = L.marker([-11.274034,17.774308]).addTo(map).bindPopup("<h1>ma Ankola</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maEliteja = L.marker([15.232312,39.866768]).addTo(map).bindPopup("<h1>ma Eliteja</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maIsijopija = L.marker([9.192518, 40.489983]).addTo(map).bindPopup("<h1>ma Isijopija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKamelun = L.marker([7.404583, 12.286659]).addTo(map).bindPopup("<h1>ma Kamelun</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKana = L.marker([7.87033, -0.993746]).addTo(map).bindPopup("<h1>ma Kana</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKanpija = L.marker([13.440882,-15.410078]).addTo(map).bindPopup("<h1>ma Kanpija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKapon = L.marker([-0.905242, 11.514622]).addTo(map).bindPopup("<h1>ma Kapon</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKenja = L.marker([0.062279,37.90822]).addTo(map).bindPopup("<h1>ma Kenja</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKine = L.marker([9.944623, -11.602987]).addTo(map).bindPopup("<h1>ma Kine</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKinejekatolija = L.marker([1.159305, 8.414328]).addTo(map).bindPopup("<h1>ma Kinejekatolija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKinepisa = L.marker([11.670696,-15.266189]).addTo(map).bindPopup("<h1>ma Kinepisa</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKomo = L.marker([-12.075489,43.899637]).addTo(map).bindPopup("<h1>ma Komo</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maKonkopimatomoKinsasa = L.marker([-4.08881,21.672375]).addTo(map).bindPopup("<h1>ma Konko pi ma tomo Kinsasa</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_Konko_pi_ma_tomo_Kinsasa'>lipu Wikipesija</a></p>");
const maKonkopimatomoPasawi = L.marker([-0.720169,14.843614]).addTo(map).bindPopup("<h1>ma Konko pi ma tomo Pasawi</h1><p>lipu mama: <a href='https://wikipesija.org/wiki/ma_Konko_pi_ma_tomo_Pasawi'>lipu Wikipesija</a></p>");
const maKosiwa = L.marker([7.463522,-5.548176]).addTo(map).bindPopup("<h1>ma Kosiwa</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maLapewija = L.marker([6.358456,-9.4877]).addTo(map).bindPopup("<h1>ma Lapewija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maLesoto = L.marker([-29.629811,28.233542]).addTo(map).bindPopup("<h1>ma Lesoto</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maLipija = L.marker([26.636885,17.384072]).addTo(map).bindPopup("<h1>ma Lipija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maLuwanta = L.marker([-1.943824,29.880385]).addTo(map).bindPopup("<h1>ma Luwanta</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maMalakasi = L.marker([-18.905727,46.82037]).addTo(map).bindPopup("<h1>ma Malakasi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maMalawi = L.marker([-13.279956,34.295216]).addTo(map).bindPopup("<h1>ma Malawi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maMali = L.marker([17.728035,-3.98645]).addTo(map).bindPopup("<h1>ma Mali</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maMalipe = L.marker([31.172821, -7.336248]).addTo(map).bindPopup("<h1>ma Malipe</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maMasu = L.marker([26.937171,30.243217]).addTo(map).bindPopup("<h1>ma Masu</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maMosanpi = L.marker([-18.827471,35.633378]).addTo(map).bindPopup("<h1>ma Mosanpi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maMowisi = L.marker([-15.49976,60.048712]).addTo(map).bindPopup("<h1>ma Mowisi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maMulitanija = L.marker([21.151652,-11.035715]).addTo(map).bindPopup("<h1>ma Mulitanija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maNamipija = L.marker([-23.100427,18.394884]).addTo(map).bindPopup("<h1>ma Namipija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maNaseliija = L.marker([9.010687,8.677473]).addTo(map).bindPopup("<h1>ma Naselija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maNise = L.marker([17.70263,8.082816]).addTo(map).bindPopup("<h1>ma Nise</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPenen = L.marker([9.238929,2.310906]).addTo(map).bindPopup("<h1>ma Penen</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPosuwana = L.marker([-22.417515,24.686268]).addTo(map).bindPopup("<h1>ma Posuwana</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maPukinapaso = L.marker([12.262498,-1.552118]).addTo(map).bindPopup("<h1>ma Pukinapaso</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSanpija = L.marker([-13.224792,27.853955]).addTo(map).bindPopup("<h1>ma Sanpija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSantapiken = L.marker([6.631696,20.940698]).addTo(map).bindPopup("<h1>ma Santapiken</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSasali = L.marker([28.528975,1.664215]).addTo(map).bindPopup("<h1>ma Sasali</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSate = L.marker([15.601766,18.73674]).addTo(map).bindPopup("<h1>ma Sate</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSawasi = L.marker([-26.520694,31.462893]).addTo(map).bindPopup("<h1>ma Sawasi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSeneka = L.marker([14.47506, -14.452961]).addTo(map).bindPopup("<h1>ma Seneka</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSetapika = L.marker([-28.767075,25.02]).addTo(map).bindPopup("<h1>ma Seneka</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSijelalijon = L.marker([8.380871,-11.886011]).addTo(map).bindPopup("<h1>ma Sijelalijon</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSinpapuwe = L.marker([-19.051879,29.152824]).addTo(map).bindPopup("<h1>ma Sinpapuwe</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSipusi = L.marker([11.855246,42.714609]).addTo(map).bindPopup("<h1>ma Sipusi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSomalija = L.marker([8.367677, 49.083416]).addTo(map).bindPopup("<h1>ma Somalija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maSutan = L.marker([14.584444, 29.49177]).addTo(map).bindPopup("<h1>ma Sutan</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maTansanija = L.marker([-6.524712, 35.787846]).addTo(map).bindPopup("<h1>ma Tansanija</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maToko = L.marker([8.780026, 1.019976]).addTo(map).bindPopup("<h1>ma Toko</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maTunisi = L.marker([34.078796,9.701047]).addTo(map).bindPopup("<h1>ma Tunisi</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");
const maUkanta = L.marker([1.377593,32.28687]).addTo(map).bindPopup("<h1>ma Ukanta</h1><p>lipu mama: <a href='https://sona.pona.la/wiki/Source:Toki_Pona:_The_Language_of_Good/Place_Names'>lipu pu</a></p>");