
npm run build

1.	Get the data by scraping the index site on the EMR / input from pdf using record
2.	Convert the data from a Json file to a Px class in JS
3.	Expected features
    a.	Display info from multiple records at once
        i.	Option to Direct comparison among different records (e.g. Rx changes)
4.	Future improvement
    a.	Provide tentative Dx and Mx

Stream line of web dev
1. Get the data structure ongoing and present the data on the page first
2. Implement features such as button and date selection
3. Format the page with HTML structure and CSS

TODO:
Upload data of a class to the firebase (some sort of object.keys(examType).foreach)
Potential implementation 1: add each examtype to the firebase, only display at client side if contain data, show test details from different visit for easier comparison
Exam flow chart based on exam type (e.g. PCC)
Pathology and individual procedure search (e.g. corneal stain and color cons fitting)