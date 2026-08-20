---
title: 'Installing WordPress and MySQL in Docker'
description: 'A short guide to setting up a WordPress development environment with MySQL and phpMyAdmin using Docker Compose.'
pubDate: '2024-07-02'
heroImage: '../../assets/posts/installing-wordpress-and-mysql-in-docker.png'
category: 'Projects'
---

This short guide is aimed at developers who want to quickly set up a WordPress development environment using Docker. It assumes you have Docker installed on your machine. If you don't, you can download it from the [official website](https://www.docker.com/products/docker-desktop).

The steps we will need to follow are just three:

1. Creating required Docker Compose files
2. Running the Docker Compose command
3. Setting up WordPress

## Creating required Docker Compose files

This Gist is a template for the `docker-compose.yml` file. It contains the WordPress and MySQL services, and also phpMyAdmin for database management. You can copy and paste it into a new file named `docker-compose.yml`.

```yaml
version: "4.0"

services:
  # MySQL Database
  database:
    image: mysql:latest
    volumes:
      - database_data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress
    networks:
      - wordpress_network

  # phpMyAdmin
  phpmyadmin:
    depends_on:
      - database
    image: phpmyadmin:latest
    restart: always
    ports:
      - "8081:80"
    environment:
      PMA_HOST: database
      MYSQL_ROOT_PASSWORD: password
    networks:
      - wordpress_network

  # WordPress
  wordpress:
    depends_on:
      - database
    image: wordpress:latest
    ports:
      - "8000:80"
    restart: always
    volumes:
      - ./wordpress:/var/www/html
    environment:
      WORDPRESS_DB_HOST: database:3306
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
    networks:
      - wordpress_network

networks:
  wordpress_network:

volumes:
  database_data:
```

## Running the Docker Compose command

With a terminal open in the same directory as the `docker-compose.yml` file, run the following command:

```bash
docker-compose up -d
```

This command will download the required images and start the containers. The `-d` flag is used to run the containers in the background.

## Setting up WordPress

Now that the containers are running, you can access WordPress by visiting [http://localhost:8000](http://localhost:8000) in your browser. You will be prompted to set up the site. The database connection details are passed through environment variables, so you don't need to worry about them.

**P.S.**: A huge thank goes to [Brad Traversy](https://gist.github.com/bradtraversy) who setted up the composer script that I updated in this guide.
