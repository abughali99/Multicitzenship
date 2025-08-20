// "use client"

// import { useState } from "react"
// import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik"
// import * as Yup from "yup"
// import { allCountries } from "country-telephone-data"
// import { Loader2, Phone, Mail, User, Globe, DollarSign, MessageSquare } from "lucide-react"

// const validationSchema = Yup.object({
//   firstName: Yup.string().min(2, "First name must be at least 2 characters").required("First name is required"),
//   lastName: Yup.string().min(2, "Last name must be at least 2 characters").required("Last name is required"),
//   phone: Yup.string().min(6, "Please enter a valid phone number").required("Phone number is required"),
//   countryCode: Yup.string().required("Please select a country code"),
//   email: Yup.string().email("Please enter a valid email address").required("Email is required"),
//   nationality: Yup.string().required("Please select your nationality"),
//   investmentFeasible: Yup.string().required("Please select an option"),
//   message: Yup.string(),
// })

// // Fixed flag generation function
// const getFlagEmoji = (iso2) => {
//   if (!iso2) return "🌍";
//   return String.fromCodePoint(...[...iso2.toUpperCase()].map(c => 0x1F1A5 + c.charCodeAt(0)));
// }

// export const countries = allCountries.map((country) => {
//   const [name, iso2, dialCode] = Array.isArray(country) ? country : ["", "", ""]
//   const flag = getFlagEmoji(iso2)
//   return {
//     code: dialCode ? `+${dialCode}` : "",
//     name: name || "",
//     flag,
//     iso2: iso2 || ""
//   }
// }).filter(country => country.iso2)

// const nationalities = [
//   "Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan", "Antiguans", "Argentinean", 
//   "Armenian", "Australian", "Austrian", "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi", 
//   "Barbadian", "Barbudans", "Batswana", "Belarusian", "Belgian", "Belizean", "Beninese", "Bhutanese", 
//   "Bolivian", "Bosnian", "Brazilian", "British", "Bruneian", "Bulgarian", "Burkinabe", "Burmese", 
//   "Burundian", "Cambodian", "Cameroonian", "Canadian", "Cape Verdean", "Central African", "Chadian", 
//   "Chilean", "Chinese", "Colombian", "Comoran", "Congolese", "Costa Rican", "Croatian", "Cuban", 
//   "Cypriot", "Czech", "Danish", "Djibouti", "Dominican", "Dutch", "East Timorese", "Ecuadorean", 
//   "Egyptian", "Emirian", "Equatorial Guinean", "Eritrean", "Estonian", "Ethiopian", "Fijian", 
//   "Filipino", "Finnish", "French", "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", 
//   "Greek", "Grenadian", "Guatemalan", "Guinea-Bissauan", "Guinean", "Guyanese", "Haitian", 
//   "Herzegovinian", "Honduran", "Hungarian", "I-Kiribati", "Icelander", "Indian", "Indonesian", 
//   "Iranian", "Iraqi", "Irish", "Israeli", "Italian", "Ivorian", "Jamaican", "Japanese", "Jordanian", 
//   "Kazakhstani", "Kenyan", "Kittian and Nevisian", "Kuwaiti", "Kyrgyz", "Laotian", "Latvian", 
//   "Lebanese", "Liberian", "Libyan", "Liechtensteiner", "Lithuanian", "Luxembourger", "Macedonian", 
//   "Malagasy", "Malawian", "Malaysian", "Maldivian", "Malian", "Maltese", "Marshallese", "Mauritanian", 
//   "Mauritian", "Mexican", "Micronesian", "Moldovan", "Monacan", "Mongolian", "Moroccan", 
//   "Mosotho", "Motswana", "Mozambican", "Namibian", "Nauruan", "Nepalese", "New Zealander", 
//   "Nicaraguan", "Nigerian", "Nigerien", "North Korean", "Northern Irish", "Norwegian", "Omani", 
//   "Pakistani", "Palauan", "Panamanian", "Papua New Guinean", "Paraguayan", "Peruvian", "Polish", 
//   "Portuguese", "Qatari", "Romanian", "Russian", "Rwandan", "Saint Lucian", "Salvadoran", "Samoan", 
//   "San Marinese", "Sao Tomean", "Saudi", "Scottish", "Senegalese", "Serbian", "Seychellois", 
//   "Sierra Leonean", "Singaporean", "Slovakian", "Slovenian", "Solomon Islander", "Somali", 
//   "South African", "South Korean", "Spanish", "Sri Lankan", "Sudanese", "Surinamer", "Swazi", 
//   "Swedish", "Swiss", "Syrian", "Taiwanese", "Tajik", "Tanzanian", "Thai", "Togolese", "Tongan", 
//   "Trinidadian or Tobagonian", "Tunisian", "Turkish", "Tuvaluan", "Ugandan", "Ukrainian", 
//   "Uruguayan", "Uzbekistani", "Venezuelan", "Vietnamese", "Welsh", "Yemenite", "Zambian", "Zimbabwean"
// ]

