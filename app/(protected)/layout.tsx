import AdminLayout from "@/components/layouts/admin-layout";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-ln-dark">
      <AdminLayout>{children}</AdminLayout>
    </div>
  );
};

export default ProtectedLayout;
