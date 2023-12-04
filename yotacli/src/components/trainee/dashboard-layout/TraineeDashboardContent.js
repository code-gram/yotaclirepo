import React from "react";
import classes from './TraineeDashboardContent.module.css'
import {BarChart, Bar,  XAxis,  YAxis,  CartesianGrid,  Tooltip,  Legend,  ResponsiveContainer,  PieChart,  Pie, Cell} from "recharts";

const TraineeDashboardContent = (props) => {
  const data = [
    {
      technology: "Java",
      performance: 50,
    },
    {
      technology: "React-js",
      performance: 60,
    },
    {
      technology: "Angular",
      performance: 55,
    },
    {
      technology: "Spring boot",
      performance: 65,
    },
    {
      technology: "Sql",
      performance: 30,
    },
    {
      technology: "Aws",
      performance: 25,
    },
    {
      technology: "Spring",
      performance: 75,
    },
  ];
  const data01 = [
    {
      name: "Java",
      value: 400,
    },
    {
      name: "React-js",
      value: 300,
    },
    {
      name: "Angular",
      value: 200,
    },
    {
      name: "Spring boot",
      value: 100,
    },
    {
      name: "Sql",
      value: 50,
    },
    {
      name: "Aws", 
      value: 189,
    },{
        name: "Spring", 
        value: 289,
      },
  ];


const COLORS = ['#f48fb1','#90caf9','#0288d1',  '#00bcd4', '#26a69a','#66bb6a','#aed581'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {data01.value}
        </text>
    );
};

  return (
    <main
      className={props.isNotActive ? `${classes.mainContainer}` : `${classes.mainContainerstyle}`}
    >
      <div className={classes.mainCards}>
          <ResponsiveContainer width="100%" height="100%">
          <div className={`${classes.card } ${classes.cardFisrt }`}>
            <div className={classes.cardInner}>
              <h6>Assigned test</h6>
              <div>20</div>
            </div>
          </div>
        </ResponsiveContainer>

         <ResponsiveContainer width="100%" height="100%">
          <div className={`${classes.card } ${classes.cardSecond }`}>
            <div className={classes.cardInner}>
              <h6>Assigned Client Interview Question</h6>
              <div>12</div>
            </div>
          </div>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height="100%">
          <div className={`${classes.card } ${classes.cardThird }`}>
            <div className={classes.cardInner}>
              <h6>...</h6>
              <div>64</div>
            </div>
          </div>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height="100%">
          <div className={`${classes.card } ${classes.cardFourth }`}>
            <div className={classes.cardInner}>
              <h6>...</h6>
              <div>8</div>
            </div>
          </div>
        </ResponsiveContainer>
      </div>

      <div className={classes.charts}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart           
            data={data}
            
          >          
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="technology" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="performance" fill="#8884d8" >
                  {data.map((data, index,arr) => (
                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} ></Cell>
                ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={730} height={250}>
          <Legend layout="vertical" verticalAlign="center" align="top" 
           
          />
            <Pie
              data={data01}
              dataKey="value"
              nameKey="name"
              cx="60%"
              cy="10%"
              outerRadius={100}
              fill="#8884d8"
              label
          
            >
                {data01.map((data, index,arr) => (
                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} ></Cell>
                ))}
            </Pie>
            
          </PieChart>
        </ResponsiveContainer> 
      </div>
    </main>
  );
};

export default TraineeDashboardContent;
