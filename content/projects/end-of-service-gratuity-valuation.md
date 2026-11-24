## Overview

A valuation platform that calculates end-of-service (gratuity) liabilities for employers under IAS 19. Actuaries upload employee data and the prior-year disclosure, review data-quality checks, run a suite of valuation models, and produce the Excel results, disclosures, and PDF reports that go to clients.

The platform is used for valuations across Pakistan and the Middle East.

## The problem

Gratuity valuations repeat the same steps for every client: clean the employee data, reconcile it with last year's, apply the assumptions, run several models, and assemble the disclosures. The original application ran every calculation inside the page, so large valuations blocked the interface and could take hours.

## My role

I joined the project at version 2 and became the lead developer for version 3 and version 4. I am responsible for the calculation logic, the frontend, and the backend, and I am now leading a full rewrite of the application on Flask. The actuarial team defines the requirements, formulas, and validation; I turn their specifications into working, tested software.

## How it works

1. **Upload** company details, the employee data workbook, and the prior-year disclosure.
2. **Data checks.** The app validates sheets, employee data, staff movements, and contributions before any model runs, which is where most data problems are caught.
3. **Models.** **Nine valuation models**, including an IAS 19 valuation, assumption variants, and previous-year and adjusted models, plus sensitivity scenarios on the main model. Long runs happen in the background with a progress bar.
4. **Results.** Result workbooks to download, with charts of the workforce by age and service.
5. **Disclosures and reports.** A disclosure built from the results, and a client-ready PDF report for the company and each entity.

## The Flask rewrite

The platform began as a Streamlit application. I am rebuilding it on Flask with a clear separation between the calculation engine, the web layer, and reporting:

- **Background jobs:** long calculations no longer block the page, and progress is shown as they run.
- **One shared engine:** nine near-identical model implementations were consolidated into a single engine.
- **Faster runs:** on very large datasets, assumption and sensitivity runs that took **hours** now finish in **minutes**, and a typical base run dropped from about **6.5 minutes to about 12 seconds**.
- **Verified against the original:** golden tests compare results value by value with the legacy application and the actuaries' Excel models, matching to the cent, with rounding that matches Excel.
- **Safer workflow:** each valuation's state is saved on disk, re-uploading a file clears any results that depended on it, and pages tell users which earlier step to run first.

The rewrite is in progress, with the original application still serving as the reference for behaviour.

## Engineering highlights

- **Testable engine:** calculations are independent of the interface, so they can be tested without a browser.
- **Automated reporting:** formatted Excel outputs and PDF disclosures and reports, with charts generated alongside them.
- **Offline-ready delivery:** front-end assets are bundled locally, and the application is packaged as a Windows desktop app.

**Stack:** Python, Flask, Jinja, HTMX, Bootstrap, Pandas, NumPy, openpyxl, XlsxWriter, Plotly, Matplotlib, fpdf2, Waitress, PyWebview, PyInstaller, pytest.

## Outcome

A repeatable valuation workflow that the actuarial team runs across the region, now being rebuilt so that the largest valuations run in minutes instead of hours.

> Client data, actuarial assumptions, and the model formulas are confidential and are not shown here.
