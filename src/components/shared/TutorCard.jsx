const TutorCard = ({ tutor }) => {
  const { name, subjects, experience, rating } = tutor;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl border transition-all duration-300">
      <div className="card-body text-center">
        <div className="avatar">
          <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
            <img
              src={tutor.photo || "https://i.ibb.co/4pDNDk1/avatar.png"}
              alt={name}
              className="rounded-full"
            />
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-3">{name}</h3>
        <p className="text-sm opacity-80">{subjects.join(", ")}</p>
        <p className="text-xs opacity-70">{experience}+ years experience</p>

        <div className="rating rating-sm mt-1">
          {[...Array(5)].map((_, i) => (
            <input
              key={i}
              type="radio"
              name={`rating-${tutor._id}`}
              className="mask mask-star-2 bg-orange-400"
              readOnly
              checked={i < rating}
            />
          ))}
        </div>

        <button className="btn btn-primary mt-3 btn-sm">View Profile</button>
      </div>
    </div>
  );
};

export default TutorCard;
