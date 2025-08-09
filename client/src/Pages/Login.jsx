import React, { useState } from "react";

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mobile) return alert("Please enter mobile number");
    alert(`OTP sent to +91 ${mobile}`);
    // Add OTP flow or redirect logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-rose-50 ">
      <div className="max-w-md w-full bg-white shadow-lg overflow-hidden pb-20 my-10">

        {/* Banner */}
        <img
          src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2025/7/22/0c40543a-4c7d-4c8d-b846-017c317a280a1753193775786-Unisex-[300-off].jpg"
          alt="Login Banner"
          className="w-full"
        />

        {/* Form */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Login <span className="text-gray-500">or</span>{" "}
            <span className="font-bold">Signup</span>
          </h2>

          <form onSubmit={handleSubmit}>
            <label className="block mb-3 text-sm text-gray-700">
              Mobile Number <span className="text-red-500">*</span>
              <div className="flex items-center border border-gray-300 rounded-md mt-1">
                <span className="px-3 text-gray-500">+91</span>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter your mobile"
                  className="w-full p-2 outline-none"
                  required
                />
              </div>
            </label>

            <label className="flex items-start gap-2 text-sm text-gray-700 mb-4">
              <input type="checkbox" className="mt-1" required onChange={(e) => setIsChecked(e.target.checked)}/>
              <span>
                By continuing, I agree to the{" "}
                <a href="#" className="text-pink-600 font-semibold">Terms of Use</a> &{" "}
                <a href="#" className="text-pink-600 font-semibold">Privacy Policy</a> and I am above 18 years old.
              </span>
            </label>

            <button
              type="submit"
              className={`w-full bg-gray-500 text-white py-2 font-semibold hover:bg-pink-600 ${
          isChecked ? 'bg-pink-600' : 'bg-gray-400 cursor-not-allowed'
        }`}
            >
              CONTINUE
            </button>
          </form>

          <p className="text-sm text-center mt-4 text-gray-600">
            Having trouble logging in?{" "}
            <a href="#" className="text-pink-600 font-semibold">Get help</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
