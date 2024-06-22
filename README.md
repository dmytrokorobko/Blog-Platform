# Blog Platform with Admin Authorization

[Live Version](https://dmytrokorobko.github.io/Blog-Platform/)

## Project Overview

This project is a front-end only blog platform with admin authorization, allowing admins to create, edit, and delete articles. The application uses React and Context API for state management and Firebase Authentication for user authentication. Admin credentials are evaluated using an array with login names and passwords encrypted by SHA-256.

## Features

- User Authentication (Login, Logout)
- Role-based Access Control (Admin and Regular User)
- Admin Dashboard
  - Create, Read, Update, Delete (CRUD) Blog Posts
- Blog Post Display
- User-friendly Interface

## Tech Stack

- **Front End**: React, Context API, CSS Flex
- **Authentication**: Auth0
- **Deployment**: GitHub Pages
- **Encryption**: SHA-256 for admin credentials