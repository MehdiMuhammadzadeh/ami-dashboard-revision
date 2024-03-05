import { Box, Grid } from '@mui/material'
import React from 'react'

const PatientGalary = () => {
  return (
    <Grid
    item
    container
    component={"div"}

  >
    <Grid item component={"div"} container sx={{justifyContent:{xs:'center',md:'flex-start', lg:'flex-start'}}}>
      <Grid
        item
        container
        component={"div"}
        xs={9}
        md={4}
        lg={3}
        sx={{ backgroundColor: "#353455", textAlign: "center", padding: 1 ,borderRadius:2, justifyContent:'center'}}
      >
        <Grid
        item
          xs={12}
          component={"div"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              height: 75,
              width: 75,
              maxHeight: { xs: 75, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              marginRight: 1,
            }}
            alt="The house from the offer."
            src={
              "https://media.licdn.com/dms/image/D4E03AQFYbx3WpXj1cw/profile-displayphoto-shrink_800_800/0/1687338327098?e=1715212800&v=beta&t=0WXkM-bcphCs7wztlpPKHcBLovUxuijZL0D1oOB06ms"
            }
          />

          <Box
            component="img"
            sx={{
              height: 75,
              width: 75,
              maxHeight: { xs: 75, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              marginRight: 1,
            }}
            alt="The house from the offer."
            src={
              "https://media.licdn.com/dms/image/D4E03AQFYbx3WpXj1cw/profile-displayphoto-shrink_800_800/0/1687338327098?e=1715212800&v=beta&t=0WXkM-bcphCs7wztlpPKHcBLovUxuijZL0D1oOB06ms"
            }
          />
          <Box
            component="img"
            sx={{
              height: 75,
              width: 75,
              maxHeight: { xs: 75, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              // margin:1
            }}
            alt="The house from the offer."
            src={
              "https://media.licdn.com/dms/image/D4E03AQFYbx3WpXj1cw/profile-displayphoto-shrink_800_800/0/1687338327098?e=1715212800&v=beta&t=0WXkM-bcphCs7wztlpPKHcBLovUxuijZL0D1oOB06ms"
            }
          />
        </Grid>
        <Grid
        item
          xs={12}
          component={"div"}
          sx={{
            display: "flex",
            justifyContent: {
              xs:"center",
              md:''
            },
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              height: 75,
              width: 75,
              maxHeight: { xs: 75, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              marginLeft: 1,
            }}
            alt="The house from the offer."
            src={
              "https://media.licdn.com/dms/image/D4E03AQFYbx3WpXj1cw/profile-displayphoto-shrink_800_800/0/1687338327098?e=1715212800&v=beta&t=0WXkM-bcphCs7wztlpPKHcBLovUxuijZL0D1oOB06ms"
            }
          />
          <Box
            component="img"
            sx={{
              height: 75,
              width: 75,
              maxHeight: { xs: 75, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              marginLeft: 1,
            }}
            alt="The house from the offer."
            src={
              "https://media.licdn.com/dms/image/D4E03AQFYbx3WpXj1cw/profile-displayphoto-shrink_800_800/0/1687338327098?e=1715212800&v=beta&t=0WXkM-bcphCs7wztlpPKHcBLovUxuijZL0D1oOB06ms"
            }
          />
          <Box
            component="img"
            sx={{
              height: 75,
              width: 75,
              maxHeight: { xs: 75, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              margin: 1,
            }}
            alt="The house from the offer."
            src={
              "https://media.licdn.com/dms/image/D4E03AQFYbx3WpXj1cw/profile-displayphoto-shrink_800_800/0/1687338327098?e=1715212800&v=beta&t=0WXkM-bcphCs7wztlpPKHcBLovUxuijZL0D1oOB06ms"
            }
          />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
  )
}

export default PatientGalary