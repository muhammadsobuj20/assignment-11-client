import React from "react";
import { Mail, Phone, LifeBuoy } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "How do I post a tuition request?",
    a: "Create an account, choose the student role, and use the 'Post Tuition' form in your dashboard. Include subject, class, location, budget and schedule for best responses.",
  },
  {
    q: "How are tutors verified?",
    a: "Tutors submit profile details and verification documents; we perform identity checks and review references before they appear on the platform.",
  },
  {
    q: "What payment methods are supported?",
    a: "We support secure card payments and local payment gateways. Payment details are shown on each tuition post when you proceed to booking.",
  },
];

const Help = () => {
  return (
    <div className="min-h-screen bg-base-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            Help & <span className="text-primary">Support</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Find answers to common questions or contact our support team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className=" p-6 rounded-xl shadow">
                  <h3 className="font-semibold mb-2">{f.q}</h3>
                  <p className="text-gray-500 ">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
            <div className=" p-6 rounded-xl shadow space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-medium">support@etuitionbd.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <div className="font-medium">+880 1712 345678</div>
                  <div className="text-sm text-gray-500">
                    Mon–Fri 09:00–18:00
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-cyan-100 dark:border-cyan-700">
                <Link
                  to="/contact"
                  className="btn btn-outline border-primary  border-2 text-primary hover:bg-primary hover:text-white"
                >
                  Open a Support Ticket
                </Link>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-500 flex items-center gap-2">
              <LifeBuoy className="h-4 w-4" />
              For policy, terms, or privacy questions, visit our{" "}
              <Link to="/privacy" className="text-primary">
                Privacy & Terms
              </Link>{" "}
              page.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
