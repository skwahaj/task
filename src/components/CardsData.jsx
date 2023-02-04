import React,{useState,useEffect} from "react";
import { Grid,Card,Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CardsData=()=>{
    const [data, setData] = useState([]);
    const navigate=useNavigate()

    const getdata = async () => {
        const result = await axios.get("https://coralmango.com/api/react-test");
        setData(result.data);
        console.log(result.data);
      };
      useEffect(()=>{
        getdata()
      },[])

    return(
        <React.Fragment>
            <h1>Cards Data</h1>
            <Grid container spacing={3} className="Grid">
            <Grid item xs={10}></Grid>
                <Grid item xs={2}><Button variant="contained" color="error" onClick={()=> navigate("/")}>Logout</Button></Grid>
            {
                data.map((item)=>(
                    <React.Fragment>
                    <Grid item xs={3} className="Grid-item">
                    <Card className="Card">
                    <img src="/Avatar.jpg" height={100} className="Card-img"/>
                    <h2 className="Card-h3" style={{color:"coral"}}>Name: {item.name}</h2>              
                    <h3 className="Card-h3">Age: {item.age} years</h3>              
                    <h3 className="Card-h3">Occupation: {item.occupation}</h3>              
            </Card>
            </Grid>
            </React.Fragment>
                ))
            }
           </Grid>
           <Grid ></Grid>
        </React.Fragment>
    )
}
