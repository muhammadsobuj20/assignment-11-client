
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const PostTuition = () => {
  const [searchParams] = useSearchParams();
  const editId = searchParams.get("id");
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const { data: tuition } = useQuery({
    queryKey: ["tuition-edit", editId],
    enabled: !!editId,
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/tuitions/${editId}`
      );
      return res.data;
    },
  });

  const onSubmit = async (data) => {
    try {
      if (editId) {
        await axios.patch(
          `${import.meta.env.VITE_API_URL}/tuitions/${editId}`,
          data,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        toast.success("Updated!");
      } else {
        await axios.post(`${import.meta.env.VITE_API_URL}/tuitions`, data, {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        toast.success("Posted! Waiting for admin approval");
        reset();
      }
      navigate("/dashboard/student/my-tuitions");
    } catch (err) {
      toast.error("Failed",err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">
        {editId ? "Update" : "Post New"} Tuition
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <input
            {...register("subject")}
            defaultValue={tuition?.subject}
            placeholder="Subject"
           className="w-full px-3 py-2 border rounded-md border-primary focus:outline-cyan-500 text-gray-400"
            required
          />
          <input
            {...register("class")}
            defaultValue={tuition?.class}
            placeholder="Class (e.g., 10)"
           className="w-full px-3 py-2 border rounded-md border-primary focus:outline-cyan-500 text-gray-400"
            required
          />
          <input
            {...register("location")}
            defaultValue={tuition?.location}
            placeholder="Location"
           className="w-full px-3 py-2 border rounded-md border-primary focus:outline-cyan-500 text-gray-400"
            required
          />
          <input
            {...register("budget")}
            type="number"
            defaultValue={tuition?.budget}
            placeholder="Budget (BDT)"
            className="w-full px-3 py-2 border rounded-md border-primary focus:outline-cyan-500 text-gray-400"
            required
          />
          <input
            {...register("daysPerWeek")}
            defaultValue={tuition?.daysPerWeek}
            placeholder="Days/Week"
            className="w-full px-3 py-2 border rounded-md border-primary focus:outline-cyan-500 text-gray-400"
          />
          <input
            {...register("studentGender")}
            defaultValue={tuition?.studentGender}
            placeholder="Student Gender"
           className="w-full px-3 py-2 border rounded-md border-primary focus:outline-cyan-500 text-gray-400"
          />
        </div>
        <textarea
          {...register("requirements")}
          defaultValue={tuition?.requirements}
          placeholder="Requirements"
          className="textarea border rounded-md border-primary focus:outline-cyan-500 text-gray-400 w-full"
          rows="4"
        ></textarea>
        <button type="submit" className="btn btn-primary btn-block">
          {editId ? "Update Tuition" : "Post Tuition"}
        </button>
      </form>
    </div>
  );
};

export default PostTuition;
