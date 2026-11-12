## Overview

A desktop application that compares an "actual" and an "expected" Excel workbook and shows exactly where they differ. It was built for actuarial model validation and reconciliation: checking a model run against the previous run, a recalculation against the original, or a client file against a reference file.

## The problem

Reconciling large workbooks by hand is slow and easy to get wrong. Tables start in different places, columns get renamed, rows get re-sorted, and numbers that should match differ only by rounding. Teams needed a repeatable way to find real differences, record them, and sign them off.

## My role

I was responsible for the design, frontend, and backend of the whole application. I built the first version between November 2025 and February 2026, and I am now leading a full redesign as version 2.

## How it works

1. **Add file pairs** one by one, or pair matching files from two folders automatically.
2. **Choose a comparison mode:**
   - **Aggregated:** compares each column as a whole (counts, totals, and value frequencies), so row order doesn't matter.
   - **Cell by cell:** compares every cell after lining up tables that start in different places.
   - **Matched by key:** pairs rows on key columns such as a policy or employee ID, so sorting and added or removed rows don't matter.
3. **Review columns:** set each column's type, its own tolerance (absolute or percentage), keys, grouping, columns to ignore, and renamed columns or sheets.
4. **Compare and review results:** every difference is shown with its real cell address in both files, plus optional totals by group and a formula check.
5. **Report and sign off:** download Excel, PDF, and JSON reports, save runs in projects, re-run with different settings, and record an approved or needs-work review.

## Engineering highlights

- **Fault isolation by design:** one bad value, column, sheet, or file never stops the rest. Each level records a readable reason and the comparison continues.
- **Fast reading of large files:** a Rust-based Excel reader runs about 7× faster than the standard Python reader.
- **Vectorised comparison:** a single shared comparison core handles numbers within tolerance, dates in any format, and text, with floating-point noise filtered out.
- **Linked Excel report:** every difference links to its cell in a highlighted copy of the sheet.
- **Safe storage:** input files are stored once per project by content hash, and saved data is written atomically so a crash never leaves a half-written file.
- **Accessible results:** status is always shown with an icon or label, never colour alone.

**Stack:** Python, Flask, Pandas, NumPy, openpyxl, python-calamine, PyWebview, Waitress, PyInstaller, JavaScript, Bootstrap.

## Performance

Measured on a laptop with 50,000 rows × 20 columns (one million cells):

| Step | Time |
|---|---|
| Reading one file | about 0.8 s |
| Cell-by-cell comparison | about 1 s |
| Key matching with shuffled rows | about 8 s |
| PDF report | under 1 s |

## Outcome

Manual Excel comparisons became repeatable, documented runs that can be reviewed, re-run, and signed off, with reports ready to share.

> Client data, model files, and internal configuration are confidential and are not shown here.