// export default function CallbackForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const initialValues = {
//     firstName: "",
//     lastName: "",
//     phone: "",
//     countryCode: "",
//     email: "",
//     nationality: "",
//     investmentFeasible: "",
//     message: "",
//   }

//   const handleSubmit = async (
//     values: typeof initialValues,
//     { resetForm }: FormikHelpers<typeof initialValues>
//   ) => {
//     setIsSubmitting(true)
//     await new Promise((resolve) => setTimeout(resolve, 2000))
//     console.log("Form submitted:", values)
//     alert("Request submitted successfully! We'll contact you within 24 hours.")
//     resetForm()
//     setIsSubmitting(false)
//   }

//   return (
//     <div className="bg-gradient-to-br from-[#fdfcfb] to-[#f7f7f9] p-4 flex items-center justify-center min-h-screen">
//       <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-8">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-[#242058]">
//             Request A Call Back
//           </h2>
//           <p className="text-lg text-slate-600">
//             Let's discuss your investment opportunities. Fill out the form below and we'll contact you shortly.
//           </p>
//         </div>

//         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
//           {({ errors, touched, setFieldValue, values }) => (
//             <Form className="space-y-6">
              
//               {/* Name Fields */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="firstName" className="flex items-center gap-2 text-sm font-medium text-[#242058]">
//                     <User className="w-4 h-4 text-[#d8a16f]" /> First Name *
//                   </label>
//                   <Field
//                     id="firstName"
//                     name="firstName"
//                     placeholder="Enter your first name"
//                     className={`w-full h-12 px-3 rounded-lg border ${errors.firstName && touched.firstName ? "border-red-500" : "border-slate-300 focus:border-[#d8a16f] focus:ring-2 focus:ring-[#d8a16f]/20"} transition-colors`}
//                   />
//                   <ErrorMessage name="firstName" component="p" className="text-sm text-red-500 mt-1" />
//                 </div>

//                 <div>
//                   <label htmlFor="lastName" className="flex items-center gap-2 text-sm font-medium text-[#242058]">
//                     <User className="w-4 h-4 text-[#d8a16f]" /> Last Name *
//                   </label>
//                   <Field
//                     id="lastName"
//                     name="lastName"
//                     placeholder="Enter your last name"
//                     className={`w-full h-12 px-3 rounded-lg border ${errors.lastName && touched.lastName ? "border-red-500" : "border-slate-300 focus:border-[#d8a16f] focus:ring-2 focus:ring-[#d8a16f]/20"} transition-colors`}
//                   />
//                   <ErrorMessage name="lastName" component="p" className="text-sm text-red-500 mt-1" />
//                 </div>
//               </div>

//               {/* Phone */}
//               <div>
//                 <label className="flex items-center gap-2 text-sm font-medium text-[#242058]">
//                   <Phone className="w-4 h-4 text-[#d8a16f]" /> Phone/Mobile *
//                 </label>
//                 <div className="flex gap-2">
//                   <select
//                     value={values.countryCode}
//                     onChange={(e) => setFieldValue("countryCode", e.target.value)}
//                     className={`w-28 h-12 rounded-lg border ${errors.countryCode && touched.countryCode ? "border-red-500" : "border-slate-300 focus:border-[#d8a16f] focus:ring-2 focus:ring-[#d8a16f]/20"} transition-colors`}
//                   >
//                     <option value="">🌍</option>
//                     {countries.map((c) => (
//                       <option key={`${c.iso2}-${c.code}`} value={c.code}>
//                         {c.flag} {c.code}
//                       </option>
//                     ))}
//                   </select>
//                   <Field
//                     name="phone"
//                     placeholder="Mobile Number"
//                     className={`flex-1 h-12 px-3 rounded-lg border ${errors.phone && touched.phone ? "border-red-500" : "border-slate-300 focus:border-[#d8a16f] focus:ring-2 focus:ring-[#d8a16f]/20"} transition-colors`}
//                   />
//                 </div>
//                 <div className="flex justify-between">
//                   <ErrorMessage name="phone" component="p" className="text-sm text-red-500 mt-1" />
//                   <ErrorMessage name="countryCode" component="p" className="text-sm text-red-500 mt-1" />
//                 </div>
//               </div>

