# FYP1-F22-081-D-SocialGuard
FYP1 F22 081 D SocialGuard. Sample code

This code folder holds the overall frontend and backend code along with the machine learning models used. The node modules are not uploaded due to size limitations. 



MERN Stack has been used for the website. 
Express is used to create APIs. 
After downloading these folders, run the command _npm i_ to install node modules mentioned in package.json. 
The database is a local DB so make sure that the latest versions of MongoDB and MongoDB Shell are installed. 
One database is the loginregister DB, which has 2 collections namely users and cases. 
User schema is used to store user details and case details are stored in the case schema. 

A user or admin can be registered through thunderclient / Postman / Registration page (users only). 
Session management and route protection is also implemented. 
Role based access control is further added with special priveleges for the admins. 
The admin can view cases, users, or archive cases as well delete users. 
The users can register a case by providing case details and uploading images as evidence. 
The images are stored against the user ID in the database which is automatically generated. 

After all dependencies are installed, the backend folder can be run by the command _node index.js_ or _nodemon index.js_. Make sure that nodemon is globally installed. TO start frontend folder, use the command _npm run start_ to install dependencies. 





The training.ipynb notebook uses sklearn libraries for model training, including SVC, AdaBoost (Scratch + Prebuilt), MLP, RFC, and SVC from scratch (errors in implementation). 
Our dataset was created on our own and is thus not shared right now. Thus, training would not be functional. This has been discussed with our supervisor. 
AdaBoost is implemented from scratch but provides poor accuracy. SVC from scratch is in the works since there are a lot of errors to be resolved. Currently, Sklearn models are providing the output. Once image path is provided, the data would be cleaned. OCR cleaning removes single words and splits the screenshot OCR results into separate rows/messages. This text is then passed onto the model for testing, from which the severity results are determined accordingly. 


