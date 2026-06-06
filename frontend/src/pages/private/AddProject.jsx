import React, { useState } from "react";
import { fileToBase64 } from "../../utils/FileBase64.js";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [techStack, setTechStack] = useState([]);
  const [techInput, setTechInput] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();

  const handleTechAdd = (e) => {
    if (e.key === "Enter" && techInput.trim()) {
      e.preventDefault();
      setTechStack([...techStack, techInput.trim()]);
      setTechInput("");
    }
  };

  const removeTech = (tech) => {
    setTechStack(techStack.filter((t) => t !== tech));
  };

  const handleImage = (e) => {
    const files = Array.from(e.target.files);

    setImages((prev) => [...prev, ...files]);

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreview((prev) => [...prev, ...previews]);
  };

  const { mutate: addProject, isPending } = useMutation({
    mutationFn: async (formData) => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/project/add`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          },
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || data.error);
        }

        return data;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: () => {
      toast.success("Project added successfully.");
      navigate("/admin-dashboard/manage-projects");
    },
    onError: (data) => {
      toast.error(data.message || data.error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("subTitle", subTitle);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("status", status);
    formData.append("isFeatured", isFeatured);
    formData.append("liveUrl", liveUrl);
    formData.append("githubUrl", githubUrl);

    techStack.forEach((tech) => {
      formData.append("techStack[]", tech);
    });

    images.forEach((img) => {
      formData.append("images", img);
    });
    
    addProject(formData);
  };
  return (
    <div className="p-5 w-full">
      <div className="w-full text-center">
        <div className="w-full p-5">
          <form
            className="max-w-6xl mx-auto space-y-8 text-white"
            onSubmit={handleSubmit}
          >
            {/* BASIC INFO */}
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 space-y-5">
              <h2 className="text-xl font-semibold">Basic Information</h2>

              <div className="w-full flex gap-3">
                <input
                  name="title"
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Project Title"
                  className="w-full h-12 px-4 rounded-xl bg-neutral-950 border border-neutral-700 focus:border-blue-500 outline-none"
                />

                <input
                  name="subTitle"
                  type="text"
                  onChange={(e) => setSubTitle(e.target.value)}
                  placeholder="Project Subtitle"
                  className="w-full h-12 px-4 rounded-xl bg-neutral-950 border border-neutral-700 focus:border-blue-500 outline-none"
                />
              </div>

              <textarea
                name="description"
                rows={6}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Project Description..."
                className="w-full p-4 rounded-xl bg-neutral-950 border border-neutral-700 focus:border-blue-500 outline-none"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <select
                name="category"
                className="h-12 px-4 rounded-xl bg-neutral-950 border border-neutral-700"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="full-stack">Fullstack</option>
                <option value="mobile">Mobile</option>
                <option value="other">Other</option>
              </select>

              <select
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="h-12 px-4 rounded-xl bg-neutral-950 border border-neutral-700"
              >
                <option value="">Select Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>

              <label className="flex items-center justify-between px-4 h-12 rounded-xl bg-neutral-950 border border-neutral-700">
                <span>Featured</span>
                <input
                  name="isFeatured"
                  type="checkbox"
                  checked={isFeatured}
                  onChange={(e) => setIsFeatured(e.target.checked)}
                />
              </label>
            </div>

            <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 flex gap-3 justify-evenly">
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-2 rounded-lg bg-blue-500/10 text-blue-400 flex items-center gap-2"
                >
                  {tech}
                  <button type="button" onClick={() => removeTech(tech)}>
                    ✕
                  </button>
                </span>
              ))}

              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={handleTechAdd}
                placeholder="Type tech & press Enter"
                className="h-12 px-4 rounded-xl bg-neutral-950 border border-neutral-700 focus:border-blue-500 outline-none"
              />

              <input
                name="liveUrl"
                type="url"
                onChange={(e) => setLiveUrl(e.target.value)}
                placeholder="Live URL"
                className="h-12 px-4 rounded-xl bg-neutral-950 border border-neutral-700 focus:border-blue-500 outline-none"
              />

              <input
                name="githubUrl"
                type="url"
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="GitHub URL"
                className="h-12 px-4 rounded-xl bg-neutral-950 border border-neutral-700 focus:border-blue-500 outline-none"
              />
            </div>

            <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
              <h2 className="text-xl font-semibold mb-4">Images</h2>
              <input
                type="file"
                multiple
                accept="image/*"
                className="border p-2 rounded-lg"
                onChange={handleImage}
              />

              <div className="flex items-center justify-center gap-5 mt-3">
                {preview?.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="w-20 object-cover rounded-xl border border-neutral-800"
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 cursor-pointer font-semibold shadow-[0_0_25px_rgba(59,130,246,0.5)]"
              >
                {isPending ? "Publishing..." : "Publish Project"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
