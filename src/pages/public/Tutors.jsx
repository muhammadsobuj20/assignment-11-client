
const Tutors = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Our Verified Tutors</h1>
      <p className="text-center text-xl mb-16">Coming soon! Browse top tutors by subject and location.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
                  <div className="bg-gray-300 w-full h-full rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold mt-4">Tutor Name</h3>
              <p>Math, Physics, Chemistry</p>
              <p className="text-sm text-gray-500">5+ years experience</p>
              <div className="rating rating-sm mt-2">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutors;




// import { useQuery } from "@tanstack/react-query";

// import { useState } from "react";

// import TutorCard from "../../components/shared/TutorCard";
// import axios from "axios";

// const Tutors = () => {
//   const [subject, setSubject] = useState("");
//   const [location, setLocation] = useState("");

//   const { data: tutors = [], isLoading, refetch } = useQuery({
//     queryKey: ["tutors", subject, location],
//     queryFn: async () => {
//       const res = await axios.get(`/tutors`, {
//         params: { subject, location },
//       });
//       return res.data;
//     },
//   });

//   const handleFilter = () => {
//     refetch();
//   };

//   return (
//     <div className="container mx-auto py-20 px-4">
//       <h1 className="text-4xl font-bold text-center mb-10">
//         Our Verified Tutors
//       </h1>

//       {/* 🔍 Filter Section */}
//       <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
//         <select
//           className="select select-bordered w-full md:w-1/4"
//           value={subject}
//           onChange={(e) => setSubject(e.target.value)}
//         >
//           <option value="">All Subjects</option>
//           <option>Math</option>
//           <option>Physics</option>
//           <option>Chemistry</option>
//           <option>English</option>
//           <option>Biology</option>
//         </select>

//         <input
//           type="text"
//           className="input input-bordered w-full md:w-1/4"
//           placeholder="Location e.g. Dhaka"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />

//         <button onClick={handleFilter} className="btn btn-primary w-full md:w-auto">
//           Search
//         </button>
//       </div>

//       {isLoading ? (
//         <p className="text-center text-xl">Loading tutors...</p>
//       ) : tutors.length === 0 ? (
//         <p className="text-center text-xl text-gray-500">
//           No tutors found! Try another filter.
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {tutors.map((tutor) => (
//             <TutorCard key={tutor._id} tutor={tutor} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Tutors;
