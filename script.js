document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // mencegah form reload
        alert('Pesan berhasil dikirim');
        form.reset(); // (opsional) mengosongkan field setelah submit
    });
});
