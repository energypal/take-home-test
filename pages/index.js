import Head from "next/head";
import { useForm } from "react-hook-form";

export default function Home() {
  // Destructure react-hook-form APIs
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const transmitForm = (data) => {
    console.log("SUBMITTING", data);
  };

  console.log("ERRORS obj", errors);
  return (
    <>
      <Head>
        <title>EnergyPal Take-Home Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="font-sans pt-16 pr-8 pl-8 lg:pt-40 lg:pr-32 lg:pl-32 flex flex-col lg:flex-row max-w-[1680px] min-w-[323px] mx-auto">
        {/* TITLE AND TEXT */}
        <header className="flex-1 lg:mr-4">
          <h2 className="text-5xl">Get Started</h2>
          <p className="text-2xl mt-4 mb-8 ">
            Speak to an EnergyPal advisor about our current deals on solar
            panels and home batteries.
          </p>
        </header>

        {/* FORM */}
        <form
          className="flex-1 lg:ml-4 grid lg:grid-cols-2 gap-y-3 lg:gap-y-4 lg:gap-x-8 mb-12"
          onSubmit={handleSubmit(transmitForm)}
        >
          {/* FIRST NAME */}
          <div className="lg:col-start-1">
            <label className="text-mediumGray text-xl" htmlFor="firstName">
              First Name
            </label>
            <input
              className="px-5 border-[2px]  h-12 rounded-full w-full"
              type="text"
              id="firstName"
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName?.type === "required" && (
              <p className="text-sm text-red-600 ml-1 mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* LAST NAME */}
          <div className="lg:col-start-2">
            <label className="text-mediumGray text-xl  " htmlFor="lastName">
              Last Name
            </label>
            <input
              className="w-full px-5 border-[2px] h-12 rounded-full"
              type="text"
              id="lastName"
              {...register("lastName", { required: "Last name is required" })}
            />
            {errors.lastName?.type === "required" && (
              <p className="text-sm text-red-600 ml-1 mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div className="lg:col-start-1 ">
            <label className="text-mediumGray text-xl" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-5 border-[2px] h-12 rounded-full "
              type="email"
              inputMode="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                // Following regex only checks if the value meets this format: ____@____.____
                pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
              })}
            />
            {errors.email?.type === "required" && (
              <p className="text-sm text-red-600 ml-1 mt-1">
                {errors.email.message}
              </p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="text-sm text-red-600 ml-1 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PHONE NUMBER */}
          <div className="lg:col-start-2">
            <label className="text-mediumGray text-xl " htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              className="w-full px-5 border-[2px] h-12 rounded-full"
              type="tel"
              inputMode="tel"
              id="phoneNumber"
              {...register("phoneNumber", {
                required: "Phone number is required",
                minLength: { value: 10, message: "Invalid phone number" },
                maxLength: { value: 10, message: "Invalid phone number" },
              })}
            />
            {errors.phoneNumber?.type === "required" && (
              <p className="text-sm text-red-600 ml-1 mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
            {(errors.phoneNumber?.type === "minLength" ||
              errors.phoneNumber?.type === "maxLength") && (
              <p className="text-sm text-red-600 ml-1 mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* POSTAL CODE */}
          <div className="lg:col-start-1 lg:col-span-2">
            <label className="text-mediumGray text-xl " htmlFor="postalCode">
              Postal Code
            </label>
            <input
              className="w-full px-5 border-[2px] h-12 rounded-full "
              type="text"
              id="postalCode"
              {...register("postalCode", {
                required: "Postal code is required",
                minLength: { value: 6, message: "Invalid postal code" },
                maxLength: { value: 6, message: "Invalid postal code" },
              })}
            />
            {errors.postalCode?.type === "required" && (
              <p className="text-sm text-red-600 ml-1 mt-1">
                {errors.postalCode.message}
              </p>
            )}
            {(errors.postalCode?.type === "minLength" ||
              errors.postalCode?.type === "maxLength") && (
              <p className="text-sm text-red-600 ml-1 mt-1">
                {errors.postalCode.message}
              </p>
            )}
          </div>

          <button
            className="bg-boldBlue text-white py-4 rounded-full w-1/2 lg:w-3/5 min-w-[130px]
            max-w-[320px] text-2xl font-medium lg:col-span-2 lg:justify-self-center mt-4 mb-6"
            type="submit"
          >
            Submit
          </button>

          <p className="lg:col-span-2 text-mediumGray ">
            Thanks for your interest in EnergyPal! By clicking above, you agree
            we may call and text you about EnergyPal products at the number
            provided even if on a "do not call" list, using pre-recorded
            messages or autodialing. Msg and data rates may apply. Your consent
            is optional, opt out anytime.
          </p>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="px-4">
        <p className="text-center text-mediumGray">
          © 2023 EnergyPal. All rights reserved.
          <a href="https://energypal.com/privacy">Privacy Policy.</a>
          <a href="https://energypal.com/terms">Terms of Service.</a>
        </p>
      </footer>
    </>
  );
}
