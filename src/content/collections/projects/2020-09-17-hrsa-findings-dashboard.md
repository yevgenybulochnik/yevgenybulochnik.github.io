---
title: HRSA Findings Dashboard
slug: hrsa-findings-dashboard 
desc: This fullstack project uses flask as an api and React for the frontend. Data is scraped from HRSA, manipulated and fed into a filterable dashboard
published: 9-17-2020
tags:
    - FullStack
    - Python
    - Flask
    - React
    - Scrapy
---
# HRSA Findings Dashboard

### Demo: [yevgenybulochnik.github.io/hrsa-findings-dashboard](https://yevgenybulochnik.github.io/hrsa-findings-dashboard)

This project is a full stack dashboard using flask and React/Redux + typescript. A sudo ETL pipeline is setup using Scrapy and docker to obtain [HRSA Program Integrity Data](https://www.hrsa.gov/opa/program-integrity/index.html). The data is adjusted to feed a Restapi using Scrapy items and pipelines. The api uses flask, sqlalchemy, marshmallow and webargs to allow for specific data queries and summaries. A modular "dataService" is used for the front end to allow a deployable version of the dashboard to github pages with data being embedded in the js bundle. The "dataService" is swappable on build using env vars. 
