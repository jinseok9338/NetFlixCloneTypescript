## Building Netflix from Scratch Using React (Custom Hooks, Context, Portals), Firebase, Compound & Styled Components (10 Hour Tutorial Here: https://www.youtube.com/watch?v=x_EEwGe-a9o)

This application (a Netflix clone) was built using React (Custom Hooks, Context), Firebase & Styled Components. I have built the following pages within this application: sign in, sign up, browse & lastly the homepage. There are four different pages, some using protected routes with auth listeners. Firebase firestore handles all the data and that data is retrieved using a custom hook; authentication is used on all pages, which is handled by Firebase as well.

I used compound components (just a design pattern) to build my components, and there's over 10 examples as to how these are used. The styling is all handled via styled components. Using compound components made my actual dumb components really easy to test.

Subscribe to my YouTube channel here: http://bit.ly/CognitiveSurge where I build projects like this! And don't forget, you can contribute to this project (highly encouraged!).

![Preview](netflix-preview.png?raw=true)

The original Project Description is above.  
I am porting this project with typescript. Please add Firebase Config to src/lib.firebase.prod.ts
You need to add Movie and Series data to Firestore for it to properly function.

I have written components and pages and functions in Typescript but I have problem with route.js in helper folder. I made a workaround allowing javascript in tsconfig.json. 

I have not changed the test yet, maybe later in the future.
If you want to jump in and made suggestion or change the code by all means do it so :) Happy Coding 
