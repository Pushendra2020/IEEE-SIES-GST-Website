import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { Trash2, Edit2 } from "lucide-react";
import { twMerge } from "tailwind-merge";

const Card = ({ id, name, role, team, photo, onDelete, className }) => {
    const [type, setType] = useState('update')
  return (
    <div
      className={twMerge(
        "max-w-sm bg-white rounded-xl shadow-lg overflow-hidden animate-fadeIn",
        className
      )}
    >
      <div className="flex flex-col items-center p-6">
        <img
          className="w-32 h-42 object-contain mb-4"
          src={photo || "https://via.placeholder.com/150"}
          alt={name}
        />
        <h2 className="text-xl font-semibold mb-1">{name}</h2>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Role:</span> {role}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-medium">Team:</span> {team}
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => onDelete(id)}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all"
          >
            <Trash2 size={16} /> Delete
          </button>
          <NavLink
            to={`create`}
            state={{ id,type }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all"
          >
            <Edit2 size={16} /> Update
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
