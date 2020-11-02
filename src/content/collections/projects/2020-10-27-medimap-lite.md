---
title: Medimap Lite
slug: medimap-lite
desc: Lite version of a fullstack project to visualize medicare costing data for various HCPCS Codes. Data for Oregon is embedded in the js bundle.
published: 10-27-2020
tags:
    - React
    - Python
    - Leafletjs
---
# Medimap Lite

### [Demo](https://yevgenybulochnik.com/medimap-lite)
This is an interesting project born out of a data set my brother showed me. The [data set](https://www.cms.gov/Research-Statistics-Data-and-Systems/Statistics-Trends-and-Reports/Medicare-Provider-Charge-Data/Physician-and-Other-Supplier2017), published by CMS, shows annualized charges and payments per NPI for HCPCS codes billed by various physicians and facilities. It has a mix of what appears to be facility fees and physician professional fees, with the most recent data coming from 2017.

My brother had a great idea, what if it was possible to geomap this dataset. How interesting would it be to see payment and reimbursement differences by geographical locations, or at the very least explore the data set with more an emphasis on location. Could this data be used to increase pricing transparency? How much do charges differ for the same HCPCS code based on provider location? How much of a difference is there between what providers/facilites charge vs how much medicare reimburses?

#### Data Munging and Data Analysis
---

