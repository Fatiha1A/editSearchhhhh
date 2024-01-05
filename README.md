## National Transfert Transactions
## Documentation

[Documentation](https://react.dev/learn)


## Description
This project is the development of a distributed web application for managing national transfers. A national transfer is an operation by which a sender requests the availability of funds in another point of sale for a beneficiary or in BOA ATMs for himself.

The management of national transfers handles the following functionalities:

Issuing a national transfer
Serving a issued transfer
Extortion of a national transfer (in case of point of sale error)
Restitution of a national transfer (Customer request / beneficiary suspected or blacklisted)
Blocking of a national transfer (Back Office or Automatic)
Putting a national transfer into disuse (Automatic)
Unlocking a national transfer
Notification of the issuer and beneficiary of the national transfer
The issuance of a national transfer can be initiated from the Agency and Wallet channels. However, the transfer issuance service specifies the channel used to serve the transfer amount.

The amount of the transfer to be served on BOA ATMs must be checked when issuing the transfer. This amount must be divided by 100 and must not exceed the ceiling of 2000.00 DH per transfer with an annual amount of 20,000.00 DH, also the beneficiary must be the sender.

Technical requirements

The application must be developed using a microservices architecture. The mobile part of the application must also be provided.

Tests, deployment, work with collaboration tools, dev-Ops and agile methods will be highly encouraged.

It would also be better to mix several backend technologies (.NET, Java, Python, etc.) using different web services.

A presentation and a report must be provided.

Project goals

The goals of this project are to:
Develop a distributed web application for managing national transfers.
Use microservices architecture.
Provide a mobile version of the application.
Use agile methods and tools.
Mix different backend technologies.
Prepare a presentation and a report.
Project scope

The scope of this project includes the following:
Development of the application's backend
Development of the application's frontend
Development of the application's mobile version
Testing of the application
Deployment of the application
