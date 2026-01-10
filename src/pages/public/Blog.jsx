import React from "react";
import { Link } from "react-router-dom";
import { Calendar, BookOpen } from "lucide-react";

const articles = [
  {
    slug: "choose-right-tutor",
    title: "How to Choose the Right Tutor",
    excerpt:
      "A guide to evaluating qualifications, communication style, and teaching approach to match your learning goals.",
    date: "2025-08-12",
    author: "eTuitionBD Team",
  },
  {
    slug: "remote-learning-tips",
    title: "Top Tips for Successful Remote Learning",
    excerpt:
      "Best practices for scheduling, staying motivated, and getting the most out of online tuition sessions.",
    date: "2025-06-01",
    author: "eTuitionBD Team",
  },
  {
    slug: "pricing-guide",
    title: "Understanding Tuition Pricing",
    excerpt:
      "How to set budgets, compare offers, and find affordable yet high-quality tutors.",
    date: "2025-04-21",
    author: "eTuitionBD Team",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-base-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Insights & <span className="text-primary">Articles</span></h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Helpful guides and practical advice to help students and tutors
            succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a) => (
            <article
              key={a.slug}
              className=" p-6 rounded-xl shadow hover:shadow-xl hover:shadow-primary transition"
            >
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{new Date(a.date).toLocaleDateString()}</span>
                <span className="mx-2">•</span>
                <span>{a.author}</span>
              </div>

              <h3 className="text-xl font-semibold mb-2">{a.title}</h3>
              <p className="text-gray-500  mb-4">
                {a.excerpt}
              </p>

              <div className="flex justify-between items-center">
                <Link
                  to={`/blog/${a.slug}`}
                  className="text-primary font-medium"
                >
                  Read more
                </Link>
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
