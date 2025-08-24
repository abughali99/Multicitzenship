"use client";

import { Mail, Phone, MapPin, User, MessageSquare } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

export const InfomationContactUs = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Required"),
      phone: Yup.string()
        .matches(/^[0-9+\-\s()]*$/, "Invalid phone number")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log("Form submitted:", values);

      // Show loading first
      Swal.fire({
        title: "Sending...",
        text: "Please wait while we process your message.",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      setTimeout(() => {
        Swal.fire({
          title: "Message Sent!",
          text: "Thank you for reaching out. We will get back to you soon.",
          icon: "success",
          confirmButtonColor: "#242058",
          confirmButtonText: "OK",
        });
        resetForm();
      }, 1500);
    },
  });

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-3xl font-bold mb-8" style={{ color: "#242058" }}>
            Contact Information
          </h2>
          <ul className="space-y-6 text-gray-700">
            <li className="flex items-start gap-4">
              <Mail className="w-6 h-6 mt-1" style={{ color: "#d8a16f" }} />
              <div>
                <h3
                  className="font-semibold text-2xl"
                  style={{ color: "#242058" }}
                >
                  Email
                </h3>
                <a
                  href="mailto:info@multicitizenship.com"
                  className="hover:underline"
                  style={{ color: "#242058" }}
                >
                  info@multicitizenship.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Phone className="w-6 h-6 mt-1" style={{ color: "#d8a16f" }} />
              <div>
                <h3
                  className="font-semibold text-2xl"
                  style={{ color: "#242058" }}
                >
                  Phone Number
                </h3>
                <span className="hover:text-[#d8a16f] transition">
                  +962 7 7088 8889
                </span>
                <br></br>
                 <span className="hover:text-[#d8a16f] transition">
                  +962 7 92919995
                </span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MapPin className="w-6 h-6 mt-1" style={{ color: "#d8a16f" }} />
              <div>
                <h3
                  className="font-semibold text-2xl"
                  style={{ color: "#242058" }}
                >
                  Location
                </h3>
                <span className="hover:text-[#d8a16f] transition">
                  123 Main Street, City, Country
                </span>
              </div>
            </li>
            <div className="w-full h-full bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.082014010418!2d35.84961537542449!3d31.958671674016337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b6adf389c284c11%3A0x5dfaedc3769b29de!2sMulticitizenships!5e0!3m2!1sen!2sjo!4v1754902091289!5m2!1sen!2sjo"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MultiCitizenships Location on Map"
              ></iframe>
            </div>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
          <h3
            className="text-2xl font-semibold mb-6"
            style={{ color: "#242058" }}
          >
            Send us a message
          </h3>
          <form onSubmit={formik.handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label
                className="flex items-center gap-2 text-sm font-medium mb-1"
                style={{ color: "#242058" }}
              >
                <User className="w-4 h-4" style={{ color: "#d8a16f" }} /> Name
              </label>
              <input
                type="text"
                {...formik.getFieldProps("name")}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                style={{ borderColor: "#d8a16f" }}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.name}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                className="flex items-center gap-2 text-sm font-medium mb-1"
                style={{ color: "#242058" }}
              >
                <Phone className="w-4 h-4" style={{ color: "#d8a16f" }} /> Phone
              </label>
              <input
                type="text"
                {...formik.getFieldProps("phone")}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                style={{ borderColor: "#d8a16f" }}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.phone}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                className="flex items-center gap-2 text-sm font-medium mb-1"
                style={{ color: "#242058" }}
              >
                <Mail className="w-4 h-4" style={{ color: "#d8a16f" }} /> Email
              </label>
              <input
                type="email"
                {...formik.getFieldProps("email")}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2"
                style={{ borderColor: "#d8a16f" }}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                className="flex items-center gap-2 text-sm font-medium mb-1"
                style={{ color: "#242058" }}
              >
                <MessageSquare
                  className="w-4 h-4"
                  style={{ color: "#d8a16f" }}
                />{" "}
                Message
              </label>
              <textarea
                {...formik.getFieldProps("message")}
                className="w-full p-3 border rounded-lg h-32 focus:outline-none focus:ring-2"
                style={{ borderColor: "#d8a16f" }}
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold transition text-lg"
              style={{ backgroundColor: "#242058", color: "#fff" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#d8a16f")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#242058")
              }
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
