export default function ({ setSearchResult }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchResult(e.target.name.value);
    e.target.name.value = "";
  };
  return (
    <>
      <div
        className="mx-auto relative"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url("https://i.ibb.co/zm86JX5/Rectangle-4281.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="py-28 md:py-44">
          <div className="text-center">
            <h1 className="text-[#0B0B0B] text-5xl font-bold p-3">
              I Grow By Helping People In Need
            </h1>
          </div>
          <div className="flex justify-center mt-6">
            <form onSubmit={handleSubmit} className="flex">
              <input
                className="text-base py-2 px-2 rounded-l-lg"
                type="text"
                name="name"
                id=""
                placeholder="Search here..."
              />
              <input
                className="bg-[#FF444A] py-2 px-6 cursor-pointer text-white text-base font-semibold rounded-r-lg"
                type="submit"
                value="Search"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
