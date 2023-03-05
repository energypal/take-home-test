import axios from "axios";
import { useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";

export default function Home() {
  // React-hook-form APIs
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // State to handle post-submission feedback
  const [submission, setSubmission] = useState({
    status: "",
    message: "",
    showDialog: false, // Toggle to display either the form or the dialog
  });

  // Function to submit form data to API
  const transmitForm = async (payload) => {
    try {
      const response = await axios.post("/api/submissions", payload);
      // Update state and display dialog
      setSubmission({ ...response.data, showDialog: true });
    } catch (error) {
      setSubmission({ ...error.response.data, showDialog: true });
    }
  };

  return (
    <>
      <Head>
        <title>EnergyPal Take-Home Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="font-sans pt-16 pr-8 pl-8 lg:pt-40 lg:pr-32 lg:pl-32 flex flex-col lg:flex-row lg:w-full max-w-[1680px] min-w-[323px] mx-auto">
        {/* TITLE AND DESCRIPTOR */}
        <header className="lg:w-1/2 lg:mr-5">
          <h2 className="text-5xl">Get Started</h2>
          <p className="text-2xl mt-4 mb-8 ">
            Speak to an EnergyPal advisor about our current deals on solar
            panels and home batteries.
          </p>

          {/* FORM SUBMISSION TEST */}
          {/* <button onClick={() => transmitForm("TEST PAYLOAD")}>
            TEST FORM SUBMISSION
          </button> */}
          {/* {submissionResp.status && <p>{submissionResp.status}</p>}
          {submissionResp.message && <p>{submissionResp.message}</p>} */}
        </header>

        {/* FORM */}
        {!submission.showDialog && (
          <form
            className="lg:w-1/2 lg:ml-5 grid lg:grid-cols-2 gap-y-3 lg:gap-y-4 lg:gap-x-8 mb-12"
            onSubmit={handleSubmit(transmitForm)}
          >
            {/* FIRST NAME */}
            <div className="lg:col-start-1">
              <label className="text-mediumGray text-xl" htmlFor="firstName">
                First Name
              </label>
              <input
                className="px-5 border-[2px]  h-12 rounded-full w-full mt-2"
                type="text"
                id="firstName"
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName?.type === "required" && (
                <p className="text-sm text-red-600 ml-1 mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            {/* LAST NAME */}
            <div className="lg:col-start-2">
              <label className="text-mediumGray text-xl" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="w-full px-5 border-[2px] h-12 rounded-full mt-2"
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
                className="w-full px-5 border-[2px] h-12 rounded-full mt-2"
                type="text" // Type set to text instead of email to prevent built-in validation tooltip
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
                className="w-full px-5 border-[2px] h-12 rounded-full mt-2"
                type="tel"
                inputMode="tel"
                id="phoneNumber"
                maxLength={16} // Format to 16 chars including spaces: (123) 456 - 7890
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  minLength: { value: 16, message: "Invalid phone number" },
                })}
              />
              {errors.phoneNumber?.type === "required" && (
                <p className="text-sm text-red-600 ml-1 mt-1">
                  {errors.phoneNumber.message}
                </p>
              )}
              {errors.phoneNumber?.type === "minLength" && (
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
                className="w-full px-5 border-[2px] h-12 rounded-full mt-2"
                type="text"
                inputMode="numeric"
                id="postalCode"
                maxLength={5}
                {...register("postalCode", {
                  required: "Postal code is required",
                  minLength: { value: 5, message: "Invalid postal code" },
                })}
              />
              {errors.postalCode?.type === "required" && (
                <p className="text-sm text-red-600 ml-1 mt-1">
                  {errors.postalCode.message}
                </p>
              )}
              {errors.postalCode?.type === "minLength" && (
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
              Thanks for your interest in EnergyPal! By clicking above, you
              agree we may call and text you about EnergyPal products at the
              number provided even if on a "do not call" list, using
              pre-recorded messages or autodialing. Msg and data rates may
              apply. Your consent is optional, opt out anytime.
            </p>
          </form>
        )}

        {/* POST-SUBMISSION DIALOG */}
        {submission.showDialog && (
          <div className="w-11/12 mx-auto min-h-[300px] lg:w-1/2 flex flex-col justify-evenly items-center lg:ml-5">
            <p className="text-2xl lg:text-3xl">{submission.message}</p>
            {submission.status === "unavailable" && (
              <p className="text-2xl lg:text-3xl ">Please try again</p>
            )}
            <button
              className="bg-boldBlue text-white rounded-full px-[1em] py-[0.5em] text-xl lg:text-2xl font-medium "
              type="button"
              onClick={() =>
                setSubmission({ status: "", message: "", showDialog: false })
              }
            >
              Back
            </button>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="px-4 min-w-[323px]">
        <p className="text-center text-mediumGray">
          © 2023 EnergyPal. All rights reserved.
          <a href="https://energypal.com/privacy">Privacy Policy.</a>
          <a href="https://energypal.com/terms">Terms of Service.</a>
        </p>
      </footer>
    </>
  );
}
