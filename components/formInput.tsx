import React from "react";

export default function FormInput(props) {
  //make postal code field span 2 columns
  const isZip = props.inputName === "zip";
  const divClasses = `flex flex-col ${isZip ? "col-span-2" : ""}`;

  return (
    <div className={divClasses}>
      <label className="capitalize text-gray-400 py-2 text-lg">
        {props.inputTitle}
      </label>
      <input
        className="bg-white p-2 border-2 rounded-full border-gray-300"
        type={props.inputName}
        name={props.inputName}
        id={props.inputName}
        required
        minLength={props.minL}
        maxLength={props.maxL}
      />
    </div>
  );
}
