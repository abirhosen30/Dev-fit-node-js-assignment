import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center">

        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-primary">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl md:text-4xl font-bold">
          NOTHING HERE YET
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-md mx-auto text-base-content/70">
          Sorry, the page you're looking for doesn't exist or may have
          been moved.
        </p>

        <Link
          href="/"
          className="btn btn-primary mt-8 px-8"
        >
          ← Back to Home
        </Link>

      </div>
    </div>
  );
};

export default NotFoundPage;