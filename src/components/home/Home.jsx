import { useEffect, useState } from "react";
import DonationCards from "./DonationCards";
import Banner from "../banner/Banner";

export default function () {
  const [cards, setCards] = useState([]);
  const [searchResult, setSearchResult] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setFilteredCards(data);
      });
  }, []);

  useEffect(() => {
    const filtered = cards.filter((donation) =>
      donation.category.toLowerCase().includes(searchResult.toLowerCase())
    );
    setFilteredCards(filtered);
  }, [searchResult, cards]);

  return (
    <>
      <div>
        <Banner setSearchResult={setSearchResult} />
        <div className="w-full max-w-[1280px] mx-auto mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {filteredCards.map((items, idx) => (
            <DonationCards
              key={idx}
              items={items}
              searchResult={searchResult}
            />
          ))}
        </div>
      </div>
    </>
  );
}
