// import { useLoaderData } from "react-router-dom";
// import { getStoredDonation } from "../../utilities/localStorage";
// import { Pie, PieChart } from "recharts";

// export default function () {
//   const storedDonationIds = getStoredDonation();
//   console.log(storedDonationIds.length);
//   let donatedLength = storedDonationIds.length;

//   const donationsFromJson = useLoaderData();
//   let totalDonatedLength = donationsFromJson.length;

//   let donatedLengthPercentage = (donatedLength / totalDonatedLength) * 100;
//   console.log(donatedLengthPercentage.toFixed(2));

//   const data01 = [
//     {
//       name: "Group A",
//       value: totalDonatedLength,
//     },
//     {
//       name: "Group B",
//       value: donatedLengthPercentage,
//     },
//   ];

//   return (
//     <>
//       <PieChart width={730} height={250}>
//         <Pie
//           data={data01}
//           dataKey="value"
//           nameKey="name"
//           cx="50%"
//           cy="50%"
//           // outerRadius={50}
//           fill="#8884d8"
//         />
//       </PieChart>
//     </>
//   );
// }

// import { useLoaderData } from "react-router-dom";
// import { getStoredDonation } from "../../utilities/localStorage";
// import { Pie, PieChart, Cell, Legend, Tooltip } from "recharts";

// export default function () {
//   const storedDonationIds = getStoredDonation();
//   let donatedLength = storedDonationIds.length;

//   const donationsFromJson = useLoaderData();
//   let totalDonatedLength = donationsFromJson.length;

//   let donatedLengthPercentage = (donatedLength / totalDonatedLength) * 100;

//   const data = [
//     {
//       name: "Your Donation",
//       value: donatedLength,
//     },
//     {
//       name: "Total Donation",
//       value: totalDonatedLength - donatedLength,
//     },
//   ];

//   const COLORS = ["#00C49F", "#FF444A"]; // Define colors for the pie chart segments

//   return (
//     <>
//       <PieChart
//         className="border w-full h-full mx-auto"
//         width={730}
//         height={250}
//       >
//         <Pie
//           data={data}
//           dataKey="value"
//           nameKey="name"
//           cx="50%"
//           cy="50%"
//           innerRadius={0} // Remove the inner radius to make it a regular pie chart
//           outerRadius={80} // Set the outer radius for the pie chart
//           fill="#8884d8"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index]} />
//           ))}
//         </Pie>

//         <Legend
//           layout="horizontal"
//           align="center"
//           verticalAlign="bottom"
//           iconType="bar"
//         />

//         {/* <Tooltip formatter={(value, name) => [value, name]} /> */}
//       </PieChart>
//     </>
//   );
// }

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
          width={window.innerWidth >= 768 ? 500 : 500}
          height={window.innerWidth >= 768 ? 400 : 400}
        >
          {/* Adjust width and height here */}
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={0} // Remove the inner radius to make it a regular pie chart
            outerRadius={window.innerWidth >= 768 ? 150 : 100} // Set the outer radius for the pie chart
            fill="#8884d8"
            paddingAngle={3} // Adjust padding between segments
            label={renderCustomizedLabel(data)} // Pass the data to the custom label function
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Legend
            layout="horizontal"
            align="center"
            verticalAlign="bottom"
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
    const fontSize = window.innerWidth >= 768 ? "1em" : "1em";
    const yOffset = window.innerWidth >= 768 ? 0 : 0;

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
