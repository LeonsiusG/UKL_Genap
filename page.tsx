'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  const categories = [
    { name: 'Sabuk', id: 1 },
    { name: 'Dasi', id: 2 },
    { name: 'Hasduk', id: 3 },
    { name: 'Almamater', id: 4 },
    { name: 'Seragam', id: 5 },
    { name: 'Kaos Kaki', id: 6 },
  ];

  const products = [
    { name: 'Almamater', id: 1 },
    { name: 'Sabuk', id: 2 },
    { name: 'Seragam', id: 3 },
    { name: 'Dasi', id: 4 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-200 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Atributo : Pusat Atribut Sekolah</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Lengkapi kebutuhan seragam, topi, dasi, hingga ikat pinggang sekolah putra-putri Anda dalam satu tempat. Tanpa antri, sap kirim ke rumah.
        </p>
        <Link
          href="/login"
          className="inline-block bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
        >
          Belanja Sekarang
        </Link>
      </section>

      {/* About Section */}
      <section className="py-16 px-8">
        <div className="flex items-center gap-12 max-w-6xl mx-auto">
          {/* Left Image */}
          <div className="flex-1 h-64 relative">
            <Image
              src="/images/arknights.png"
              alt="Atributo"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 underline">Kenapa Harus Belanda di Atributo ?</h2>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Semua atribut hogo, warna, ukuran disepake dengan aturan resmi dinas pendidikan/sekolah.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Menggunakan bahan yang awet, tidak panas, dan nyaman.</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Tidak perlu repot datang ke koperasi sekolah atau pasar, cupo pesan dari rumah dan barang akan diantar.</span>
              </li>
            </ul>
            <Link
              href="/login"
              className="inline-block bg-gray-300 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-600 transition"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Kategori Produk</h2>
          <p className="text-center text-gray-600 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit pellentesque.
          </p>

          {/* Grid Layout */}
          <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(3, auto)' }}>
            {/* Sabuk */}
            <div className="h-40 rounded-lg overflow-hidden relative" style={{ gridColumn: '1', gridRow: '1' }}>
              <Image
                src="/images/arknights.png"
                alt="Sabuk"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="font-bold text-lg text-white">Sabuk</span>
              </div>
            </div>

            {/* Dasi (Center, Taller) */}
            <div className="h-80 rounded-lg overflow-hidden relative" style={{ gridColumn: '2', gridRow: '1 / 3' }}>
              <Image
                src="/images/arknights.png"
                alt="Dasi"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="font-bold text-lg text-white">Dasi</span>
              </div>
            </div>

            {/* Hasduk */}
            <div className="h-40 rounded-lg overflow-hidden relative" style={{ gridColumn: '3', gridRow: '1' }}>
              <Image
                src="/images/arknights.png"
                alt="Hasduk"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="font-bold text-lg text-white">Hasduk</span>
              </div>
            </div>

            {/* Almamater (Left, Taller) */}
            <div className="h-80 rounded-lg overflow-hidden relative" style={{ gridColumn: '1', gridRow: '2 / 4' }}>
              <Image
                src="/images/arknights.png"
                alt="Almamater"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="font-bold text-lg text-white">Almamater</span>
              </div>
            </div>

            {/* Kaos Kaki (Center Bottom) */}
            <div className="h-40 rounded-lg overflow-hidden relative" style={{ gridColumn: '2', gridRow: '3' }}>
              <Image
                src="/images/arknights.png"
                alt="Kaos Kaki"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="font-bold text-lg text-white">Kaos Kaki</span>
              </div>
            </div>

            {/* Seragam (Right, Taller) */}
            <div className="h-80 rounded-lg overflow-hidden relative" style={{ gridColumn: '3', gridRow: '2 / 4' }}>
              <Image
                src="/images/arknights.png"
                alt="Seragam"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="font-bold text-lg text-white">Seragam</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)' }}>
            {/* Almamater - Left (Taller) */}
            <div className="h-96 rounded-xl overflow-hidden relative shadow-lg hover:shadow-xl transition-shadow" style={{ gridColumn: '1', gridRow: '1 / 3' }}>
              <Image
                src="/images/arknights.png"
                alt="Almamater"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors">
                <span className="font-bold text-2xl text-white">Almamater</span>
              </div>
            </div>

            {/* Sabuk - Top Center */}
            <div className="h-44 rounded-xl overflow-hidden relative shadow-lg hover:shadow-xl transition-shadow" style={{ gridColumn: '2', gridRow: '1' }}>
              <Image
                src="/images/arknights.png"
                alt="Sabuk"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors">
                <span className="font-bold text-2xl text-white">Sabuk</span>
              </div>
            </div>

            {/* Seragam - Right (Taller) */}
            <div className="h-96 rounded-xl overflow-hidden relative shadow-lg hover:shadow-xl transition-shadow" style={{ gridColumn: '3', gridRow: '1 / 3' }}>
              <Image
                src="/images/arknights.png"
                alt="Seragam"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors">
                <span className="font-bold text-2xl text-white">Seragam</span>
              </div>
            </div>

            {/* Dasi - Bottom Center */}
            <div className="h-44 rounded-xl overflow-hidden relative shadow-lg hover:shadow-xl transition-shadow" style={{ gridColumn: '2', gridRow: '2' }}>
              <Image
                src="/images/arknights.png"
                alt="Dasi"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors">
                <span className="font-bold text-2xl text-white">Dasi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 px-8">
        <div className="max-w-6xl mx-auto flex items-start justify-between mb-8">
          {/* About - Left */}
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-4">Atributo</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus blandit sapien, eu porttitor nisi.
            </p>
          </div>

          {/* Center Section - Categories and Customer Care */}
          <div className="flex-1 flex justify-center gap-30">
            {/* Categories - Center Left */}
            <div>
              <h3 className="font-bold mb-4">Kategori</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li><Link href="#" className="hover:text-black">Dasi</Link></li>
                <li><Link href="#" className="hover:text-black">Sabuk</Link></li>
                <li><Link href="#" className="hover:text-black">Almamater</Link></li>
                <li><Link href="#" className="hover:text-black">Hasduk</Link></li>
                <li><Link href="#" className="hover:text-black">Kaos Kaki</Link></li>
              </ul>
            </div>

            {/* Customer Care - Center Right */}
            <div>
              <h3 className="font-bold mb-4">Customer Care</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li><Link href="#" className="hover:text-black">FAQ</Link></li>
                <li><Link href="#" className="hover:text-black">Kebijakan Atributo</Link></li>
                <li><Link href="#" className="hover:text-black">Cara Memesani</Link></li>
              </ul>
            </div>
          </div>

          {/* Social & Contact - Right */}
          <div className="text-right">
            <div className="flex gap-4 mb-6 justify-end">
              <a href="#" className="text-xl hover:scale-110 transition-transform">💬</a>
              <a href="#" className="text-xl hover:scale-110 transition-transform">📷</a>
              <a href="#" className="text-xl hover:scale-110 transition-transform">👍</a>
              <a href="#" className="text-xl hover:scale-110 transition-transform">𝕏</a>
            </div>
            <p className="text-gray-600 text-sm">Call us on +62 082182310</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-8 text-center text-gray-600 text-sm">
          <p>© 2026 Atributo. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
