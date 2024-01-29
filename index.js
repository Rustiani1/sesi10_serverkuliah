const mahasiswaNim = '2022004010';
const updateData = {
    nama: 'cintak',
    gender: 'L',
    prodi: 'TE',
    alamat: 'Bogor'
};

fetch (`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));