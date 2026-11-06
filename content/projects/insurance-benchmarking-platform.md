## Overview

A web platform for insurance benchmarking and data analysis. Actuaries upload large datasets, combine and prepare them, and analyse them by factor, row, column, and pivot views, with charts for business mix, claim frequency and severity, tariff rates, and trends.

## The problem

Benchmarking work depends on slicing large insurance datasets in many different ways. Doing that in spreadsheets is slow, hard to repeat, and limited by file sizes.

## My role

I co-developed the platform with another developer, working across the frontend, backend, integration, and calculation logic. The actuarial team defined the analyses and validated the results.

## How it works

1. **Upload:** large files are uploaded in chunks and reassembled on the server, and multiple files can be merged.
2. **Prepare:** select a dataset, review its metadata, and rename columns.
3. **Analyse:** one-way, two-way, pivot, and factor analysis.
4. **Visualise:** business mix, frequency, severity, tariff, and trend charts, with full-size views and insight screens.

## Engineering highlights

- **REST API and single-page app,** with backend routes organised by area and a separate service layer.
- **Chunked uploads** so large datasets don't fail on a single request.
- **Validated requests** with Pydantic models on the API.
- **Filter-driven charts:** the frontend sends user filters and renders charts and tables from the API's responses.

**Stack:** Python, FastAPI, Pandas, Pydantic, React, Redux, Vite, interactive charting libraries.

## Outcome

A single place where actuaries can explore large datasets and compare business mix and tariff rates, supporting data-driven pricing decisions.

> Client data, tariff values, and analysis methodology are confidential and are not shown here.
