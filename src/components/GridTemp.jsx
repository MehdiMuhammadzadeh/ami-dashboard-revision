import { Box, List, ListItem, Grid, Collapse } from "@mui/material";

export const GridTemp = () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7,
  ];

  return (
    <Grid container spacing={1} overflowY="auto" flex={1} height="100%">
      {arr.map((item) => {
        return (
          <>
            <Grid item xs={12} md={6} lg={3}>
              <Box bgcolor="blue" width="100%" height="250px"></Box>
            </Grid>
          </>
        );
      })}
    </Grid>
  );
};
