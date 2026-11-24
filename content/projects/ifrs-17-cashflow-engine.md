## Overview

A cashflow and valuation engine for insurance reporting under IFRS 17. Users upload gross business workbooks and, optionally, reinsurance workbooks; the engine projects cashflows, calculates the liability for incurred claims (LIC) and the liability for remaining coverage (LRC), reconciles the outputs, and produces the Excel workbooks used for reporting.

## The problem

The inputs are large, macro-enabled Excel workbooks, and the calculations previously took around **a week** to run and assemble. Every run also needed careful checks that outputs reconciled with inputs, and each new reporting period meant rebuilding inputs by hand from client system exports.

## My role

I was responsible for the frontend and backend, including integrating the actuarial modelling code with the application. The actuarial team owns the calculation methodology and validation; I built the application around it, contributed to the performance work, and wrote the developer handover guide and user manual.

## How it works

1. **Upload and validate.** Users upload the gross workbook, optional reinsurance workbook, and optionally a bundle of client system exports. Inputs are checked, with errors and warnings listed separately on an issues page.
2. **Review parameters.** Valuation and projection settings are read from the workbook for review.
3. **Choose and run.** Users pick which outputs to calculate; the engine runs the cashflow and liability logic, then the output reconciliation checks.
4. **Review and download.** Results and a pass/fail check summary are shown, with output workbooks available individually or as one archive.
5. **Keep the run.** Every run is saved in a project, so it can be reopened, recalculated, or compared later.

## Engineering highlights

- **Bulk import from client exports:** the app fills the input workbooks from a bundle of exported tables. Each file is validated in full before anything is applied, so a bad file never leaves a half-updated workbook.
- **Projects and runs:** results survive restarts, runs can be labelled and locked as final, recalculated with edits, or compared side by side, and input files are stored once per project by content hash.
- **Faster recalculation:** lightweight, macro-free copies of the inputs shrink them from tens of megabytes to a few hundred kilobytes, so an edit-and-recalculate cycle takes seconds rather than minutes.
- **Backward compatibility:** newer template layouts are mapped at load time, so older templates and earlier saved runs keep working.
- **Resilient checks:** a reconciliation check that cannot be calculated is reported with its reason instead of stopping the run.
- **Flexible delivery:** runs as a web server or as a packaged desktop application.

**Stack:** Python, Flask, Pandas, NumPy, openpyxl, XlsxWriter, Waitress, PyWebview, PyInstaller.

## Outcome

Processing time dropped from **about a week to about a day**. The platform has continued to evolve through several major versions, with bulk import and project-based run management being added in the current releases.

> Client data, templates, and the actuarial methodology are confidential and are not shown here.
