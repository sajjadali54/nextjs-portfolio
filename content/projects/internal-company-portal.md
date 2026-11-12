## Overview

An internal web portal where staff browse, add, and maintain the company's catalogue of models and its library of regulations. Changes go through an approval workflow, and every role in the organisation sees the tools that match its responsibilities.

## The problem

The company needed one shared place for its models and regulatory material, with clear ownership, the right access for each role, and a controlled way to propose and approve updates.

## My role

We built the portal as a team of three between November and December 2024. I helped design the application's structure and its role hierarchy, built frontend pages, and worked on the role-based access and the approval workflow. The backend API is a separate service.

## How it works

1. **Browse the catalogue:** models are grouped by category, each with its own detail page and version history.
2. **Read regulations in the browser:** regulation documents open directly in the portal, with previews for PDF, Word, and Excel files.
3. **Propose changes:** users add or edit models and regulations, attaching files and comments.
4. **Approve or reject:** managers review incoming requests and approve them, or reject them with a recorded reason.
5. **Administer access:** administrators manage users, groups, and roles, and review an activity log.

## Engineering highlights

- **Role-based experience:** five role levels, from regular users up to super-administrators, each with its own navigation and pages built on shared components.
- **Reusable UI kit:** shared tables, modals, form controls, file upload, and a multi-format document viewer used across every role.
- **Approval workflow:** request, review, approve, or reject with a reason, with clear status indicators throughout.
- **Forms and validation** with Formik and Yup, and app-wide state with Redux Toolkit.

**Stack:** React, Redux Toolkit, React Router, Formik, Yup, Axios, react-pdf, Mammoth, SheetJS, Sass, Vite.

## Outcome

One shared place to find the current version of every model and regulation, with a clear record of who proposed and approved each change.

> Internal content, users, and system details are confidential and are not shown here.
