## Overview

A desktop application for running the day-to-day records of a school: student and staff data, reports, and charts. It supports classes up to grade 7, and it is **still in use at a primary school today**.

We built it as our second-semester project for the Object-Oriented Programming course at Sukkur IBA University.

## The problem

Small schools often keep student and staff records on paper or in scattered files, which makes reporting slow and data easy to lose. The goal was a simple, reliable tool that staff could use without technical knowledge or an internet connection.

## My role

We were a team of three. I focused on the backend: data processing, data storage, and security. One teammate led the user interface, and the third tested the application before release.

## How it works

1. **Manage records** for students across classes up to grade 7, and for staff.
2. **Store data locally** in binary data files, so the app works fully offline.
3. **Analyse and visualise** the data with built-in charts.
4. **Generate and print reports** for the school's administration.

## Engineering highlights

- **Object-oriented design throughout:** we applied the core OOP principles from the course, including abstraction and encapsulation, to structure records, storage, and screens.
- **File-based persistence:** a custom data layer reads and writes records to binary files, without a database server.
- **Access security** for the application's data.
- **Charts and printable reports** built into the desktop interface.

**Stack:** Java, Java Swing, file I/O.

## Outcome

A first-year project that outgrew the classroom: years later, a primary school still relies on it for its records and reports.
