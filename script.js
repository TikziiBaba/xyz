// "Evet" butonuna tıklanınca ekranı temizle, mesajı göster ve GIF'i ekle
function acceptProposal() {
    // Sayfayı temizle
    document.body.innerHTML = '';
    
    // Yeni bir mesaj göster
    const message = document.createElement('h1');
    message.innerText = "YUUUPPİİİ! ❤️";  // İstediğiniz mesajı burada değiştirebilirsiniz
    message.style.color = '#f2994a';
    message.style.fontSize = '4em';
    message.style.textAlign = 'center';
    document.body.appendChild(message);

    // GIF eklemek için fonksiyon çağrısı
    addGif();
}

// "Hayır" butonunun üstüne fare gelince, buton rastgele bir yere gitmeli
function moveButton() {
    const button = document.getElementById('hayir');
    
    // Rastgele bir X ve Y pozisyonu
    const randomX = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));

    // Butonun konumunu değiştir
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

// GIF eklemek için
function addGif() {
    const gifContainer = document.createElement('div');
    gifContainer.classList.add('gif-container');
    const gif = document.createElement('img');
    gif.src = 'mcqueen.gif';  // Buraya GIF URL'sini ekleyin
    gif.id = 'gif';
    gifContainer.appendChild(gif);
    document.body.appendChild(gifContainer);
}

// Sayfa yüklendiğinde butonlar için event listener'lar eklemek
window.onload = function() {
    const hayirButton = document.getElementById('hayir');
    const evetButton = document.getElementById('evet');

    hayirButton.addEventListener('mouseenter', moveButton);  // Hayır butonuna mouse geldiğinde hareket etmesini sağlar
    evetButton.addEventListener('click', acceptProposal);  // Evet butonuna tıklandığında mesajı ve GIF'i gösterir
};

// Şifre kontrol fonksiyonu
function checkPassword() {
    const password = document.getElementById("password").value;

    if (password === "log") {
        window.location.href = "satıs.html";
    } else if (password === "30956006122") {
        window.location.href = "profil.html";
    } else if (password === "balım") {
        window.location.href = "balım.html";
    } else if (password === "kargonuzgeldi") {
        window.location.href = "loveTruck.html";
    } else {
        alert("Hatalı şifre! Lütfen tekrar deneyin.");
    }
}

// Dosya indirme fonksiyonu
function downloadFile() {
    // Dosya yolu
    const fileUrl = "rawaccel.zip"; // Dosyanın doğru yolu
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "rawaccel.zip"; // Dosya adı
    document.body.appendChild(link);  // Bağlantıyı DOM'a ekle
    link.click();  // Tıklama simüle et
    document.body.removeChild(link);  // Bağlantıyı DOM'dan kaldır
}
// Mesaj gönderme işlemi
document.getElementById('sendMessage').addEventListener('click', function() {
    const message = document.getElementById('message').value;

    if (message.trim() === "") {
        alert("Lütfen bir mesaj yazın!");
        return;
    }

    // Mesajı kaydetme (örneğin, lokal storage veya sunucuya gönderebilirsiniz)
    // Burada mesajı basitçe localStorage'a kaydedeceğiz (bu veriler sayfa yenilendiğinde kaybolmaz)

    localStorage.setItem('userMessage', message);

    // Kullanıcıya mesaj başarıyla kaydedildiğini bildirme
    document.getElementById('responseMessage').innerText = "Mesajınız başarıyla kaydedildi!";
    
    // Mesaj kutusunu temizle
    document.getElementById('message').value = "";
});
