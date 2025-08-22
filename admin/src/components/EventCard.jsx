import React,{useState} from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Edit, Trash2, ExternalLink } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { NavLink } from "react-router-dom";

const EventCard = ({
    id,
  eventName,
  eventImage,
  eventDescription,
  eventLink,
  eventType,
  eventState,
  onDelete
}) => {
    const [type, setType] = useState('update')
  return (
    <Card className="w-full max-w-sm rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl animate-in fade-in">
      <CardHeader>
        <img
          src={eventImage}
          alt={eventName}
          className="w-full h-48 object-cover rounded-xl mb-3"
        />
        <CardTitle className="text-xl font-bold">{eventName}</CardTitle>
        <p className="text-sm text-gray-500">{eventType} • {eventState}</p>
      </CardHeader>

      <CardContent>
        <p className="text-gray-700 line-clamp-3">{eventDescription}</p>
      </CardContent>

      <CardFooter className="flex justify-between items-center gap-2">
        <NavLink
        to={`createEvent`}
            state={{ id,type }}
          variant="outline"
          size="sm"
          className={twMerge("flex items-center gap-2 rounded-xl")}
         
        >
          <Edit size={16} /> Edit
        </NavLink>

        <Button
          variant="destructive"
          size="sm"
          className={twMerge("flex items-center gap-2 rounded-xl")}
          onClick={onDelete}
        >
          <Trash2 size={16} /> Delete
        </Button>

        <a
          href={eventLink}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto text-blue-600 hover:underline flex items-center gap-1 text-sm"
        >
          Visit <ExternalLink size={14} />
        </a>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
