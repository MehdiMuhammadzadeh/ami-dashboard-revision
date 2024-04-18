import { Grid } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import SubContainer from "../common/SubContainer";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { COLORS } from "../../styles/colors";
import Highchart from "../../pages/Highchart";
import { requestPDF } from "../notification/Notification";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Statistics = () => {
  const [sleepDurations, setSleepDurations] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [moodPieChartData, setMoodPieChartData] = useState([]);
  const [categories, setCategories] = useState([]);
  const records = JSON.parse(localStorage.getItem("records"));
  const moodScaler = (mood) => {
    if (mood === 1) return 5;
    if (mood === 2) return 4;
    if (mood === 3) return 3;
    if (mood === 4) return 2;
    if (mood === 5) return 1;
  };
  const moodScalerTwo = (mood) => {
    if (mood === 1) return "very good";
    if (mood === 2) return "good";
    if (mood === 3) return "neutral";
    if (mood === 4) return "bad";
    if (mood === 5) return "very bad";
  };
  console.log("records", records);

  const moodPieChart = (data) => {
    console.log("DAAAAta", data["1"]);
    return [
      { id: 1, color: COLORS.primary, label: "Very Good", value: data["1"] },
      { id: 2, color: COLORS.lime, label: "Good", value: data["2"] },
      { id: 3, color: COLORS.yellow, label: "Neutral", value: data["3"] },
      { id: 4, color: COLORS.warning, label: "Bad", value: data["4"] },
      { id: 5, color: COLORS.danger, label: "Very Bad", value: data["5"] },
    ];
  };

  const sumValues = (numbers) => {
    console.log("Numbers", numbers);
    let sum = 0;
    for (const key in numbers) {
      sum += numbers[key];
    }
    return sum;
  };

  const extractStats = (data) => {
    let chartData = [];
    let sleepTimes = [];
    let tempMoodsSeries = [];
    const counts = {
      activityIds: {},
      drugIds: {},
      feeling: {},
      foodIds: {},
      weather: {},
    };

    data.forEach((item) => {
      let tempPoint = {};
      Object.entries(item).forEach(([key, value]) => {
        if (key === "sleepStart" && value) {
          sleepTimes.push(
            item.sleepEnd.split(":")[0] - item.sleepStart.split(":")[0]
          );
          tempPoint.sleep =
            item.sleepEnd.split(":")[0] - item.sleepStart.split(":")[0];
        }
        if (key === "feeling") {
          tempMoodsSeries.push(moodScaler(value));
          tempPoint.feeling = moodScaler(value);
          tempPoint.name = moodScalerTwo(value);
        }
        if (Array.isArray(value) && key !== "photoIds") {
          value.forEach((id) => {
            if (!counts[key][id]) {
              counts[key][id] = 1;
            } else {
              counts[key][id]++;
            }
          });
        } else {
          if (!counts[key]) {
            return;
          }
          if (!counts[key][value]) {
            counts[key][value] = 1;
          } else {
            counts[key][value]++;
          }
        }
      });
      chartData.push(tempPoint);
    });
    setMoodPieChartData(moodPieChart(counts.feeling));
    setCategories([
      {
        id: 1,
        name: "Activities",
        y: sumValues(counts.activityIds),
        color: "#49BABE",
      },
      {
        id: 2,
        name: "Bad Habits",
        y: sumValues(counts.drugIds),
        color: "#AE48D9",
      },
      {
        id: 3,
        name: "Edibles",
        y: sumValues(counts.foodIds),
        color: "#D6538A",
      },
    ]);
    setChartData(chartData);
    setSleepDurations(sleepTimes.reverse());
    // setStateData(counts);
    // setMoodSeries(tempMoodsSeries.reverse());
    console.log("Sleep", sleepTimes.reverse());
    console.log("Counts", counts);
    console.log("TempMoodsSeries", tempMoodsSeries.reverse());
    console.log("chartData", chartData);
    console.log("MooooodPie", moodPieChart(counts.feeling));
    console.log("moodPieChartData", moodPieChartData);
    return counts;
  };

  useEffect(() => {
    extractStats(records);
  }, []);

  return (
    <Container>
      <SubContainer xs={12}>
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
            right: 30,
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
        <Grid
          item
          display={"flex"}
          xs={12}
          borderRadius={5}
        >
          <LineChart width={1500} height={400} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sleep"
              stroke={COLORS.primary}
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="feeling"
              stroke={COLORS.yellow}
              strokeWidth={3}
            />
          </LineChart>
        </Grid>
        <Grid item display={"flex"} xs={12}>
          <LineChart width={1500} height={400} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="feeling"
              stroke={COLORS.yellow}
              strokeWidth={3}
            />
          </LineChart>
        </Grid>
        <Grid item display={"flex"} xs={12} >
          <LineChart width={1500} height={400} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sleep"
              stroke={COLORS.primary}
              strokeWidth={3}
            />
          </LineChart>
        </Grid>
        <h4>Sleep Flow</h4>
        <Grid item xs={12} display={"flex"}>
          {/* <Chart /> */}
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
                    data: moodPieChartData,
                    highlightScope: { faded: "global", highlighted: "item" },
                    faded: {
                      innerRadius: 30,
                      additionalRadius: -30,
                      color: "gray",
                      textAlign: "center",
                    },
                  },


                ]}
                slotProps = {{
                  legend: {
                    labelStyle: {
                      fontSize: 14,
                      fill: '#fff',
                    },
                  },
                }}
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
            <Grid item textAlign={"center"}></Grid>

            <Highchart data={categories} />
          </Grid>
        </Container>
      </SubContainer>
    </Container>
  );
};

export default Statistics;
