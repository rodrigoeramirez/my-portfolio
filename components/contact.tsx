'use client'
import { useState } from "react";
import emailjs from 'emailjs-com';

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); 

    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send("service_b6rdlka", "template_ebehzrp", templateParams, "K9-YDj3lRlzxbGyHy")
      .then(
        (response) => {
          console.log("Correo enviado con éxito!", response);
          setIsSubmitted(true); 
          setIsLoading(false); 
        },
        (error) => {
          console.log("Error al enviar correo:", error);
          setIsLoading(false); 
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">

      {isSubmitted ? (
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-[#b19cd9]">Thank you for your message! 🎉</h3>
          <p className="text-lg mt-4 text-white-800">
          I will get in touch with you very soon. Stay tuned
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-center text-white-800 mb-6">
          Let is talk about your next project! 🚀
            <p className="text-lg text-[#b19cd9] mt-2">I am ready to help you bring your ideas to life.</p>
          </h2>

          <form onSubmit={handleSubmit} className="w-full max-w-md p-6 rounded-xl shadow-lg space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#b19cd9]">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-3 w-full rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b19cd9]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#b19cd9]">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-3 w-full rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b19cd9]"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-[#b19cd9]">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-1 p-3 w-full rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b19cd9]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#b19cd9]">
                Message
              </label>
              <textarea
                id="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="mt-1 p-3 w-full rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#b19cd9]"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#b19cd9] text-white font-semibold text-lg rounded-lg hover:bg-[#b19cd9]/80 focus:outline-none focus:ring-2 mb-10 focus:ring-[#b19cd9] cursor-pointer"
                disabled={isLoading} 
              >
                {isLoading ? (
                  <span className="flex justify-center items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="none"
                        d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