//               {/* Email */}
//               <div>
//                 <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-[#242058]">
//                   <Mail className="w-4 h-4 text-[#d8a16f]" /> Email *
//                 </label>
//                 <Field
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="you@domain.com"
//                   className={`w-full h-12 px-3 rounded-lg border ${errors.email && touched.email ? "border-red-500" : "border-slate-300 focus:border-[#d8a16f] focus:ring-2 focus:ring-[#d8a16f]/20"} transition-colors`}
//                 />
//                 <ErrorMessage name="email" component="p" className="text-sm text-red-500 mt-1" />
//               </div>

//               {/* Nationality */}
//               <div>
//                 <label className="flex items-center gap-2 text-sm font-medium text-[#242058]">
//                   <Globe className="w-4 h-4 text-[#d8a16f]" /> Nationality *
//                 </label>
//                 <select
//                   value={values.nationality}
//                   onChange={(e) => setFieldValue("nationality", e.target.value)}
//                   className={`w-full h-12 rounded-lg border ${errors.nationality && touched.nationality ? "border-red-500" : "border-slate-300 focus:border-[#d8a16f] focus:ring-2 focus:ring-[#d8a16f]/20"} transition-colors px-3`}
//                 >
//                   <option value="">Select your nationality</option>
//                   {nationalities.map((n) => (
//                     <option key={n} value={n}>{n}</option>
//                   ))}
//                 </select>
//                 <ErrorMessage name="nationality" component="p" className="text-sm text-red-500 mt-1" />
//               </div>

//               {/* Investment */}
//               <div>
//                 <label className="flex items-center gap-2 text-sm font-medium text-[#242058]">
//                   <DollarSign className="w-4 h-4 text-[#d8a16f]" /> Is an investment starting at $123,000 feasible for you? *
//                 </label>
//                 <select
//                   value={values.investmentFeasible}
//                   onChange={(e) => setFieldValue("investmentFeasible", e.target.value)}
//                   className={`w-full h-12 rounded-lg border ${errors.investmentFeasible && touched.investmentFeasible ? "border-red-500" : "border-slate-300 focus:border-[#d8a16f] focus:ring-2 focus:ring-[#d8a16f]/20"} transition-colors px-3`}
//                 >
//                   <option value="">Please select an option</option>
//                   <option value="yes">Yes, I'm interested</option>
//                   <option value="maybe">Maybe, I'd like to learn more</option>
//                   <option value="no">No, looking for smaller amounts</option>
//                   <option value="higher">I'm interested in higher amounts</option>
//                 </select>
//                 <ErrorMessage name="investmentFeasible" component="p" className="text-sm text-red-500 mt-1" />
//               </div>

//               {/* Message */}
//               <div>
//                 <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-[#242058]">
//                   <MessageSquare className="w-4 h-4 text-[#d8a16f]" /> Additional Message (Optional)
//                 </label>
//                 <Field
//                   as="textarea"
//                   id="message"
//                   name="message"
//                   placeholder="Tell us more..."
//                   className="w-full min-h-[120px] px-3 py-2 rounded-lg border border-slate-300 focus:border-[#d8a16f] focus:ring-2 focus:ring-[#d8a16f]/20 resize-none transition-colors"
//                 />
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full h-12 bg-[#242058] hover:bg-[#d8a16f] text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? (
//                   <>
//                     <Loader2 className="w-5 h-5 mr-2 animate-spin" />
//                     Submitting Request...
//                   </>
//                 ) : (
//                   "Submit Request"
//                 )}
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   )
// }