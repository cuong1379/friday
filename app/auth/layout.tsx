const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="h-full flex items-center justify-center bg-ln-dark"
    >
      {children}
    </div>
  );
};

export default AuthLayout;
