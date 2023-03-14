import React, { useState } from "react";
import FormInput from "./formInput";

export default function OptInForm(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [messages, setMessages] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.target;
    const formData = new FormData(form);
    try {
      const response = await fetch(props.url, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      const { status, message } = data;
      console.log(message);
      setMessages(message);
      setShowMsg(true);
      form.reset();
    } catch (error) {
      console.error(error);
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        <FormInput
          inputTitle="First Name"
          inputType="string"
          inputName="first_name"
          minL="2"
        />
        <FormInput
          inputTitle="Last Name"
          inputType="string"
          inputName="last_name"
          minL="2"
        />
        <FormInput inputTitle="Email" inputType="email" inputName="email" />
        <FormInput
          inputTitle="Phone Number"
          inputType="tel"
          inputName="phone"
          minL="10"
        />
        <FormInput
          inputTitle="Postal Code"
          inputType="number"
          inputName="zip"
          minL="5"
          maxL="5"
        />
        <p className="mx-auto col-span-2">{showMsg ? messages : messages}</p>
        <button
          className="bg-blue-700 rounded-full text-xl text-white font-normal w-full md:w-80 h-16 col-span-2 mx-auto my-4"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      <p className="py-6 text-gray-500 ">
        Thanks for your interest in EnergyPal! By clicking above, you agree we
        may call and text you about EnergyPal products at the number provided
        even if on a “do not call” list, using pre-recorded messages or
        autodialing. Msg and data rates may apply. Your consent is optional, opt
        out anytime.
      </p>
    </>
  );
}
