FROM postgres:10
ENV POSTGRES_USER project2db
ENV POSTGRES_PASSWORD project2db
ADD schema.sql /docker-entrypoint-initdb.d
EXPOSE 5432
