## Overview

A web payment service modelled on the core of PayPal. Users register, send money to other users by email, request payments, and accept, reject, or renew incoming requests. Each account holds a preferred currency, and transfers are converted automatically.

## The problem

A payment system has to guarantee that money is never created or lost: a transfer must debit one account and credit another together, or not at all, even when several requests arrive at once.

## My role

I built this for a client during my time at Solspro, working on my own across the data model, the transfer and request logic, the currency conversion, and the interface.

## How it works

1. **Sign up and sign in** with Django's authentication, choosing a preferred currency (EUR, USD, or GBP).
2. **Send money** to another user by email; the amount is converted into the recipient's currency.
3. **Request money** from another user, who can accept or reject the request; the requester can renew it.
4. **Track activity** through each user's transaction history, while administrators manage users and transactions in the Django admin.

## Engineering highlights

- **Atomic transfers:** money-moving operations run inside database transactions, so a failure part-way through rolls everything back.
- **Clear domain model:** account holders, transactions, and payment requests with an explicit pending, accepted, or rejected lifecycle.
- **Currency conversion** handled by a dedicated conversion step, using fixed exchange rates.
- **Built-in protections:** CSRF protection on every form and ORM queries instead of raw SQL.

**Stack:** Python, Django, Django ORM, SQLite, Bootstrap.

## Outcome

A working payments prototype that demonstrates transactional integrity, request workflows, and multi-currency handling. A production version would add live exchange rates, automated tests, and a production database.
