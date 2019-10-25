# performance-chart
Performance-chart for react

## sample 
I have created a sample to demonostrate how it works.
[https://munna.github.io/performance-chart-app/](https://munna.github.io/performance-chart-app/)

## Install

`npm i performance-chart@latest`

## How to use

```
const data=[
    {name: "BOTTOM", value: 20, color: "#FF0000"},
    {name: "Neutral", value: 20, color: "#FFA500"},
    {name: "AVERAGE", value: 20, color: "#FFFF00"},
    {name: "No comment", value: 20, color: "#7CFC00"},
    {name: "TOP", value: 20, color: "#008000"}
  ];
  <PerformanceChart size="300" current="10" data={data}></PerformanceChart>
  <PerformanceChart size="300" current="56" data={data}></PerformanceChart>
```

