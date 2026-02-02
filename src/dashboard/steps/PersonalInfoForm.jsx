import { useState, useEffect } from "react";
import api from "../../utils/api";

const PersonalInfoForm = ({ profile, onNext }) => {
  const [form, setForm] = useState({
    age: "",
    phone: "",
    address: "",
    fatherName: "",
    motherName: "",
    gender: ""
  });

  useEffect(() => {
    if (profile) {
      setForm({
        age: profile.age || "",
        phone: profile.phone || "",
        address: profile.address || "",
        fatherName: profile.fatherName || "",
        motherName: profile.motherName || "",
        gender: profile.gender || ""
      });
    }
  }, [profile]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      await api.post("/api/student/profile", form);
      onNext();
    } catch {
      alert("Failed to save profile");
    }
  };

  return (
    <div className="space-y-4">
      {["age", "phone", "fatherName", "motherName", "address"].map((field) => (
        <input
          key={field}
          name={field}
          value={form[field]}
          onChange={handleChange}
          placeholder={field.replace(/([A-Z])/g, " $1")}
          className="w-full p-3 rounded bg-[#0b1220] text-white border border-slate-600"
        />
      ))}

      <select
        name="gender"
        value={form.gender}
        onChange={handleChange}
        className="w-full p-3 rounded bg-[#0b1220] text-white border border-slate-600"
      >
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 px-6 py-2 rounded text-white"
      >
        Save & Continue →
      </button>
    </div>
  );
};

export default PersonalInfoForm;
