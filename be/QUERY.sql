-- Membuat database dan menggunakan database tersebut
CREATE DATABASE pemiskuas;
USE pemiskuas;

-- Membuat tabel articles
CREATE TABLE articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    content TEXT NOT NULL,
    category VARCHAR(50),
    date DATE,
    author VARCHAR(100),
    location VARCHAR(255)
);

-- Menampilkan tabel yang ada
SHOW TABLES;

-- Menampilkan semua data dari tabel articles
SELECT * FROM articles;

-- Menambahkan contoh data ke tabel articles
INSERT INTO articles (title, description, content, category, date, author, location) VALUES
    ('Gempa Bumi di Sumatera Utara',
     'Gempa berkekuatan 6,8 SR mengguncang wilayah Sumatera Utara pada pagi hari.',
     'Pada pagi hari, gempa bumi berkekuatan 6,8 SR mengguncang wilayah Sumatera Utara. Pusat gempa berada di kedalaman 15 km di bawah permukaan laut. Warga diimbau untuk tetap waspada terhadap kemungkinan gempa susulan.',
     'Gempa',
     '2025-01-01',
     'BMKG',
     'Sumatera Utara'),
    ('Banjir Bandang di Kalimantan Selatan',
     'Banjir bandang melanda beberapa desa di Kalimantan Selatan setelah hujan deras.',
     'Hujan deras yang berlangsung selama beberapa hari menyebabkan banjir bandang di Kalimantan Selatan. Beberapa desa terendam air setinggi 1,5 meter, dan warga dievakuasi ke tempat yang lebih aman.',
     'Banjir',
     '2025-01-02',
     'Media Lokal',
     'Kalimantan Selatan'),
    ('Letusan Gunung Sinabung',
     'Gunung Sinabung kembali meletus, mengeluarkan abu vulkanik setinggi 2.000 meter.',
     'Gunung Sinabung di Sumatera Utara kembali meletus, mengeluarkan abu vulkanik setinggi 2.000 meter. PVMBG meningkatkan status gunung menjadi siaga, dan warga di sekitar diminta untuk mengungsi.',
     'Letusan Gunung',
     '2025-01-03',
     'PVMBG',
     'Sumatera Utara'),
    ('Tanah Longsor di Jawa Tengah',
     'Tanah longsor terjadi di daerah pegunungan Jawa Tengah akibat hujan lebat.',
     'Hujan lebat yang mengguyur daerah pegunungan di Jawa Tengah menyebabkan tanah longsor yang menimbun beberapa rumah. Tim SAR dikerahkan untuk mencari korban yang tertimbun.',
     'Longsor',
     '2025-01-04',
     'Tim SAR',
     'Jawa Tengah'),
    ('Topan Tropis di Sulawesi Utara',
     'Topan tropis melanda Sulawesi Utara, menyebabkan kerusakan infrastruktur.',
     'Topan tropis yang melanda Sulawesi Utara menyebabkan kerusakan pada infrastruktur dan rumah warga. Pemerintah setempat telah menyiapkan posko darurat untuk membantu para korban.',
     'Topan',
     '2025-01-05',
     'BMKG',
     'Sulawesi Utara');

-- Menampilkan semua data dari tabel articles setelah penambahan data
SELECT * FROM articles;

-- Menambahkan kolom link_img ke tabel articles
ALTER TABLE articles ADD link_img TEXT;
