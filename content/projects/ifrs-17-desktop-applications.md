## Overview

Three Windows desktop applications for IFRS 17 measurement, covering the premium allocation approach (PAA) for non-life business and the general measurement model (GMM) and variable fee approach (VFA) for life business. A further variant of the VFA application is released separately with its own model. Each application runs an Excel-based actuarial model end to end: inputs, data checks, model execution, consolidation, and output files.

## The problem

The actuarial models live in large, **macro-enabled Excel workbooks**. Running them by hand across entities and portfolios is slow and error-prone, and actuaries needed a guided application that validates inputs before long-running calculations start.

## My role

I built the desktop interface and integrated it with the backend and model components, working alongside another developer and the actuarial team, who own the calculations and validation. I also adapted the original non-life application into the life insurance versions for GMM and VFA. The VFA variant reuses the VFA application I developed; for that release I integrated its updated backend model and updated its title and metadata.

## How it works

1. **Upload** the Excel inputs.
2. **Data check:** inputs are validated before any long processing starts.
3. **Run the model:** Python drives the Excel workbooks and their macros.
4. **Consolidate** results across entities and portfolios, then export the output files.

## Engineering highlights

- **Shared architecture, independent releases:** the applications share a UI and application structure, while each keeps its own model logic and is released separately, which made the VFA variant a model swap rather than a new build.
- **Excel automation:** xlwings drives workbooks and macros; openpyxl handles direct workbook edits.
- **Multi-page desktop UI** with shared state across pages.
- **Packaged executables:** separate path handling for development and packaged builds, and a release checklist that tests the packaged app end to end with representative inputs.

**Stack:** Python, PySide6, xlwings, openpyxl, Pandas, NumPy, PyInstaller.

## Outcome

A guided desktop workflow for IFRS 17 models across non-life and life business, so actuaries can run validated model cycles with less manual handling of workbooks.

> Client data, model workbooks, and the actuarial methodology are confidential and are not shown here.
