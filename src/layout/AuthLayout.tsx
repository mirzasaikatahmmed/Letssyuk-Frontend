import { Outlet } from "react-router";
import authBg from "@/assets/auth/auth_bg.png";

const AuthLayout = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${authBg})` }}
      />
      {/* <div className="absolute inset-0 bg-black/55" /> */}

      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-130">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
