const newMahasiswaData = {
    nim: '2022004011',
    nama: 'Patiah',
    gender: 'P',
    prodi: 'TE',
    alamat: 'Jl.Raya Cibungur'
};

fetch('http://localhost:3000/mahasiswa', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newMahasiswaData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
