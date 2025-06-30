// Konfigurasi SweetAlert2 untuk tema putih
const swalWhiteTheme = Swal.mixin({
    background: '#ffffff',
    confirmButtonColor: '#003EFF',
    cancelButtonColor: '#ff3333',
    allowOutsideClick: false,
    confirmButtonText: 'Lanjut',
    allowEscapeKey: false,
    customClass: {
        // Kita definisikan nama class kustom di sini
        popup: 'swal-white-popup',
        title: 'swal-white-title',
        htmlContainer: 'swal-white-html-container'
    }
});

// Variabel global
window.nama = '';
const bgMusic = document.getElementById('bgMusic');
let salahCount = 0;
let isMusicPlaying = false;

// Fungsi kontrol musik
function playMusic() {
    bgMusic.volume = 0.5;
    bgMusic.play().then(() => {
        isMusicPlaying = true;
    }).catch(error => {
        console.log("Autoplay blocked:", error);
        document.addEventListener('click', function musicStarter() {
            bgMusic.play();
            isMusicPlaying = true;
            document.removeEventListener('click', musicStarter);
        }, { once: true });
    });
}

function stopMusic() {
    if (isMusicPlaying) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
        isMusicPlaying = false;
    }
}

// Event listeners untuk kontrol musik
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopMusic();
    } else if (!isMusicPlaying) {
        playMusic();
    }
});

window.addEventListener('pagehide', stopMusic);
window.addEventListener('beforeunload', stopMusic);

// Pesan WhatsApp
function bukaWa() {
    window.location = "https://api.whatsapp.com/send?phone=082372292696&text=" +
        encodeURIComponent("Hai Awan! Aku udah liat ucapan ultahnya. Keren banget! 😍") +
        "%0A%0A" +
        encodeURIComponent("Nanti aku traktir milku satu truck 😆");
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
                    html: `Nama kamu bukan <b>${nama}</b>, tapi harusnya <b>acaa</b>! 😝`,
                    icon: 'error'
                });
                return mulai();
            }
            else if (salahCount === 2) {
                await swalWhiteTheme.fire({
                    title: 'Hahaha!',
                    html: 'Kan udah di bilangin nama kamu tu acaa, ngeyel banget sii! masukin nya Acaa, Huruf A nya ada 2 😤',
                    icon: 'error'
                });
                return mulai();
            }
            else {
                await swalWhiteTheme.fire({
                    title: 'Dahlah!',
                    html: 'Intinya aku tau nya kamu acaa deh! 😑',
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
        title: `Hai ${window.nama} kyutttt! 💖`,
        text: 'Siap-siap dapat kejutan!'
    });

    await swalWhiteTheme.fire({
        title: 'Cieee yang ultahh~ 😝',
        text: 'Semoga makin cantik ya!'
    });

    await swalWhiteTheme.fire({
        title: 'Selamat ulang tahun! 🎉',
        text: 'Semoga semua harapanmu terkabul!'
    });

    await swalWhiteTheme.fire({
        title: 'Panjang umur & sehat selalu! 🤗',
        html: 'Semoga makin sukses dan bahagia! <3'
    });

    pilihwarna();
}

async function pilihwarna() {
    try {
        const { isConfirmed: pilihBiru } = await swalWhiteTheme.fire({
            title: `${window.nama}, mau warna apa enih?`,
            text: 'Pilih nya tiati yaaa~ 😏',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: '💙 Biru',
            cancelButtonText: '❤️ Merah'
        });

        if (pilihBiru) {
            await swalWhiteTheme.fire({
                title: 'Jir pilih Biru! 💙',
                html: 'Kalau pilih Biru berarti harus traktirin aku ya! 😝'
            });

            const { isConfirmed: yakinBiru } = await swalWhiteTheme.fire({
                title: `${window.nama} yakin pilih Biru?`,
                text: 'Boleh ganti loh warna nya~',
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
                title: 'Kok pilih Merah si! ❤️',
                html: 'Kalau pilih Merah berarti traktirannya double ya! 🤑'
            });

            const { isConfirmed: yakinMerah } = await swalWhiteTheme.fire({
                title: `${window.nama} yakin pilih Merah?`,
                text: 'Bisa ganti dek warna nya~',
                showCancelButton: true,
                confirmButtonText: 'Yakin Merah!',
                cancelButtonText: 'Ganti Biru',
                confirmButtonColor: '#ff3333',
                cancelButtonColor: '#003EFF'
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
    heart.style.color = `hsl(${Math.random() * 60 + 330}, 100%, 70%)`;
    document.body.appendChild(heart);
}

// Cleanup hearts
setInterval(() => {
    const hearts = document.querySelectorAll(".fa-heart");
    if (hearts.length > 100) {
        hearts[0].remove();
    }
}, 100);

// Start the experience
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(mulai, 100);
});