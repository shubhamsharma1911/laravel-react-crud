FROM php:8.0.2-fpm-alpine

# Comment this to improve stability on "auto deploy" environments
RUN apk update && apk upgrade
# Install basic dependencies
RUN apk -u add bash git

# for mysqli if you want
RUN docker-php-ext-install pdo 
RUN docker-php-ext-install mysqli pdo_mysql 
RUN docker-php-ext-enable pdo mysqli pdo_mysql 
# Install PHP extensions
ADD ./.docker/install-php.sh /usr/sbin/install-php.sh
RUN chmod +x /usr/sbin/install-php.sh
RUN /usr/sbin/install-php.sh

# Copy existing application directory contents
COPY ./.docker/*.ini /usr/local/etc/php/conf.d/
COPY . .

# Change current user to www-data
USER www-data

# Expose ports and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
