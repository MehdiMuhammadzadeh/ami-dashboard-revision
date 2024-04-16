import { Grid } from "@mui/material";
import { StyledText } from "../components/text/Text.styles";
import { COLORS } from "../styles/colors";

const NotFound = () => {
  return (
    <Grid container backgroundColor={COLORS.darkBackground}>
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50dvh",
          width:'100%'
        }}
      >
        <StyledText
          variant="textTitle"
          style={{ color: `${COLORS.danger}`, fontSize: "2rem" }}
        >
          PAGE NOT FOUND :(
        </StyledText>
      </Grid>
    </Grid>
  );
};

export default NotFound;
