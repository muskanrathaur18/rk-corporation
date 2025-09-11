import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("/data/Blogdata.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((b) => b.id === parseInt(id));
        setBlog(found);
      });
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Blog not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <img src={blog.image} alt={blog.title} className="w-full h-96 object-fit" />
        <div className="p-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span>{blog.date}</span>
            <span className="mx-2">•</span>
            <span>{blog.readTime}</span>
            <span className="mx-2">•</span>
            <span className="px-3 py-1 bg-indigo-600 text-white text-xs rounded-full">
              {blog.category}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
          <p className="text-gray-700 leading-relaxed">{blog.content}</p>

          <Link
            to="/blog"
            className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
