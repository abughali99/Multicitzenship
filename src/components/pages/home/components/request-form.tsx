'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const CallbackForm = () => {
  // Form validation schema
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required('First name is required')
      .min(2, 'First name must be at least 2 characters'),
    lastName: Yup.string()
      .required('Last name is required')
      .min(2, 'Last name must be at least 2 characters'),
    phone: Yup.string()
      .required('Phone number is required')
      .matches(/^[0-9+\-\s()]+$/, 'Please enter a valid phone number'),
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Email is required'),
    nationality: Yup.string()
      .required('Nationality is required'),
    investmentFeasible: Yup.string()
      .required('Please select an option')
      .oneOf(['yes', 'no'], 'Please select either Yes or No')
  });

  // Formik hook
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      nationality: '',
      investmentFeasible: ''
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      
      // Show success message with SweetAlert
      Swal.fire({
        title: 'Success!',
        text: 'Your inquiry has been submitted successfully.',
        icon: 'success',
        confirmButtonColor: '#242058',
        confirmButtonText: 'OK'
      });
    }
  });

  return (
    <div className="">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8 md:p-4">
          <div className="bg-[#242058] text-white p-6 rounded-lg mb-8 md:p-2">
            <h2 className="text-2xl font-bold text-center">Request A Call Back</h2>
            <p className="text-[#d8a16f] text-center mt-2">
              Let's discuss your investment opportunities
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name <span className='text-red-500'>*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#d8a16f] focus:border-[#d8a16f]"
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.firstName}</div>
                ) : null}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name <span className='text-red-500'>*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#d8a16f] focus:border-[#d8a16f]"
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className="text-red-500 text-sm mt-1">{formik.errors.lastName}</div>
                ) : null}
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number<span className='text-red-500'>*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#d8a16f] focus:border-[#d8a16f]"
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
              ) : null}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address <span className='text-red-500'>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#d8a16f] focus:border-[#d8a16f]"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
              ) : null}
            </div>

            {/* Nationality */}
            <div>
              <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
                Nationality <span className='text-red-500'>*</span>
              </label>
              <select
                id="nationality"
                name="nationality"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nationality}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#d8a16f] focus:border-[#d8a16f]"
              >
                <option value="">Select your nationality</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="OTHER">Other</option>
              </select>
              {formik.touched.nationality && formik.errors.nationality ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.nationality}</div>
              ) : null}
            </div>

            {/* Investment Feasibility */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Is an investment starting at $123,000 feasible for you? <span className='text-red-500'>*</span>
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="investmentFeasible"
                    value="yes"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.investmentFeasible === 'yes'}
                    className="text-[#d8a16f] focus:ring-[#d8a16f]"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="investmentFeasible"
                    value="no"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.investmentFeasible === 'no'}
                    className="text-[#d8a16f] focus:ring-[#d8a16f]"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
              {formik.touched.investmentFeasible && formik.errors.investmentFeasible ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.investmentFeasible}</div>
              ) : null}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#242058] hover:bg-[#1a1845] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d8a16f] transition-colors duration-200"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CallbackForm;