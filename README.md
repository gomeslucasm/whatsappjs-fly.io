# WhatsAppJS on Fly.io

## Overview

This repository contains the implementation of a WhatsApp communication system using WhatsAppJS. It includes the core WhatsAppJS functionality and a dedicated page for displaying the QR code needed for authentication. Additionally, the project is configured for deployment on Fly.io, facilitating easy scaling and management.

## Features

- **WhatsAppJS Integration**: Leverages the WhatsAppJS library to interface with WhatsApp Web.
- **WhatsappJS QRCode Page**: Includes a web page that displays the QR code necessary for users to authenticate their WhatsApp accounts.
- **Deployment on Fly.io**: Ready-to-deploy on Fly.io, providing robust hosting and scaling options.

## Getting Started

To get started with this project, clone the repository and follow the setup instructions below.

### Prerequisites

- Node.js installed (version X or above)
- Fly.io account and CLI installed

### Installation

1. Clone the repository:

```bash
git clone https://github.com/gomeslucasm/whatsappjs-fly.io.git
docker-compose build
```

## Usage

To run the application locally:

```bash
docker-compose up
```

To deploy the application on Fly.io:

```bash
fly deploy
```

## Contributing

Contributions are welcome! Please read the contributing guide to learn how you can contribute to this project.
License

This project is licensed under the MIT License - see the LICENSE.md file for details.
