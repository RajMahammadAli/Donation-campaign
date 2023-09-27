import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utilities/localStorage";
import { Pie, PieChart, Cell, Legend } from "recharts";

export default function () {
  const storedDonationIds = getStoredDonation();
  let donatedLength = storedDonationIds.length;

  const donationsFromJson = useLoaderData();
  let totalDonatedLength = donationsFromJson.length;
  let totalDonation = 100;
  let newDonatedLengthPercentage = (
    (donatedLength / totalDonatedLength) *
    100
  ).toFixed(2); // Format to two decimal places

  const data = [
    {
      name: "Your Donation",
      value: parseFloat(newDonatedLengthPercentage), // Convert to a number
    },
    {
      name: "Total Donation",
      value: parseFloat(
        (totalDonation - newDonatedLengthPercentage).toFixed(2)
      ), // Format and convert to a number
    },
  ];

  const COLORS = ["#0088FE", "#FF8042"]; // Define colors for the pie chart segments

  return (
    <>
      <div className="w-full grid grid-cols-1 justify-center items-center">
        <PieChart
          className="w-full p-2 border mx-auto mt-10"
          width={window.innerWidth >= 768 ? 500 : window.innerWidth - 20}
          height={window.innerWidth >= 768 ? 400 : window.innerWidth - 20}
        >
          {/* Adjust width and height here */}
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={0} // Remove the inner radius to make it a regular pie chart
            outerRadius={window.innerWidth >= 768 ? 150 : window.innerWidth / 4} // Set the outer radius for the pie chart
            fill="#8884d8"
            paddingAngle={3} // Adjust padding between segments
            label={renderCustomizedLabel(data)} // Pass the data to the custom label function
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Legend
            layout={window.innerWidth >= 768 ? "horizontal" : "vertical"}
            align="center"
            verticalAlign={window.innerWidth >= 768 ? "bottom" : "middle"}
            iconType="square"
          />
        </PieChart>
      </div>
    </>
  );
}

// Custom label rendering function
const renderCustomizedLabel =
  (data) =>
  ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    // Use relative units for font size and position
    const fontSize = window.innerWidth >= 768 ? "1em" : "0.7em";
    const yOffset = window.innerWidth >= 768 ? 0 : -10;

    return (
      <text
        x={x}
        y={y + yOffset}
        fill="white"
        textAnchor="middle"
        fontSize={fontSize}
      >
        {`${data[index].value}%`}
      </text>
    );
  };
