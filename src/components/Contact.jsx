import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const publicKey = "NGB_JhUeNW5huXRZZ";
  const serviceKey = "service_tttjpgo";
  const templateKey = "template_kx72fm8";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceKey, templateKey, form.current, publicKey).then(
      (result) => {
        console.log("Message sent successfully:", result.text);
        alert("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        console.log("Error sending message:", error.text);
        alert("Failed to send message. Please try again.");
      },
    );
  };

  return (
    <section id="contact" className="scroll-mt-10 py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's <span className="text-[rgb(31,242,144)]">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            I’m currently open to new opportunities and collaborations. Whether
            you have a question or just want to say hi, my inbox is always open!
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-300">
              <span className="p-3 bg-white/5 rounded-lg text-[rgb(31,242,144)]">
                📧
              </span>
              <span>burkiwareesha@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <span className="p-3 bg-white/5 rounded-lg text-[rgb(31,242,144)]">
                📍
              </span>
              <span>Available for Remote Work</span>
            </div>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-gray-400"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-[rgb(31,242,144)] focus:outline-none transition-all"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-gray-400"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-[rgb(31,242,144)] focus:outline-none transition-all"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-gray-400"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-[rgb(31,242,144)] focus:outline-none transition-all"
              placeholder="How can I help you?"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-[rgb(31,242,144)] text-black font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(31,242,144,0.4)] transition-all">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
