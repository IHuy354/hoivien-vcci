"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldX } from "lucide-react";

export default function ForbiddenPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
          <ShieldX className="h-12 w-12 text-red-600" />
        </div>
        <h1 className="mb-2 text-4xl font-bold text-gray-900">403</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">
          Truy cập bị từ chối
        </h2>
        <p className="mb-8 text-gray-600">
          Bạn không có quyền truy cập vào trang này.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <Button>Về trang chủ</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
