export default function ({ showDonation }) {
  console.log(showDonation);
  const {
    picture,
    category,
    title,
    color,
    card_bg_color,
    text_button_bg_color,
    description,
    price,
  } = showDonation;
  return (
    <>
      <div>
        <div
          style={{ backgroundColor: card_bg_color }}
          className="card card-side shadow-xl"
        >
          <figure>
            <img src={picture} alt={category} />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-start">
              <button
                style={{
                  color: color,
                  backgroundColor: text_button_bg_color,
                  border: "none",
                }}
                className="btn btn-primary"
              >
                {category}
              </button>
            </div>
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-start">
              <button
                style={{
                  color: "white",
                  backgroundColor: color,
                  border: "none",
                }}
                className="btn btn-primary"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
