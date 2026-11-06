## Overview

A valuation platform that calculates end-of-service (gratuity) liabilities for employers. Actuaries upload employee data and disclosure workbooks, review data-quality checks, run a suite of valuation models, and produce the Excel results and PDF reports that go to clients.

The platform is used for valuations across Pakistan and the Middle East.

## The problem

Gratuity valuations repeat the same steps for every client: clean the employee data, reconcile it with last year's, apply the assumptions, run several models, and assemble the disclosures. Done by hand, each step invites inconsistency, and the volume of clients makes manual work slow and hard to review.

## My role

I joined the project at version 2 and became the lead developer for version 3 and version 4, which is in progress. On v3 and v4 I am responsible for the calculation logic, the frontend, and the backend. The actuarial team defines the requirements, formulas, and validation; I turn their specifications into working, tested software.

## How it works

1. **Upload** the employee data and disclosure workbooks.
2. **Data checks.** The app validates structure, missing values, employee-data quality, staff movements, and assumptions before any model runs, which is where most data problems are caught.
3. **Models.** **12 valuation models**, including an IAS 19 valuation, run on the validated data.
4. **Results and analysis.** Tabular and visual summaries, descriptive analysis, and salary and movement analysis.
5. **Disclosures and reports.** Generated Excel results and PDF valuation reports.

## Engineering highlights

- **Separation of concerns:** each screen calls a service layer that holds the business and actuarial logic, so models can change without rewriting the UI.
- **Spec-driven Excel ingestion:** expected workbook structures are defined in one place, so template changes don't ripple through the codebase.
- **Automated reporting:** PDF reports and formatted Excel outputs, with charts generated alongside them.
- **Desktop delivery:** the same app runs in the browser or as a packaged Windows application.

**Stack:** Python, Pandas, NumPy, openpyxl, XlsxWriter, Plotly, Matplotlib, ReportLab, Streamlit, PyWebview, PyInstaller.

## Outcome

A repeatable valuation workflow that the actuarial team runs across the region, with data checks, model runs, and reports handled in one application.

> Client data, actuarial assumptions, and the model formulas are confidential and are not shown here.
