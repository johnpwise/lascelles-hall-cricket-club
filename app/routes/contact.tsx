import React, { useState } from "react";

const nameRegex = /^[A-Za-z\s'-]+$/;
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
const ukPhoneRegex = /^(?:0|\+44)(?:\d\s?){9,10}$/;

export default function Contact() {
    const [fields, setFields] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [errors, setErrors] = useState<{ [k: string]: string }>({});

    function validate() {
        const errs: { [k: string]: string } = {};
        if (!fields.name.trim()) {
            errs.name = "Name is required.";
        } else if (!nameRegex.test(fields.name)) {
            errs.name = "Name should not contain numbers or special characters.";
        }

        if (!fields.email.trim()) {
            errs.email = "Email is required.";
        } else if (!emailRegex.test(fields.email)) {
            errs.email = "Please enter a valid email address.";
        }

        if (fields.phone.trim() && !ukPhoneRegex.test(fields.phone.replace(/\s+/g, ""))) {
            errs.phone = "Enter a valid UK phone number.";
        }

        if (!fields.message.trim()) {
            errs.message = "Please enter your message.";
        }
        return errs;
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setFields(f => ({ ...f, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length === 0) {
            // Submit the form (e.g., send email, call API)
            alert("Form submitted!");
            setFields({ name: "", email: "", phone: "", message: "" });
        }
    }

    return (
        <div className="flex-1 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-slate-900 justify-center py-16">
            {/* Watermark Crest */}
            <img
                src="/assets/images/club-crest.png"
                alt="Club Crest"
                className="absolute bottom-4 right-4 w-28 md:w-48 opacity-10 dark:opacity-20 pointer-events-none select-none object-contain"
                aria-hidden="true"
                style={{ zIndex: 0 }}
            />
            {/* Main Content */}
            <div className="p-8 max-w-2xl mx-auto">
                <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">Contact</h2>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
                    <div>
                        <input
                            name="name"
                            className={`border p-2 rounded w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:border-green-500 dark:focus:border-green-400 focus:outline-none ${errors.name ? "border-red-500 dark:border-red-400" : ""}`}
                            placeholder="Your Name"
                            value={fields.name}
                            onChange={handleChange}
                            required
                        />
                        {errors.name && <p className="text-red-500 dark:text-red-400 text-sm">{errors.name}</p>}
                    </div>
                    <div>
                        <input
                            name="email"
                            type="email"
                            className={`border p-2 rounded w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:border-green-500 dark:focus:border-green-400 focus:outline-none ${errors.email ? "border-red-500 dark:border-red-400" : ""}`}
                            placeholder="Your Email"
                            value={fields.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <p className="text-red-500 dark:text-red-400 text-sm">{errors.email}</p>}
                    </div>
                    <div>
                        <input
                            name="phone"
                            type="tel"
                            className={`border p-2 rounded w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:border-green-500 dark:focus:border-green-400 focus:outline-none ${errors.phone ? "border-red-500 dark:border-red-400" : ""}`}
                            placeholder="Your UK Phone (optional)"
                            value={fields.phone}
                            onChange={handleChange}
                            pattern="^(?:0|\+44)(?:\d\s?){9,10}$"
                        />
                        {errors.phone && <p className="text-red-500 dark:text-red-400 text-sm">{errors.phone}</p>}
                    </div>
                    <div>
                        <textarea
                            name="message"
                            className={`border p-2 rounded w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:border-green-500 dark:focus:border-green-400 focus:outline-none resize-vertical ${errors.message ? "border-red-500 dark:border-red-400" : ""}`}
                            placeholder="Your Message"
                            rows={4}
                            value={fields.message}
                            onChange={handleChange}
                            required
                        />
                        {errors.message && <p className="text-red-500 dark:text-red-400 text-sm">{errors.message}</p>}
                    </div>
                    <button
                        className="bg-green-600 dark:bg-green-700 text-white px-4 py-2 rounded hover:bg-green-700 dark:hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400"
                        type="submit"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}
