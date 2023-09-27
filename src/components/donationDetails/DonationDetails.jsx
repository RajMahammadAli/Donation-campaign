import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveDonation } from "../../utilities/localStorage";

export default function () {
  const [donations, setDonations] = useState([]);
  console.log(donations);
  const details = useLoaderData();
  const { id } = useParams();
  const singleDonation = details.find((detail) => detail.id === id);

  const handleDonation = () => {
    // Check if singleDonation is already in the donations array
    if (!donations.some((donation) => donation.id === singleDonation.id)) {
      // If not in the array, add it and show success toast
      setDonations([...donations, singleDonation]);
      saveDonation(id);
      toast("Thank You for your Donation!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      // If already in the array, show a different toast
      toast("You have already donated.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <div className="flex justify-center p-4">
        <div>
          <div className="relative md:w-[450px]">
            <img
              className="w-full"
              src={singleDonation.picture}
              alt=""
              srcSet=""
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-2 px-4">
              <button
                onClick={handleDonation}
                style={{ backgroundColor: singleDonation.color }}
                className="text-white px-4 py-2 rounded-lg"
              >
                Donate ${singleDonation.price}
              </button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>
          </div>
          <div>
            <h1 className="text-[#0B0B0B] text-3xl font-extrabold pt-4">
              {singleDonation.title}
            </h1>
            <p className="text-[#8f8f8f] text-base">
              {singleDonation.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
