Filmleri mock json'dan çekiyor favoriye ekleme, film arama ve paylaşma özellikleri var.
State yönetimi için Redux Toolkit kullandım ui kısmı için çok vakit harcamadım amacımız doğrultusunda ilerlemek istedim bu sebeple arayüzde Styled Components var ve çok detaylandırmadım.
Paylaşmak için native share modülünü ekledim. Ufak tefek testler de ekledim (MovieCard için vs.).
Film verileri data/mockMovies.json içerisinde fakat buradaki veri yapısında veriler per_page gibi bir alanda bulunmuyor. Tek bir sayfada görünüyor. Film verilerinden çok aralarda kalabalık olarak oyuncu bilgileri var. Hepsi film bilgisi değil. Task içerisindeki örnek JSON yapısı olarak verdiğiniz bilgileri de apiye koydum fakat bu şekilde bir yapıda film listelemesi yapmadım mock'dan dönen veriye göre hareket ettim. Sayfalama yaparken de veritabanı içinde 20 film vardı ve ben de 10 film bilgisi çekerek sonrasında InfiniteScroll ile sayfalama yapmaya çalıştım. Bu sebeple Api içerisinde page çağrısı yapmaya gerek yoktu ama en başında sayfalama yaparken bu şekilde bir yöntem uygulayacaktım. Gerçek bir proje yazacak olsaydık Back-Endimizden page çağrısı yapacaktık. Film verilerinini json dosyasına çevirirken postman ile mock veriyi düzenleyerek kullandım.

Android cihazda test edildi, DevTools console kontrol edildi, çalışıyor.
iOS için test yapmadım, çünkü siz APK istemiştiniz ama gerekirse pod yükleyerek iOS testlerini de yapabilirim.

Kurulum için npm install
npx react-native run-android

Bir hata ile karşılaşırsanız ya da eksik olduğunu düşündüğünüz bir şey olursa düzeltmek isterim.
APK dosyasını da size sundum.
