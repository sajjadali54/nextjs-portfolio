## Overview

A ride-hailing app for Android with two sides: one for passengers who request rides, and one for drivers who accept and complete them. It includes live location tracking, cloud-backed data, and in-app payment.

## The problem

A client wanted their own ride-hailing app, similar to the services already popular in the market. At the same time, our team was taking an Android app development course. We asked our professor whether we could build the client's app as our course project, and he agreed, so the work had to satisfy both a paying client and the course.

## My role

We were a team of three. I worked mostly on the backend: the data model, Firebase integration, and the logic connecting passengers and drivers. One teammate designed the full user interface, and the third integrated payments and maps.

## How it works

1. **Passengers** sign in, set a pickup point and destination, and request a ride.
2. **Drivers** receive requests and accept them from the driver interface.
3. **Live location tracking** on Google Maps follows the trip for both sides.
4. **Payment** is completed in the app through Google Pay.

## Engineering highlights

- **Two user experiences in one product:** separate passenger and driver flows built on shared data.
- **Firebase backend:** Cloud Firestore stores users and ride data, alongside other Firebase services.
- **Maps and location:** Google Maps integration for locations and live tracking.
- **Payments:** Google Pay integration for in-app payment.

**Stack:** Kotlin, Android, Android Studio, Firebase, Cloud Firestore, Google Maps, Google Pay.

## Outcome

A working ride-hailing app built for a client, developed to a real customer's requirements while also meeting an academic brief.
