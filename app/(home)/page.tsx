import React from 'react';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 bg-background">
      {/* Hero Section */}
      <div className="max-w-3xl text-center">
        <h1 className="mb-6 text-6xl font-bold tracking-tight text-foreground">
          Start building with Next.js
        </h1>
        <p className="mb-12 text-xl text-muted-foreground">
          Go from beginner to expert by learning the foundations of Next.js and building
          a fully functional demo website that uses all the latest features.
        </p>

        <p className="mb-6 text-fd-muted-foreground">
        You can open{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{' '}
        and see the documentation.
      </p>
      </div>

      {/* Card Section */}
      <div className="w-full max-w-xl">
        <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
          {/* Card Header */}
          <div className="border-b bg-muted/50 p-6">
            <div className="flex items-center">
              <BookOpen className="mr-3 h-5 w-5" />
              <h2 className="text-xl font-semibold">Learn Next.js</h2>
              <div className="ml-auto">
                <div className="h-6 w-6 rounded-sm bg-primary" />
              </div>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Chapter 1: Getting Started
            </p>
          </div>

          {/* Card Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold">Learn Next.js</h3>
            <p className="mt-2 text-muted-foreground">
              16 chapters that take you from React to Next.js.
            </p>

            <div className="mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">Chapter 1: Getting Started</h4>
                  <p className="text-sm text-muted-foreground">
                    Dive into the course materials
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