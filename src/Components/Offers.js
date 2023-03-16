import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'

function Offers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/ingatlan', {
      "Content-Type": "application/json"
    })
    .then((data) => data.json())
    .then(data => setOffers(data));
  }, []);

  
  return (   
      <div id="main">
        <h1>Ajánlataink</h1>
        <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" className="tabla">
          <TableHead>
            <TableRow>
              <TableCell align="center">Kategória</TableCell>
              <TableCell align="center">Leírás</TableCell>
              <TableCell align="center">Hirdetés dátuma</TableCell>
              <TableCell align="center">Tehermentes</TableCell>
              <TableCell align="center">Fénykép</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {offers.map((offer) => (
              <TableRow key={offer.id}>
                <TableCell align="center">{offer.kategoriaNev}</TableCell>
                <TableCell align="left">{offer.leiras}</TableCell>
                <TableCell align="center">{offer.hirdetesDatuma}</TableCell>
                <TableCell align="center" sx={{color: offer.tehermentes ? "green" : "red"}}>{offer.tehermentes ? "Igen" : "Nem"}</TableCell>
                <TableCell align="center" ><img src={offer.kepUrl} alt="" style={{height:'150px'}}/></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
      </div>
  )
}

export default Offers;