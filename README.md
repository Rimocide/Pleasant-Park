
*Pleasant Park: A Secure E-commerce Store with SQL Injection Protection*

Pleasant Park is a robust e-commerce store built using PHP and SQL with a strong focus on security against SQL injection vulnerabilities. It prioritizes data integrity and customer protection, making it a reliable choice for online businesses.

*Key Features:*

- *Secure Backend:* Employing prepared statements and parameterized queries, Pleasant Park safeguards against SQL injection attacks, ensuring data integrity and preventing unauthorized access.
- *User-Friendly Interface:* The store offers a well-designed and intuitive user interface that provides a seamless shopping experience for customers.
- *Product Management:* Manage your product catalog effectively with features for adding, editing, and deleting products, along with inventory control.
- *Payment Integration:* Integrate with secure payment gateways to facilitate online transactions.


*Technologies:*

- *Backend:* PHP
- *Database:* SQL (MySQL recommended)
- *Server:* WAMP (Windows, Apache, MySQL, PHP)

*Setup Instructions:*

1. *Download and Install WAMP:*
   - Visit [https://www.wampserver.com/en/](https://www.wampserver.com/en/) and download the appropriate WAMP installer for your Windows system.
   - Run the installer and follow the on-screen instructions. During installation, ensure you select PHP and MySQL.

2. *Create a Database:*
   - Open phpMyAdmin from the WAMP start menu or by accessing http://localhost/phpmyadmin in your web browser.
   - Create a new database for your e-commerce store (e.g., pleasantpark).

3. *Upload Your Project Files:*
   - Extract your Pleasant Park project files into the www directory within your WAMP installation (e.g., C:\wamp64\htdocs).
   - Configure database connection details in your PHP scripts to point to the database you created (e.g., pleasantpark).

*Additional Considerations:*

- *Security:* Regularly update PHP and MySQL to address potential vulnerabilities. Implement additional security measures as needed.- *Customization:* Adapt the store's design and features to match your specific business needs.

*Feel free to contribute to this project by reporting issues, suggesting improvements, or adding new features. Your collaboration is valuable!*

*Breakdown of Downloading, Setting Up WAMP, and Uploading SQL Files:*

1. *Download WAMP:*
   - Go to [https://www.wampserver.com/en/](https://www.wampserver.com/en/) and download the latest WAMP installer for your Windows version.

2. *Install WAMP:*
   - Run the downloaded installer and follow the on-screen instructions.
   - Choose the "Standard" or "Custom" installation option, ensuring you select PHP and MySQL.
   - Complete the installation, and WAMP will automatically start the Apache web server and MySQL service.

3. *Create a Database:*
   - Open phpMyAdmin in your web browser (http://localhost/phpmyadmin).
   - Click on the "New" tab.
   - Enter a database name (e.g., pleasantpark) and click "Create".

4. *Upload SQL Files:*
   - Extract your Pleasant Park project files.
   - Locate the SQL source file(s) within the project directory.
   - Access phpMyAdmin and select the database you created (e.g., pleasantpark).
   - Click on the "Import" tab.
   - Browse and select your SQL source file(s).
   - Click "Go" to import the SQL data into your database.

Remember to update database connection details in your PHP scripts to match the database name and credentials you used.
