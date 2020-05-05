# BvB Node Api

This is the nodejs api for Bulls vs. Bears, a commission free stock trading api that utilizes basic algorithmic trading.

## How To Get Started

1. `cd docker && docker-compose up -d`
    - this starts up the dev environment
    - Please see .env.example files for necessary environment variables.

## Basic Docker Commands

- To enter the container machine:
  - `docker exec -it [container_name] bash`
- To see which containers are running:
  - `docker ps`

## PostgreSQL steps to enter database

1. `cd docker && docker-compose up -d`
2. `docker exec -it bvb_db bash`
3. `psql -d BvsB -U [user]`
