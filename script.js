// Konfigurasi SweetAlert2 untuk tema putih
const swalWhiteTheme = Swal.mixin({
    background: '#ffffff',
    color: '#333333',
    confirmButtonColor: '#003EFF',
    cancelButtonColor: '#ff3333',
    allowOutsideClick: false,
    confirmButtonText: 'Lanjut',
    allowEscapeKey: false
});

// Variabel global
window.nama = '';
const bgMusic = document.getElementById('bgMusic');
let salahCount = 0;

// Pesan WhatsApp
function bukaWa() {
    window.location = "https://api.whatsapp.com/send?phone=082372292696&text=" +
        encodeURIComponent("Hai Awan! Aku udah liat ucapan ultahnya. Keren banget! 😍") +
        "%0A%0A" +
        encodeURIComponent("Nanti aku traktir milku satu truck 😆");
}

// Fungsi untuk memutar musik
function playMusic() {
    bgMusic.volume = 0.5;
    const playPromise = bgMusic.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            // Autoplay diblokir, tunggu interaksi pengguna
            document.addEventListener('click', function musicStarter() {
                bgMusic.play();
                document.removeEventListener('click', musicStarter);
            });
        });
    }
}

async function mulai() {
    try {
        const { value: nama } = await swalWhiteTheme.fire({
            title: 'Siapa nama kamu?',
            input: 'text',
            inputPlaceholder: 'Masukkan nama kamu',
            showCancelButton: false
        });

        if (!nama || nama.length > 10) {
            await swalWhiteTheme.fire({
                title: 'Ups!',
                text: 'Nama gabole kosong atau kebanyakannn',
                icon: 'warning'
            });
            return mulai();
        }

        if (nama.toLowerCase() !== 'acaa') {
            salahCount++;

            if (salahCount === 1) {
                await swalWhiteTheme.fire({
                    title: 'No,no!',
                    html: `Nama kamu bukan <b>${nama}</b>, tapi harusnya <b>Acaa</b>! 😝`,
                    icon: 'error'
                });
                return mulai();
            }
            else if (salahCount === 2) {
                await swalWhiteTheme.fire({
                    title: 'Hahaha!',
                    html: 'Kan udah di bilangin nama kamu tu Acaa, ngeyel banget sii! masukin nya Acaa, Huruf A nya ada 2 😤',
                    icon: 'error'
                });
                return mulai();
            }
            else {
                await swalWhiteTheme.fire({
                    title: 'Dahlah!',
                    html: 'Intinya aku tau nya kamu Acaa deh! 😅',
                    icon: 'info'
                });
                window.nama = 'Acaa';
                lanjutKeUcapan();
                return;
            }
        }

        window.nama = nama;
        lanjutKeUcapan();
    } catch (error) {
        console.error("Error:", error);
    }
}

async function lanjutKeUcapan() {
    await swalWhiteTheme.fire({
        title: `Hai ${window.nama} manis! 💖`,
        text: 'Siap-siap dapat kejutan!'
    });

    await swalWhiteTheme.fire({
        title: 'Cieee yang ultahh~ 🥳',
        text: 'Semoga makin cantik ya!'
    });

    await swalWhiteTheme.fire({
        title: 'Selamat ulang tahun! 🎉',
        text: 'Semoga semua harapanmu terkabul!'
    });

    await swalWhiteTheme.fire({
        title: 'Panjang umur & sehat selalu! 💪',
        html: 'Semoga makin sukses dan bahagia! <3'
    });

    pilihwarna();
}

async function pilihwarna() {
    try {
        const { isConfirmed: pilihBiru } = await swalWhiteTheme.fire({
            title: `${window.nama}, mau warna apa nih?`,
            text: 'Pilih dengan hati-hati ya~ 😉',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: '💙 Biru',
            cancelButtonText: '❤️ Merah'
        });

        if (pilihBiru) {
            await swalWhiteTheme.fire({
                title: 'Wih pilih Biru! 💙',
                html: 'Kalau pilih Biru berarti harus traktirin aku ya! 😝'
            });

            const { isConfirmed: yakinBiru } = await swalWhiteTheme.fire({
                title: `${window.nama} yakin pilih Biru?`,
                text: 'Boleh diganti lho warna nya~',
                showCancelButton: true,
                confirmButtonText: 'Yakin Biru!',
                cancelButtonText: 'Ganti Merah'
            });

            if (yakinBiru) {
                await swalWhiteTheme.fire({
                    title: 'Oke deal! 💙',
                    html: 'Sekarang lihat kejutannya ya! 🎁'
                });
            } else {
                await swalWhiteTheme.fire({
                    title: 'Oke pilih Merah! ❤️',
                    html: 'Wah berarti traktirannya harus double ya! 😆'
                });
            }
        } else {
            await swalWhiteTheme.fire({
                title: 'Wah pilih Merah! ❤️',
                html: 'Kalau pilih Merah berarti traktirannya double ya! 🤑'
            });

            const { isConfirmed: yakinMerah } = await swalWhiteTheme.fire({
                title: `${window.nama} yakin pilih Merah?`,
                text: 'Boleh diganti lho warna nya~',
                showCancelButton: true,
                confirmButtonText: 'Ganti Biru',
                cancelButtonText: 'Yakin Merah!'
            });

            if (yakinMerah) {
                await swalWhiteTheme.fire({
                    title: 'Oke pilih Merah! ❤️',
                    html: 'Sekarang lihat kejutannya ya! 🎁'
                });
            } else {
                await swalWhiteTheme.fire({
                    title: 'Oke pilih Biru! 💙',
                    html: 'Wah berarti traktirannya cukup sekali ya! 😄'
                });
            }
        }

        expl();
    } catch (error) {
        console.error("Error:", error);
    }
}

function expl() {
    document.getElementById('konten').style.visibility = "visible";
    document.getElementById('konten').style.opacity = "1";
    setTimeout(duar, 200);
}

function duar() {
    document.getElementById('fotoloveu').style.opacity = "1";
    document.querySelector('.marquee-content').style.visibility = "visible";
    setTimeout(tombol, 4000);
    setInterval(createHeart, 200);

    // Memutar musik saat halaman terakhir muncul
    playMusic();
}

function tombol() {
    document.getElementById('tombWA').style.visibility = "visible";
    document.getElementById('tombWA').style.opacity = "1";
}

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = (Math.random() * 90) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
    heart.style.fontSize = (Math.random() * 10 + 15) + "px";
    heart.style.color = `hsl(${Math.random() * 60 + 330}, 100%, 70%)`; // Warna pink/merah random
    document.body.appendChild(heart);
}

// Cleanup hearts to prevent memory issues
setInterval(() => {
    const hearts = document.querySelectorAll(".fa-heart");
    if (hearts.length > 100) {
        hearts[0].remove();
    }
}, 100);

// Start the experience
window.addEventListener('load', function() {
    // Beri jeda singkat untuk memastikan semua elemen siap dirender
    setTimeout(mulai, 100); 
});
