import { Box } from '@mui/material'
import React from 'react'

const Image = ({src}) => {
  return (
    <Box
    component="img"
    sx={{
      height: 60,
      width: 60,
      maxHeight: { xs: 75, md: 167 },
      maxWidth: { xs: 75, md: 250 },
      borderRadius: "50%",
      boxShadow: "1px 2px 3px rgba(19, 19, 19, 0.5)",
    }}
    alt="user avatar"
    src={src}
  />
  )
}

export default Image