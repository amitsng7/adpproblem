Hi, 

After doing the npm install and running project on localhost:3000, You will see the two radio button on top to select the problem 1 or problem 2 (both mentioned below). Once after selecting the problem different form are going to appear dynamically with instruction on how the input data should look like. Once you enter the data and hit submit, you should be able to see the output for home assignment problem in output textarea and for second problem you need to check the console for the output. 

Here I have provided some screenshots from my testing:
Problem 1: Create a React app with two text areas and a "submit" button. Users are expected to enter a comma separated list of strings in each text box. Clicking the "submit" button will parse each text area splitting by commas. It will print out the list of strings in the left text box that are not present in the right text box.
TC1: When user submit form without entering any data in text1, and text2, the output will notify the user to enter the valid data in text1 and text2. 
![image](https://user-images.githubusercontent.com/17215848/117244274-c13d7800-ae06-11eb-908a-8604d72ccc0d.png)
TC2: When user submit form after entering either one of text1, and text2 but not both, the output will notify the user to enter the valid data in text1 and text2. 
![image](https://user-images.githubusercontent.com/17215848/117244459-095c9a80-ae07-11eb-8af6-2bdd94f050b4.png)
TC3: When user submit form after entering both text1, and text2, the output will display the list of string available in text1 but not present in text2.
![image](https://user-images.githubusercontent.com/17215848/117244668-76703000-ae07-11eb-99ce-a01dde5b7929.png)

Problem 2: Flaten a nested object

TC1: When user submits the form without enter anything in the text box.
![image](https://user-images.githubusercontent.com/17215848/117245039-1fb72600-ae08-11eb-9eea-e3ea6c28f893.png)
TC2: When user enters a valid JSON string, then the function should be able to return a flat object.
![image](https://user-images.githubusercontent.com/17215848/117245183-69077580-ae08-11eb-985d-0a1f9bae8d93.png)

Please let me know if you need any explantion.
