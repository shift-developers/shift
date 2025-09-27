import { useFormik } from "formik";
import * as Yup from "yup";

import { Banner, Button } from "@/components";

const ContactUsPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      newsletter: false,
      firstName: "",
      lastName: "",
      role: "member",
      url: "",
      zipCode: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      newsletter: Yup.boolean().required("Newsletter is required"),
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      role: Yup.string().required("Role is required"),
      url: Yup.string().required("Website/Social Media is required"),
      zipCode: Yup.string().required("Zip code is required"),
      message: Yup.string(),
    }),
    onSubmit: async (values) => {
      try {
        await fetch("/api/contact-us", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
      } catch (error) {
        console.error("Contact us error:", error);
      }
    },
  });

  return (
    <div className="w-full bg-white">
      <Banner
        header="Contact Us"
        description="Our partners match our mission, reflect our values, and share our passion for reimagining mental health."
      />
      <div className="my-container py-20">
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-20 mb-10">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-base font-proxima font-bold"
              >
                Email{" "}
                <span className="text-sm text-neutral-750">(required)</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="border border-gray-300 rounded-2xl p-3"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email && (
                <p className="text-sm text-red-500 font-bold bg-red-100 py-1 px-2 w-fit rounded-xl">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <input
                id="newsletter"
                name="newsletter"
                type="checkbox"
                className="border border-gray-300 rounded-2xl p-3"
                value={formik.values.newsletter ? "true" : "false"}
                onChange={formik.handleChange}
              />
              <label
                htmlFor="newsletter"
                className="text-base font-proxima font-bold"
              >
                Sign up for news and updates
              </label>
            </div>

            <label
              htmlFor="firstName"
              className="text-base font-proxima font-bold"
            >
              Name <span className="text-sm text-neutral-750">(required)</span>
            </label>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="firstName"
                  className="text-base font-proxima font-bold"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  className="border border-gray-300 rounded-2xl p-3"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                />
                {formik.errors.firstName && formik.touched.firstName && (
                  <p className="text-sm text-red-500 font-bold bg-red-100 py-1 px-2 w-fit rounded-xl">
                    {formik.errors.firstName}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="lastName"
                  className="text-base font-proxima font-bold"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  className="border border-gray-300 rounded-2xl p-3"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                />
                {formik.errors.lastName && formik.touched.lastName && (
                  <p className="text-sm text-red-500 font-bold bg-red-100 py-1 px-2 w-fit rounded-xl">
                    {formik.errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="role"
                className="text-base font-proxima font-bold"
              >
                Member/Company/Clinician/Collaborator{" "}
                <span className="text-sm text-neutral-750">(required)</span>
              </label>
              <select
                id="role"
                name="role"
                className="border border-gray-300 rounded-2xl p-3"
                value={formik.values.role}
                onChange={formik.handleChange}
              >
                <option value="member">Member</option>
                <option value="company">Company</option>
                <option value="clinician">Clinician</option>
                <option value="collaborator">Collaborator</option>
              </select>
              {formik.errors.role && formik.touched.role && (
                <p className="text-sm text-red-500 font-bold bg-red-100 py-1 px-2 w-fit rounded-xl">
                  {formik.errors.role}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="url" className="text-base font-proxima font-bold">
                Website/Social Media{" "}
                <span className="text-sm text-neutral-750">(required)</span>
              </label>
              <input
                id="url"
                name="url"
                className="border border-gray-300 rounded-2xl p-3"
                placeholder="https://"
                value={formik.values.url}
                onChange={formik.handleChange}
              />
              {formik.errors.url && formik.touched.url && (
                <p className="text-sm text-red-500 font-bold bg-red-100 py-1 px-2 w-fit rounded-xl">
                  {formik.errors.url}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="zipCode"
                className="text-base font-proxima font-bold"
              >
                Zip Code{" "}
                <span className="text-sm text-neutral-750">(required)</span>
              </label>
              <input
                id="zipCode"
                name="zipCode"
                className="border border-gray-300 rounded-2xl p-3"
                value={formik.values.zipCode}
                onChange={formik.handleChange}
              />
              {formik.errors.zipCode && formik.touched.zipCode && (
                <p className="text-sm text-red-500 font-bold bg-red-100 py-1 px-2 w-fit rounded-xl">
                  {formik.errors.zipCode}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="message"
                className="text-base font-proxima font-bold"
              >
                Let Us Know What On Your Mind
              </label>
              <textarea
                id="message"
                name="message"
                className="border border-gray-300 rounded-2xl p-3 resize-none h-[140px]"
                value={formik.values.message}
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-sm transition bg-dark-blue text-white hover:bg-[#001F70] w-full lg:w-[200px]"
              >
                Send
              </button>
            </div>
            <p className="text-center font-proxima text-neutral-750">
              By submitting your information, you acknowledge that you have read our
              privacy policy and consent to receive email communication from us.
              Your Information is 100% secure and will never be shared with anyone.
              You can unsubscribe at any time.
            </p>
          </form>
          <div className="text-dark-blue font-bold text-2xl font-proxima flex flex-col gap-5">
            <p>
              We partner with individuals and organizations committed to
              creating a mentally healthy world by utilizing evidence-based
              approaches to deliver transformative content.
            </p>

            <p>
              If you&apos;re part of an organization in search of a
              scientifically endorsed mental health and well-being partner,
              allow us to demonstrate the impact SHiFT can make.
            </p>

            <p>
              We welcome mental health professionals and leaders of personal
              growth who are passionate about educating and empowering others,
              to explore the many ways to participate and join our team.{" "}
            </p>

            <p>We absolutely love what we do and we think you will too.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
