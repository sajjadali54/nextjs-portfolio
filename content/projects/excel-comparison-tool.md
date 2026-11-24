## Overview

An application that compares an "actual" and an "expected" Excel or CSV file and shows exactly where they differ. It was built for actuarial model validation and reconciliation: checking a model run against the previous run, a recalculation against the original, or a client file against a reference file.

It runs as a desktop app, as a single Windows executable, or as a web server shared by a whole team.

## The problem

Reconciling large workbooks by hand is slow and easy to get wrong. Tables start in different places, columns get renamed, rows get re-sorted, and numbers that should match differ only by rounding. Teams needed a repeatable way to find real differences, record them, and sign them off.

## My role

I am the sole developer: I designed the application and built the comparison engine, reports, projects, and user interface. I built the first version between November 2025 and February 2026, and completed a full redesign as version 2 in November 2026.

## How it works

1. **Add file pairs** (Excel or CSV) one by one, or pair matching files from two folders automatically.
2. **Choose a comparison mode:**
   - **Aggregated:** compares each column as a whole (counts, totals, and value frequencies), so row order doesn't matter.
   - **Cell by cell:** compares every cell after lining up tables that start in different places.
   - **Matched by key:** pairs rows on key columns such as a policy or employee ID, so sorting and added or removed rows don't matter.
3. **Review columns:** set each column's type, its own tolerance (absolute or percentage), keys, grouping, columns to ignore, and renamed columns or sheets.
4. **Compare and review results:** a live progress panel tracks the run, and every difference is shown with its real cell address in both files, plus optional totals by group and a formula check.
5. **Report and sign off:** download Excel, PDF, and JSON reports, save runs in projects with reusable templates, re-run with different settings, and record an approved or needs-work review with per-sheet comments.

## Engineering highlights

- **Fault isolation by design:** one bad value, column, sheet, or file never stops the rest. Each level records a readable reason and the comparison continues.
- **Built for large files:** a fast Rust-based Excel reader, a fast CSV reader with automatic encoding and delimiter detection, and per-column rules applied once per distinct value rather than once per cell, which made large sheets about 7–8× faster.
- **Multi-user web mode without accounts:** each browser gets its own private workspace, with separate projects and reports.
- **Guardrails on input size:** oversized files are rejected before upload and again on the server, with a clear message instead of an out-of-memory failure.
- **Independent reports:** Excel, PDF, and JSON reports are written separately, so one failure never loses the others. Every difference in the Excel report links to its cell in a highlighted copy of the sheet.
- **Safe storage and display:** input files are stored once per project by content hash, saved data is written atomically, and text from uploaded files is escaped before it is shown.
- **Accessible results:** status is always shown with an icon or label, never colour alone.

**Stack:** Python, Flask, Pandas, NumPy, openpyxl, python-calamine, fpdf, PyWebview, Waitress, PyInstaller, JavaScript, Bootstrap.

## Performance

Measured on a laptop:

| Step | 1 million cells (50,000 rows × 20 columns, Excel) | 33 million cells (1,000,000 rows × 33 columns, 279 MB CSV) |
|---|---|---|
| Reading one file | about 0.8 s | about 5 s |
| Cell-by-cell comparison | about 1 s | about 60 s |
| Aggregated comparison | – | about 75 s |
| Matched by key | – | about 80 s |
| Excel report / PDF report | 3–5 s / under 1 s | – |

The version 2 redesign made the largest files several times faster: CSV reading dropped from about 52 s to 5 s, cell-by-cell comparison from about 450 s to 60 s, and aggregated comparison from about 440 s to 75 s.

## Outcome

Manual Excel comparisons became repeatable, documented runs that can be reviewed, re-run, and signed off, now fast enough to handle files of a million rows.

> Client data, model files, and internal configuration are confidential and are not shown here.
