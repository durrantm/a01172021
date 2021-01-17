##  Weather Forecast

Currently the application uses a form with an input field for the zip code.

The task in this request is to add the capability to use a request query parameter, e.g. ?zip=90210 in the URL
The abilitry to use the form to change it subsequently should remain.

My initial attempt includes code at lines 2 and lines 35037 in branch zip_from_query_params

I want to be able to use links to the app both internally ands externally that pass in the zip code.  
This is in addition to the user being able to use the form to change the zip code.

This application uses two APIs - rapidapi and openweathermap.

I created an openweathermap key and that is in the .env file in that branch

You will need a rapidapi key from rapidapi.com.  They have freemium plans.  I am using redline zipcode and weatherapi but this covers them both.
I don't give mine out because it is easy to have overage charges.  You do need a credit card to sign up but you can use the free plan assuming you don't incur overages.

I learned quickly to be careful about my useRef / useCallback API calls and the dependency array.  It is easy to get runaway PAI calls many thousands per second if yopu are not careful.

If you have written the code already and want mne to test please post the PR for me to get it.
Or post changes to make in a note or something that I can apply and test.
I'm ok fixing a few things as code never works right first time

