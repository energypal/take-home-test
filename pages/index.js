import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react'

export default function Home() {
  const [ formResMessage, setFormResMessage ] = useState([]);
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ zip, setZip ] = useState('');
  const [ firstNameError, setFirstNameError ] = useState('');
  const [ lastNameError, setLastNameError ] = useState('');
  const [ emailError, setEmailError ] = useState('');
  const [ phoneError, setPhoneError ] = useState('');
  const [ zipError, setZipError ] = useState('');
  
  const inputValidStyle = 'focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none';
  const inputErrorStyle = 'bg-red-200 focus:ring-2 focus:ring-red-500 focus:border-transparent focus:outline-none';

  const addCustomer = async e => {
    e.preventDefault();
    const res = await fetch('/api/submissions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        zip: zip,
      })
    });
    const json = await res.json();
    if(json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API');
    }
    setFormResMessage([json]);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setZip('');
  }
  useEffect(() => {
    if (firstName.length < 1 ) {
      setFirstNameError('You must provide a first name');
    } else {
      setFirstNameError('');
    }
  },[firstName]);
  useEffect(() => {
    if (lastName.length < 1 ) {
      setLastNameError('You must provide a last name');
    } else {
      setLastNameError('');
    }
  }, [lastName]);
  useEffect(() => {
    if (email.length < 1 ) {
      setEmailError('You must provide a valid email');
    } else {
      setEmailError('');
    }
  }, [email])
  useEffect(() => {
    if (phone.length < 1 ) {
      setPhoneError('You must provide a valid phone number');
    } else {
      setPhoneError('');
    }
  }, [phone])
  useEffect(() => {
    if (zip.length < 1 ) {
      setZipError('You must provide a valid zip code');
    } else {
      setZipError('');
    }
  }, [zip])
  useEffect(() => {
    setFirstNameError('');
    setLastNameError('');
    setEmailError('');
    setPhoneError('');
    setZipError('');
  }, [])
  return (
    <div >
      <Head>
        <title>EnergyPal Take-Home Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"w-screen h-screen flex items-center justify-center bg-gray-50"}>
        <div className="w-screen mx-4 sm:w-10/12 md:w-6/12 lg:w-96 md:border md:rounded-xl md:p-5 md:bg-white">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">
          Welcome to <a className="text-blue-500" href="https://energypal.com">EnergyPal!</a>
        </h1>
          <form className="grid grid-cols-1 gap-3" onSubmit={addCustomer} method="POST">
            <label htmlFor="first_name">
              <span className="text-xs font-medium text-gray-700" >First Name</span>
              <input onChange={e => {setFirstName(e.target.value)}} value={firstName} className={`border rounded text-gray-700 placeholder-gray-400 w-full p-2 ${firstNameError === '' ? inputValidStyle : inputErrorStyle}` } id="first_name" type="text" name="first_name" required placeholder="Your first name"/><br/>
              <div className="text-xs font-medium text-red-500 h-2 pt-1">{firstNameError}</div>
            </label>
            <label htmlFor="last_name">
              <span className="text-xs font-medium text-gray-700" >Last Name</span>
              <input onChange={e => {setLastName(e.target.value)}} value={lastName} className={`border rounded text-gray-700 placeholder-gray-400 w-full p-2 ${lastNameError === '' ? inputValidStyle : inputErrorStyle}` }   id="last_name" type="text" name="last_name" required placeholder="Your last name"/><br/>
              <div className="text-xs font-medium text-red-500 h-2 pt-1">{lastNameError}</div>
            </label>
            <label htmlFor="email">
              <span className="text-xs font-medium text-gray-700" >Email</span>
              <input onChange={e => {setEmail(e.target.value)}} value={email} className={`border rounded text-gray-700 placeholder-gray-400 w-full p-2 ${emailError === '' ? inputValidStyle  : inputErrorStyle}` }  id="email" type="email" name="email" required placeholder="Ex. billgates@microsoft.com"/><br/>
              <div className="text-xs font-medium text-red-500 h-2 pt-1">{emailError}</div>
            </label>
            <label htmlFor="phone">
              <span className="text-xs font-medium text-gray-700" >Phone</span>
              <input onChange={e => {setPhone(e.target.value)}} value={phone} className={`border rounded text-gray-700 placeholder-gray-400 w-full p-2 ${phoneError === '' ? inputValidStyle : inputErrorStyle}` }   id="phone" type="tel" name="phone" required placeholder="Your phone number"/><br/>
              <div className="text-xs font-medium text-red-500 h-2 pt-1">{phoneError}</div>
            </label>
            <label htmlFor="zip">
              <span className="text-xs font-medium text-gray-700" >Zip</span>
              <input onChange={e => {setZip(e.target.value)}} value={zip} className={`border rounded text-gray-700 placeholder-gray-400 w-full p-2 ${zipError === '' ? inputValidStyle : inputErrorStyle}` }   id="zip" type="text" name="zip" required pattern="\d{5}" placeholder="90210"/><br/>
              <div className="text-xs font-medium text-red-500 h-2 pt-1">{zipError}</div>
            </label>
            <div className="flex justify-end mt-4">
              <button className="bg-blue-500 hover:bg-blue-700 rounded text-white w-full md:w-auto py-2 md:px-6 shadow-md" type="submit">Submit</button>
            </div>
            {formResMessage.map(i => {
              if (i.status === 'unavailable' || i.status === 'error') {
                return <div className="text-red-700 text-sm flex items-center mt-4 w-full justify-center">
                  <svg class="inline" xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                  </svg>
                  <span className="ml-1">{i.message}</span>
                </div>
              } else {
                return <div className="text-green-700 text-sm flex items-center mt-4 w-full justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span className="ml-1">{i.message}</span>
                </div>
              }
            })
          }
          </form>
        </div>
      </main>
    </div>
  )
}
