import React,{useEffect, useState} from "react";
import axios from "axios";
import { TextField,Grid,Button,Card } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";




export const Datajson=()=>{
  const navigate=useNavigate()
     const [data, setData] = useState([]);
     const [origdata, setOrigata] = useState([]);
     const [text,setText]=useState("")
     const [sortBy, setSortBy] = useState("");

    const getdata = async () => {
        const result = await axios.get("https://coralmango.com/api/react-test");
        setData(result.data);
        setOrigata(result.data);
        console.log(result.data);
      };
    
      useEffect(() => {
        const filterd = origdata.filter((item) =>
          item.name.toUpperCase().includes(text.toUpperCase())
        );
        setData(filterd);
      }, [text]);

      useEffect(() => {
        getdata();
      }, []);

      const sortByName = () => {
        setSortBy("name");
      };

      const sortByAge = () => {
        setSortBy("age");
      };

      let sortedData = data;
      if (sortBy === "name") {
        sortedData = data.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
      } else if (sortBy === "age") {
        sortedData = data.sort((a, b) => a.age - b.age);
      }

    return(
        <React.Fragment>
          {/* <Nav/> */}
            <h1>Employee Data</h1>
            <Grid container spacing={0}>
            <Grid item xs={10}></Grid>
                <Grid item xs={2}><Button variant="contained" color="error" onClick={()=> navigate("/")}>Logout</Button></Grid>

                <Grid item xs={4}>
            <TextField
              label="Type...."
              fullWidth
              onChange={(e) => setText(e.target.value)}
            /></Grid>
            <Grid item xs={8}></Grid>
             <Grid item xs={2}>
              <Button onClick={sortByName}>Sort by Name</Button>
            </Grid>
            <Grid item xs={3}>
              <Button onClick={sortByAge}>Sort by Age</Button>
            </Grid>
             <Grid item xs={3}><Card sx={{bgcolor:"aqua",color:"black"}}>{text !== "" && <p>You are viewing filtered Result.</p>}</Card></Grid>
             <Grid item xs={8}>
       <TableContainer component={Paper} style={{ border: '1px solid black' }}>
      <Table>
        <TableHead>
        <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Occupation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.age}</TableCell>
              <TableCell>{item.occupation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>   
    </Grid>     
    </React.Fragment>
    )
}