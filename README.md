# sw-1-week6-fe-pp1
1- The login method in userModel.js is a static method attached to the schema.
It allows the model (usually User) to call User.login() directly without creating an instance of the user.

2- Why use this?
It keeps the schema self-contained and reusable.
If the model name changes, you don’t have to update it everywhere — it just works through this.

3- Why is bcrypt imported in userController.js?
 Because we need to compare the input password and user password form database with the bcrypt libary.

4- Why is validator imported in userController.js?
Because we need to validate if the email is an email and if the password is strong.