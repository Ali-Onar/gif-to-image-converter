# GIF to Image Converter

## Introduction

The **GIF to Image Converter** is a Node.js-based tool designed to efficiently convert a large number of GIF files into Image format while resizing them to specified dimensions. Leveraging the power of **TypeScript** and the **Sharp** library, this tool ensures high-performance image processing suitable for both small and large batches of images.

## Features

- **Batch Conversion**: Convert multiple GIF files to Image format in one go.
- **Supported Formats**: png, webp, tiff, avif, jpeg, etc.
- **Resizing**: Automatically resize images to desired dimensions.
- **Concurrency Control**: Optimize performance by processing multiple files simultaneously.
- **Logging**: Track conversion progress and errors with detailed logs.
- **Retry Mechanism**: Automatically retry failed conversions to ensure completeness.

## Prerequisites

Before setting up the project, ensure you have the following installed on your machine:

- **Node.js** (v14 or later)
- **npm** (Node Package Manager)
- **TypeScript** (installed globally or as a project dependency)

> **Note**: While Sharp is a pure Node.js library, it relies on [libvips](https://libvips.github.io/libvips/) under the hood. Ensure that your environment meets [Sharp's installation requirements](https://sharp.pixelplumbing.com/install).

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/gif-to-png-converter.git
2. **Install dependency packages**
   ```bash
   npm install
3. **Initialize TypeScript Configuration**
    ```bash
    npx tsc --init
4. **Add your gif files in gifs folder**
5. **Run script**
   ```bash
   npx ts-node convert.ts

## Keywords
- convert gif to image
- gif to png
- gif to jpeg
- resize gif