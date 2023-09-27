// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import { getStoredDonation } from "../../utilities/localStorage";
// import ShowDonationCard from "../showDonationCard/ShowDonationCard";

// export default function () {
//   const [showDonations, setShowDonations] = useState([]);

//   const donationsFromJson = useLoaderData();
//   useEffect(() => {
//     const storedDonationIds = getStoredDonation();

//     if (donationsFromJson.length > 0) {
//       const donatiedIds = donationsFromJson.filter((donation) =>
//         storedDonationIds.includes(donation.id)
//       );
//       setShowDonations(donatiedIds);
//     }
//   }, []);
//   return (
//     <>
//       <div className="w-full max-w-[1280px] mx-auto">
//         <div className="grid md:grid-cols-2 gap-3">
//           {showDonations.map((showDonation, idx) => (
//             <ShowDonationCard
//               key={idx}
//               showDonation={showDonation}
//             ></ShowDonationCard>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utilities/localStorage";
import ShowDonationCard from "../showDonationCard/ShowDonationCard";

export default function () {
  const [showDonations, setShowDonations] = useState([]);
  const [showAll, setShowAll] = useState(false); // State variable to control button visibility

  const donationsFromJson = useLoaderData();

  useEffect(() => {
    const storedDonationIds = getStoredDonation();

    if (donationsFromJson.length > 0) {
      const donatiedIds = donationsFromJson.filter((donation) =>
        storedDonationIds.includes(donation.id)
      );
      setShowDonations(donatiedIds);
    }
  }, []);

  const handleShowAllClick = () => {
    setShowAll(true);
  };

  return (
    <>
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-2 gap-3">
          {showDonations.map((showDonation, idx) => (
            <ShowDonationCard
              key={idx}
              showDonation={showDonation}
            ></ShowDonationCard>
          ))}
        </div>
        {/* Conditionally render the button */}
        {showDonations.length >= 4 && !showAll && (
          <div className="text-center mt-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={handleShowAllClick}
            >
              Show All
            </button>
          </div>
        )}
      </div>
    </>
  );
}
