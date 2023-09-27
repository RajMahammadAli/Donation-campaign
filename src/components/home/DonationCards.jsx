import { useNavigate } from "react-router-dom";

export default function ({ items, searchResult }) {
  console.log("donationCard", searchResult);
  const {
    id,
    picture,
    category,
    title,
    card_bg_color,
    color,
    text_button_bg_color,
  } = items;
  const navigate = useNavigate();

  const handleCardDetails = () => {
    navigate(`/donationDetails/${id}`);
  };
  return (
    <>
      <div
        onClick={handleCardDetails}
        style={{ backgroundColor: card_bg_color }}
        className="shadow-xl rounded-lg cursor-pointer"
      >
        <img className="w-full rounded-lg" src={picture} alt={category} />
        <div className="card-body">
          <div className="card-actions justify-start">
            <button
              style={{ color: color, backgroundColor: text_button_bg_color }}
              className="text-sm font-medium px-2 py-1 rounded-sm"
            >
              {category}
            </button>
          </div>
          <p
            style={{ color: color }}
            className="w-full text-sm font-medium flex justify-start"
          >
            {title}
          </p>
        </div>
      </div>
    </>
  );
}
