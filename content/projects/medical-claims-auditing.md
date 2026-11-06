## Overview

A data auditing and reconciliation platform for medical insurance claims and premium files. Users upload raw files in whatever layout the source system produces; the platform maps them to a standard schema, runs reconciliation and audit calculations, and exports clean master datasets.

## The problem

Every source sends claims and premium data with different column names, formats, and quirks. Preparing that data for actuarial analysis used to take **days** of manual mapping and checking.

## My role

I was responsible for the frontend and backend, including integrating the calculation engine, which another team member owns, with the application.

## How it works

1. **Upload** claims and premium files (CSV, Excel, and TSV).
2. **Map:** the platform detects each file's schema and suggests mappings to standard fields; users review and save them, and saved mappings are reused next time.
3. **Standardise:** data is type-converted and loaded into an in-memory analytics database.
4. **Audit and reconcile:** generated SQL combines tables and historical data, applies data-quality checks and exclusions, and produces reconciliation summaries.
5. **Export** the final master data views.

## Engineering highlights

- **DuckDB for in-memory analytics,** fast enough to work interactively with large files.
- **Assisted schema mapping** with reusable saved mappings.
- **Background processing** for uploads and mapping, so the interface stays responsive.
- **SQL workspace:** run queries against the in-memory data and preview tables inside the app.
- **Desktop-style packaging** for offline use.

**Stack:** Python, Flask, DuckDB, Pandas, Plotly, JavaScript, PyInstaller.

## Outcome

Manual data preparation dropped from **days to minutes** for large insurance datasets, with consistent, repeatable audit checks.

> Client data, field mappings, and audit rules are confidential and are not shown here.
