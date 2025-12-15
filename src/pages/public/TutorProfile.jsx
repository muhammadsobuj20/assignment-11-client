// src/pages/public/TutorProfile.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../lib/api";

const TutorProfile = () => {
  const { id } = useParams();
  const [tutor, setTutor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    api
      .get(`/tutors/${id}`)
      .then((res) => {
        if (mounted) setTutor(res.data);
      })
      .catch((err) => {
        console.error("Tutor fetch error:", err);
      })
      .finally(() => mounted && setLoading(false));
    return () => (mounted = false);
  }, [id]);

  if (loading) return <div className="container mx-auto py-12">Loading...</div>;
  if (!tutor)
    return <div className="container mx-auto py-12">Tutor not found</div>;

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1">
          <div className="card p-6 text-center">
            <div className="avatar mx-auto mb-4">
              <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
                {tutor.photoURL && (
                  <img
                    src={tutor.photoURL}
                    alt={tutor.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>

            <h2 className="text-2xl font-bold">{tutor.name}</h2>
            <p className="text-sm text-gray-600">
              {tutor.district} {tutor.area ? `— ${tutor.area}` : ""}
            </p>

            <div className="mt-4 text-sm text-gray-600">
              Hourly: {tutor.hourlyRate ? `${tutor.hourlyRate} BDT` : "—"}
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="card p-6">
            <h3 className="text-xl font-semibold">About</h3>
            <p className="mt-2 text-gray-700">{tutor.bio}</p>

            <div className="mt-4">
              <h4 className="font-semibold">Subjects</h4>
              <div className="flex gap-2 mt-2 flex-wrap">
                {(tutor.subjectTags || []).map((s) => (
                  <span key={s} className="badge badge-outline">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Experience & Rates</h4>
              <p className="mt-2">
                {tutor.experience} · Hourly Rate:{" "}
                {tutor.hourlyRate ? `${tutor.hourlyRate} BDT` : "—"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorProfile;
