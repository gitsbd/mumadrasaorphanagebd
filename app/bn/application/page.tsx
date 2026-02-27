"use client";

import { Suspense } from "react";
import ApplicationBnInner from "./inner";

export default function ApplicationBn() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-islamic-green mx-auto mb-4" />
            <p className="bangla-text text-gray-600">ফরম লোড হচ্ছে...</p>
          </div>
        </div>
      }
    >
      <ApplicationBnInner />
    </Suspense>
  );
}

