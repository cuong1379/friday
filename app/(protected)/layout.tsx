'use client'

import AdminLayout from "@/components/layouts/admin-layout";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-ln-dark">
      <AdminLayout>{children}</AdminLayout>
    </div>
  );
};

export default ProtectedLayout;
