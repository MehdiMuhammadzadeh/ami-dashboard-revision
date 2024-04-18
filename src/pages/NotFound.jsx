import { Grid, SvgIcon } from "@mui/material";
import { StyledText } from "../components/text/Text.styles";
import { COLORS } from "../styles/colors";
import SvgIcons from "../components/svg/SvgIcons";
import { apple, mvp, rocket } from "../components/svg/svgs";
import Image from "../components/avatar/Image";
import Apple from "../components/avatar/Apple";
import { useState } from "react";
import park from "../assets/svg/park.svg";
import AllIcons from "../components/svg/AllIcons";
import {Icons} from "../components/fontIcons/index.jsx";
import {feelingIcons} from '../utils/utils.js'

const NotFound = () => {
  const [changeColor, setChangeColor] = useState(true);

  const handleChangeColor = () => {
    setChangeColor(!changeColor);
  };

  return (
    <Grid container backgroundColor={COLORS.darkBackground}>
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50dvh",
          width: "100%",
        }}
      >
        <StyledText
          variant="textTitle"
          style={{ color: `${COLORS.danger}`, fontSize: "2rem" }}
        >
          PAGE NOT FOUND :( <Icons iconColor={'red'} name={''} size={100} />
        </StyledText>
      </Grid>
      <Grid backgroundColor={"yellow"}>
        {/* <SvgIcons src={apple} color={'brown'} />
        <SvgIcons src={mvp} />
        <SvgIcons src={rocket} />
        <Image src={apple} /> */}
        <img
          src={park}
          alt=""
          style={{
            filter:
              "invert(9%) sepia(99%) saturate(5630%) hue-rotate(246deg) brightness(111%) contrast(148%)",
          }}
        />
        {/* <Apple
          width={"100"}
          height={"100"}
          fill={changeColor ? "pink" : "orange"}
          onClick={handleChangeColor}
        /> */}
      {/* <SvgIcon /> */}
      <AllIcons />
      </Grid>
    </Grid>
  );
};

export default NotFound;
