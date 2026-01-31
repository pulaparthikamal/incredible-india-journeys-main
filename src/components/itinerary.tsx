import { andhraTelanganaDelhiManaliKasolShimla } from "../data/itinerary";

const Itinerary = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {andhraTelanganaDelhiManaliKasolShimla.itinerary.map((day) => (
        <div key={day.day} className="border rounded mb-4">
          <div className="bg-gray-100 p-4 font-semibold">
            {day.day}: {day.title}
          </div>
          <div className="p-4">
            <ul className="list-disc ml-6">
              {day.details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="mt-2"><b>Meal:</b> {day.meal}</p>
            <p><b>Stay:</b> {day.stay}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itinerary;
