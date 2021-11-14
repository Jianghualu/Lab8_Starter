# Lab 8 - Starter

Jianghua Lu:

1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

    a. Within a Github action that runs whenever code is pushed 
    b. Manually run them locally before pushing code
    c. Run them all after all development is completed

    ANS: I would choose to within a Github action that runs whenever code is pushed. Because this way it will make sure my latest code is saved and won't break any functionality. And we can test our code before the very end of impletation. 

2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)
   
    Ans: No, because in order to check the output, I don't really need the user's actions.

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    Ans: No, because sometimes we may want to check if the function works properly or if it's the style we want. if we use the unit test to test, we won't tell all this information, and we won't be able to test how each function interacts with each other on application level.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   
   Ans: Yes, because usually I can just call a simple function to test the length of the message. And it's not complicated to do. 

