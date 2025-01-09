import React from 'react';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 bg-background">
      {/* Hero Section */}
      <div className="max-w-3xl text-center">
        <h1 className="mb-6 text-6xl font-bold tracking-tight text-foreground">
          Panduan Bagi Admin
        </h1>
        <p className="mb-12 text-xl text-fd-muted-foreground">
          Dokumentasi pengaturan akun dari mulai menambahkan member, mengatur model, memasang API Key, mengaktifkan plugin, dan lain sebagainya.
        </p>

        <p className="mb-6 text-fd-muted-foreground">
        Buka halaman{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{' '}
        untuk melihat panduan.
      </p>
      </div>

      {/* Card Section */}
      <div className="w-full max-w-xl">
        <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
          {/* Card Header */}
          <div className="border-b bg-muted/50 p-6">
            <div className="flex items-center">
              <BookOpen className="mr-3 h-5 w-5" />
              <h2 className="text-xl font-semibold">Tentang MAIA ID</h2>
              <div className="ml-auto">
                <div className="h-6 w-6 rounded-sm bg-primary" />
              </div>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
            MAIA adalah platform yang memungkinkan komunitas, perusahaan
            dan institusi untuk membuat ChatGPT kustom versi mereka sendiri.
            </p>
          </div>

          {/* Card Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold">White-Label</h3>
            <p className="mt-2 text-muted-foreground">
              Buat ChatGPT kustom versi sendiri untuk tim dan institusimu.
            </p>

            <div className="mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">Fitur:</h4>
                  <p className="text-sm text-muted-foreground">
                  Mendukung banyak model Al (ChatGPT GPT4, Google Gemini, Claude, Perplexity, dil) Unlimited
                  User, No Limit Per-jam | Baca dokumen PDF, DOC, PPT dan XLS | Buat gambar Al Whitelabel | GPTs
                  dan Prompt Library | Dan banyak fitur Al lainnya.
                  </p>
                </div>
                <div className="h-8 w-8 rounded-full bg-muted" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;