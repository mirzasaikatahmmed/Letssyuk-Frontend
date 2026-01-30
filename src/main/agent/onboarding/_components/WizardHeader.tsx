import logo from "@/assets/logo/logo.png";

export default function WizardHeader() {
  return (
    <div className="text-center mb-8 ">
      <div className=" flex justify-center items-center gap-0">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome to</h1>
        <div className="flex justify-center  w-48 h-22 overflow-hidden">
          <img src={logo} alt="" className="scale-150 object-cover" />
        </div>
      </div>

      
      <p className="text-gray-400 text-sm">
        Let&apos;s set up your club dashboard in a few steps
      </p>
    </div>
  );
}
