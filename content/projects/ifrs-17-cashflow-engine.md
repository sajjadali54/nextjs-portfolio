## Overview

A cashflow and valuation engine for insurance reporting under IFRS 17. Users upload gross business workbooks and, optionally, reinsurance workbooks; the engine projects cashflows, calculates the liability for incurred claims (LIC) and the liability for remaining coverage (LRC), reconciles the outputs, and produces the Excel workbooks used for reporting.

## The problem

The inputs are large, macro-enabled Excel workbooks, and the calculations previously took around **a week** to run and assemble. Every run also needed careful checks that outputs reconciled with inputs.

## My role

I was responsible for the frontend and backend, including integrating the actuarial modelling code with the application. The actuarial team owns the calculation methodology and validation; I built the application around it and contributed to the performance work.

## How it works

1. **Upload and validate.** The app reads the required sheets from macro-enabled workbooks and validates them before processing.
2. **Set parameters.** Users choose the valuation and projection settings for the run.
3. **Run.** The engine performs cashflow, LRC, reinsurance, and output-reconciliation logic, with live progress shown in the UI.
4. **Review and download.** Output workbooks and validation summaries, individually or as a single archive.

## Engineering highlights

- **Layered design:** routes, a separate calculation service layer, and shared configuration.
- **Config-driven sheet loading:** workbook structures are declared once instead of hard-coded across the code.
- **Reconciliation built in:** every run produces validation and consistency checks alongside the results.
- **Isolated runs:** each session writes to its own output folder.
- **Flexible delivery:** runs as a web server or as a desktop window.

**Stack:** Python, Flask, Pandas, NumPy, openpyxl, XlsxWriter, Waitress, PyWebview.

## Outcome

Processing time dropped from **about a week to about a day**, and the platform has continued to evolve through several major versions.

> Client data, templates, and the actuarial methodology are confidential and are not shown here.
