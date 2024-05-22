import React, { useEffect } from "react";
import Section from "../Section/Section";
import { Heading, Text } from "@chakra-ui/react";

import { Line } from "react-chartjs-2";

const ChartSection = () => {
  return (
    <Section className="col-span-4">
      <Heading fontSize={"sm"}>This Year</Heading>
      <Text color={"#a0a2b4"} fontSize={"xs"}>
        Last Updated: <span className="font-semibold">2 days ago</span>
      </Text>

      <div className="mt-4 w-[50vw]">
        <Line
          data={{
            datasets: [
              {
                label: "Resolved",
                data: [0, 9, 2, 6, 4, 6, 3, 7, 1, 0],
                fill: false,
                borderColor: "#3851ff",
                tension: 0.4,
              },
            ],
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
            ],
          }}
          options={{
            scales: {
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  color: "#a0a2b4",
                  font: {
                    size: 10,
                  },
                },
              },
              y: {
                grid: {
                  color: "#a0a2b4",
                  lineWidth: 0.5,
                },
                ticks: {
                  color: "#a0a2b4",
                  font: {
                    size: 10,
                  },
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    </Section>
  );
};

export default ChartSection;
