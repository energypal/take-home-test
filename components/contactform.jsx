import axios from "axios";
import { useState } from "react";

function ContactForm(){

  const [firstName,setFirstName] = useState();
  const [lastName,setLastName] = useState();
  const [emailId,setEmailId] = useState();
  const [phoneNum,setPhoneNum] = useState();
  const [postalCode,setPostalCode] = useState();
  const [submitMessage,setSubmitMessage] = useState();
 


  const handleFirstNameChange = (event) =>{
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) =>{
    setLastName(event.target.value);
  }

  const handleEmailIdChange = (event) =>{
    setEmailId(event.target.value);
  }

  const handleFPhoneNumberChange = (event) =>{
    setPhoneNum(event.target.value);
  }

  const handlePostalCodeChange = (event) =>{
    setPostalCode(event.target.value);
  }

  const handleContactFormSubmit = async (event) =>{
    event.preventDefault()
    
    const formDetails = {
      "firstName": firstName,
      "lastName" : lastName,
      "emailId": emailId,
      "phoneNum": Number(phoneNum),
      "postalCode": Number(postalCode)
    };

    await axios.post('/api/submissions', formDetails).then((response)=>{
      setSubmitMessage(response.data.message);
    })
    .catch((error)=> {
      setSubmitMessage(error.response.data.message);
    });
  }

    return(
        <>
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2">
            <div className="px-4 py-8 lg:py-16 lg:col-span-1 items-start">
              <div> 
                <h3 className="text-5xl capitalize mb-4">Get Started</h3>
              </div>
              <div>
                <p>
                  Speak to an EnergyPal adviser about our current deals on solar panel and home batteries.
                </p>
              </div>

              </div>
              
              <div className="px-4 py-8 sm:px-6 lg:col-span-1 lg:px-8 lg:py-16 xl:pr-12">
                <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" 
                onSubmit={handleContactFormSubmit}>
                  <div className="">
                    <label htmlFor ="firstName" >First Name</label>
                    <div className="mt-1">
                      <input 
                      type="text" 
                      id="firstName"
                      name="firstName" 
                      required
                      inputMode="text" 
                      maxLength="100" 
                      value={firstName}
                      onChange={handleFirstNameChange}
                      className="block w-full leading-10 px-4 rounded-full shadow-md border-gray-300 bg-white-100" 
                      ></input>
                    </div>
                  </div>

                  <div className="">
                    <label htmlFor="lastName" >Last Name</label>
                    <div className="mt-1">
                      <input 
                      type="text" 
                      id="lastName"
                      name="lastName" 
                      required
                      inputMode="text"
                      maxLength="100" 
                      value={lastName}
                      onChange={handleLastNameChange}
                      className="block w-full leading-10 px-4 rounded-full shadow-md border-gray-300 bg-white-100" 
                      ></input>
                    </div>
                  </div>
                  
                  <div className="">
                    <label htmlFor="emailID" >Email</label>
                    <div className="mt-1">
                      <input 
                      type="email" 
                      id="emailID" 
                      name="emailID"
                      required
                      inputMode="email" 
                      maxLength="400" 
                      value={emailId}
                      onChange = {handleEmailIdChange}
                      className="block w-full leading-10 px-4 rounded-full shadow-md border-gray-300 bg-white-100" 
                      ></input>
                    </div>
                  </div>
                  
                  <div className="">
                    <label htmlFor="phoneNum" >Phone Number</label>
                    <div className="mt-1">
                      <input 
                      type="tel" 
                      id="phoneNum" 
                      name="phone" 
                      required
                      inputMode="tel" 
                      maxLength="12" 
                      value={phoneNum}
                      onChange={handleFPhoneNumberChange}
                      className="block w-full leading-10 px-4 rounded-full shadow-md border-gray-300 bg-white-100" 
                      ></input>
                    </div>
                  </div>
                  
                  <div className="sm:col-span-2">
                    <label htmlFor="postalCode" >Postal Code</label>
                    <div className="mt-1">
                      <input 
                      type="text" 
                      id="postalCode" 
                      name="postalCode" 
                      required
                      inputMode="numeric"  
                      maxLength="5" 
                      value={postalCode}
                      onChange={handlePostalCodeChange}
                      className="block w-full leading-10 px-4 rounded-full shadow-md border-gray-300 bg-white-100" 
                      ></input>
                    </div>
                  </div>
                  
                  <div className="sm:col-span-2 inline-flex justify-center">
                    <button 
                    type="submit" 
                    className="inline-flex items-center w-72 px-5 py-2 text-base font-medium text-white uppercase bg-blue-600 disabled:opacity-75 border border-transparent rounded-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 justify-center ">Submit</button>
                  </div>
                  <div className="sm:col-span-2 inline-flex justify-center">
                    <p>{submitMessage}</p>
                  </div>
                  <div className="sm:col-span-2 inline-flex justify-center">
                     <p className="mt-8 text-xs text-gray-700">Thanks for your interest in EnergyPal! By clicking above, you agree we may call and text you about EnergyPal products at the number provided even if on a "do not call" list, using pre-recorded messages or autodialing. Msg and data rates may apply. Your consent is optional, opt out anytime.</p>
                  </div>
                  
                  
                </form>
              </div>
            </div>

        </>
    )

}

export default ContactForm;