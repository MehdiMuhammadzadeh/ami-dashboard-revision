import { Grid } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import React from "react";
import Container from "../common/Container";
import SubContainer from "../common/SubContainer";
import { BarPlot } from "@mui/x-charts/BarChart";
import { LinePlot } from "@mui/x-charts/LineChart";
import { ChartContainer } from "@mui/x-charts/ChartContainer";

import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import ChartWrapper from "./ChartWrapper";

const series = [
  {
    type: "bar",
    stack: "",
    yAxisKey: "eco",
    data: [2, 5, 3, 4, 1],
  },
  {
    type: "bar",
    stack: "",
    yAxisKey: "eco",
    data: [5, 6, 2, 8, 9],
  },
  {
    type: "line",
    yAxisKey: "pib",
    color: "red",
    data: [1000, 1500, 3000, 5000, 100000],
  },
  {
    type: "line",
    yAxisKey: "pib",
    color: "red",
    data: [1000, 1500, 3000, 5000, 100000],
  },
  {
    type: "line",
    yAxisKey: "pib",
    color: "red",
    data: [1000, 1500, 3000, 5000, 100000],
  },
];

const Statistics = () => {
  return (
    <Container>
      <SubContainer xs={12} enableHover={true}>
        {[1, 2, 3, 4, 5,6].map((item, index) => {
          return (
            <ChartWrapper key={index} xs={12} sx={{ margin: 1 }}>
              <ChartContainer
                series={series}
                // sx={{width:{xs:'350px', md:'500px'}}}

                width={500}
                height={360}
                xAxis={[
                  {
                    id: "years",
                    data: [2010, 2011, 2012, 2013, 2014],
                    scaleType: "band",
                    valueFormatter: (value) => value.toString(),
                  },
                ]}
                yAxis={[
                  {
                    id: "eco",
                    scaleType: "linear",
                  },
                  {
                    id: "pib",
                    scaleType: "log",
                  },
                ]}
              >
                <BarPlot />
                <LinePlot />
                <ChartsXAxis label="Years" position="bottom" axisId="years" />
                <ChartsYAxis label="Results" position="left" axisId="eco" />
                <ChartsYAxis label="PIB" position="right" axisId="pib" />
              </ChartContainer>
            </ChartWrapper>
          );
        })}
      </SubContainer>
    </Container>
  );
};

export default Statistics;
