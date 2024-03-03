import { Grid, Typography } from '@mui/material'
import React from 'react'

const Note = () => {
  return (
    <Grid item xs={12} container>
    <Grid item xs={12} sx={{marginBottom:1}}>
      <Typography style={{ color: "#fff" }}>02/10/2023</Typography>
    </Grid>
    <Grid
      item
      container
      xs={12}
      sx={{ backgroundColor: "#1c2d3a", color: "#fff", borderRadius: 2,padding:2,wordBreak:'break-all' }}
    >
      <Grid item component={'div'} xs={12}>
        <Typography variant="h6" component={'h2'} style={{color:"#f5b869"}}>Note:</Typography>
      </Grid>
      <Grid>
        <Typography component={'p'} sx={{fontSize:{xs:'0.8rem', md:'1rem'}}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          libero. Natus ipsam perferendis at architecto, culpa quia aliquid
          enim aut qui tempore, odit possimus laudantium fugiat iste a
          tenetur veritatis! Eaque accusamus doloremque quos. Quia
          excepturi, et similique est libero modi facere magnam eius nostrum
          dolorum, unde qui velit ullam quas corrupti, quisquam non
          distinctio. Nulla quasi incidunt fuga, culpa est ad, voluptas
          omnis natus tenetur odio nostrum impedit sunt numquam? Et culpa
          impedit animi ullam corporis excepturi, dicta totam at ea
          voluptate voluptates dolorum eaque placeat corrupti numquam
          tempora, nobis harum, atque enim debitis repellat? Iste deleniti
          beatae mollitia voluptates fugiat, labore eius vero suscipit odit!
          Aperiam quia facere, dolore ipsa eaque eos architecto quam impedit
          quos tenetur laborum et error nobis reprehenderit illum
          praesentium nisi veniam, natus modi quas commodi suscipit? Natus
          cum consequatur ullam nostrum veritatis numquam non quas
          voluptatibus cumque impedit provident possimus incidunt ut saepe
          voluptatum quo alias recusandae quis eveniet, molestiae assumenda
          iure quidem. Architecto sapiente numquam in, sit illum neque
          molestias odit voluptatum qui exercitationem eveniet, vero
          cupiditate autem deserunt reiciendis culpa dignissimos
          perferendis. Provident, itaque alias autem ipsam voluptatem
          obcaecati numquam dolor esse quaerat corporis assumenda minus illo
          aliquam distinctio deleniti quam!
        </Typography>
      </Grid>
      <Grid item component={'div'} xs={12} sx={{marginBlock:1}}>
        <Typography variant="h6" component={'h2'} style={{color:"#f5b869"}}>Medicine:</Typography>
      </Grid>
      <Grid item component={'div'} xs={12}>
        <Typography component={'p'} sx={{fontSize:{xs:'0.8rem', md:'1rem'}}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          libero. Natus ipsam perferendis at architecto, culpa quia aliquid
          enim aut qui tempore, odit possimus laudantium fugiat iste a
          tenetur veritatis! Eaque accusamus doloremque quos. Quia
          excepturi, et similique est libero modi facere magnam eius nostrum
          dolorum, unde qui velit ullam quas corrupti, quisquam non
          distinctio. 
        </Typography>
      </Grid>
      <Grid item component={'div'} xs={12} sx={{marginBlock:1}}>
        <Typography variant="h6" component={'h2'} style={{color:"#f5b869"}}>Homework:</Typography>
      </Grid>
      <Grid item component={'div'} xs={12}>
        <Typography component={'p'} sx={{fontSize:{xs:'0.8rem', md:'1rem'}}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
          libero. Natus ipsam perferendis at architecto, culpa quia aliquid
          enim aut qui tempore, odit possimus laudantium fugiat iste a
          tenetur veritatis! Eaque accusamus doloremque quos. Quia
          excepturi, et similique est libero modi facere magnam eius nostrum
          dolorum, unde qui velit ullam quas corrupti, quisquam non
          distinctio.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, sequi.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, sequi.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, sequi.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, sequi.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, sequi.
        </Typography>
      </Grid>
    </Grid>
  </Grid>
  )
}

export default Note