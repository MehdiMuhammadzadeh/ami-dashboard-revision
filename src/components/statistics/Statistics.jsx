import { Grid } from "@mui/material";
import { BarChart, PieChart } from "@mui/x-charts";
import React from "react";
import Container from "../common/Container";
import SubContainer from "../common/SubContainer";
import { BarPlot } from "@mui/x-charts/BarChart";
import { LinePlot } from "@mui/x-charts/LineChart";
import { ChartContainer } from "@mui/x-charts/ChartContainer";

import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import ChartWrapper from "./ChartWrapper";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// --------------------

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import { StyledText } from "../text/Text.styles";
import { COLORS } from "../../styles/colors";
import Highchart from "../../pages/Highchart";
import { requestPDF } from "../notification/Notification";

// import HighlightedCode from 'docs/src/modules/components/HighlightedCode

const data1 = [
  { label: "Group A", value: 400 },
  { label: "Group B", value: 300 },
  { label: "Group C", value: 300 },
  { label: "Group D", value: 200 },
];

const data2 = [
  { label: "A1", value: 100 },
  { label: "A2", value: 300 },
  { label: "B1", value: 100 },
  { label: "B2", value: 80 },
  { label: "B3", value: 40 },
  { label: "B4", value: 30 },
  { label: "B5", value: 50 },
  { label: "C1", value: 100 },
  { label: "C2", value: 200 },
  { label: "D1", value: 150 },
  { label: "D2", value: 50 },
];
const series1 = [
  {
    innerRadius: 100,
    outerRadius: 120,
    id: "series-2",
    data: data2,
  },
];

const series = [
  {
    type: "line",
    yAxisKey: "pib",
    color: "blue",
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

const data = [
  { id: 0, value: 10, label: "series A" },
  { id: 1, value: 15, label: "series B" },
  { id: 2, value: 20, label: "series C" },
];


const Statistics = () => {




  return (
    <Container>
      <SubContainer xs={12} enableHover={true}>
      <Grid
        item
        component={"div"}
        width={"50px"}
        height={"50px"}
        sx={{
          backgroundColor: `${COLORS.danger}`,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 110,
          right:30,
          boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
          cursor: "pointer",
        }}
        // onClick={handleAddNoteBtn}
      >
        {/* <StyledText
          style={{ fontSize: "1.5rem", color: "#000", cursor: "pointer" }}
        >
          +
        </StyledText> */}
        <PictureAsPdfIcon onClick={requestPDF} />
        
      </Grid>
        <h4>Mood Flow</h4>
        <Grid item display={"flex"}>
          {[1, 2, 3].map((item, index) => {
            return (
              <ChartWrapper key={index} xs={12} sx={{ margin: 1 }}>
                <ChartContainer
                  series={series}
                  // series={[{ ...series.data, color: '#fff'}]}
                  // sx={{width:{xs:'350px', md:'500px'}}}

                  width={500}
                  height={360}
                  xAxis={[
                    {
                      id: "years",
                      data: Array.from({ length: 10 }, (_, index) => index + 1),
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
                  {/* <BarPlot /> */}
                  <LinePlot />
                  <ChartsXAxis
                    label="Period"
                    position="bottom"
                    axisId="years"
                  />
                  <ChartsYAxis label="Mood" position="left" axisId="eco" />
                  {/* <ChartsYAxis label="PIB" position="right" axisId="pib" /> */}
                </ChartContainer>
              </ChartWrapper>
            );
          })}
        </Grid>
        <h4>Sleep Flow</h4>
        <Grid item xs={12} display={"flex"}>
          {[1, 2, 3].map((item, index) => {
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
                      data: Array.from({ length: 10 }, (_, index) => index + 1),
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
                  {/* <BarPlot /> */}
                  <LinePlot />
                  <ChartsXAxis
                    label="Period"
                    position="bottom"
                    axisId="years"
                  />
                  <ChartsYAxis label="Mood" position="left" axisId="eco" />
                  {/* <ChartsYAxis label="PIB" position="right" axisId="pib" /> */}
                </ChartContainer>
              </ChartWrapper>
            );
          })}
        </Grid>
        <Container gap={1} xs={12}>
          <Grid
            item
            xs={4}
            sx={{
              marginTop: "1.2rem",
              backgroundColor: "#27283f",
              paddingBlock: "1rem",
              borderRadius: "5px",
            }}
          >
            <Grid item textAlign={"center"}>
              <h4>Mood Pie</h4>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                margin: "auto",
                textAlign: "center",
              }}
            >
              <PieChart
                series={[
                  {
                    data,
                    highlightScope: { faded: "global", highlighted: "item" },
                    faded: {
                      innerRadius: 30,
                      additionalRadius: -30,
                      color: "gray",
                      textAlign: "center",
                    },
                  },
                ]}
                height={200}
              />
            </Grid>
          </Grid>

          <Grid
            item
            xs={7}
            sx={{
              marginTop: "1.2rem",
              backgroundColor: "#27283f",
              paddingBlock: "1rem",
              borderRadius: "5px",
              marginLeft: "1rem",
            }}
          >
            <Grid item textAlign={"center"}>
              {/* <h4>Mood Pie</h4> */}
            </Grid>
            {/* <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                margin: "auto",
                textAlign: "center",
              }}
            >
              <PieChart
                series={series1}
                width={400}
                height={300}
                slotProps={{
                  legend: { hidden: true },
                }}
                onItemClick={(event, d) => setItemData(d)}
              />
            </Grid> */}
            <Highchart />
          </Grid>
        </Container>
      </SubContainer>
    </Container>
  );
};

export default Statistics;
