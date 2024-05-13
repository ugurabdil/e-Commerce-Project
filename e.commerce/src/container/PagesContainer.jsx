import React from 'react'
import Container from '@mui/material/Container';

function PagesContainer({ children }) {
  return (
    <div>
        <Container maxWidth="lg">{children}</Container>
    </div>
  )
}

export default PagesContainer