import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, Container, Card, Paper } from '@material-ui/core';
// import { Container } from "@material-ui/core";
import BannerSilder from "../components/BannerSlider"
import ProductView from "../components/ProductView"
import ChartistGraph from "react-chartist";
import LineChart from "../components/charts/LineChart";

// line chart
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// Highmap
import mapDataAsia from "../components/charts/mapDataAsia";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// Line chart
const options = {
  chart: {
    type: "spline"
  },
  title: {
    text: "My chart"
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6]
    }
  ]
};

// High Map

require("highcharts/modules/map")(Highcharts);

var data = [
  ["ae", 37],
  ["af", 44],
  ["am", 20],
  ["az", 19],
  ["bd", 9],
  ["bh", 12],
  ["bn", 43],
  ["bt", 26],
  ["cn", 70],
  ["cnm", 33],
  ["cy", 48],
  ["ge", 27],
  ["id", 65],
  ["il", 29],
  ["in", 65],
  ["iq", 36],
  ["ir", 70],
  ["jk", 40],
  ["jo", 31],
  ["jp", 100],
  ["kg", 52],
  ["kh", 25],
  ["kp", 45],
  ["kr", 70],
  ["kw", 35],
  ["kz", 28],
  ["la", 38],
  ["lb", 46],
  ["lk", 51],
  ["mm", 13],
  ["mn", 34],
  ["my", 18],
  ["nc", 47],
  ["np", 50],
  ["om", 5],
  ["ph", 1],
  ["pk", 39],
  ["qa", 41],
  ["ru", 70],
  ["sa", 2],
  ["sg", 65],
  ["sh", 17],
  ["sp", 10],
  ["sy", 30],
  ["th", 4],
  ["tj", 22],
  ["tl", 24],
  ["tm", 32],
  ["tr", 65],
  ["tw", 49],
  ["uz", 23],
  ["vn", 21],
  ["ye", 6]
];

const mapOptions = {
  title: {
    text: ""
  },
  colorAxis: {
    min: 0,
    stops: [[0.4, "#ffff00"], [0.65, "#bfff00"], [1, "	#40ff00"]]
  },

  series: [
    {
      mapData: mapDataAsia,
      name: "Asia",
      data: data
    }
  ]
};


export default function HomeFragment() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    < Container>
      <Grid container spacing={2}>
        <Grid item sm={4} bgcolor="red">
          <Card>
             <div>
              <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
          </Card>
        </Grid>
        <Grid item sm={8} >
          <Card>
          <h2>Highmaps</h2>
           <HighchartsReact
              options={mapOptions}
              constructorType={"mapChart"}
              highcharts={Highcharts}
        />
          </Card>
        </Grid>


      </Grid>




    </ Container>
  );
}
