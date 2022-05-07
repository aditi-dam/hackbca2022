# hackbca2022

Inspiration: 
We were always interested in the Myers-Briggs Type Indicator, known as MBTI, that categorizes personalities into 16 different types. We wanted to explore the 
topics of machine learning and web app dev to build a project during HackBCA VI that would predict these types.

What it does: 
The user types in a short passage about themselves as an input for the model. The more detail the user gives it, the greater the accuracy. The model will analyze
the given input, and a list of personality traits will be returned, along with a prediction for the user's MBTI personality.

How we built it: 
For the machine learning portion, we built a TensorFlow Keras Sequential model that we trained on a dataset from Kaggle comprised of journal posts and MBTI types. 
For the web app development portion, the webpage was built primarily with JavaScript, styled with CSS and Handlebars, and hosted on Heroku.

Challenges we ran into: 
Although we were able to complete the web application and the machine learning model separately, we did not have enough time to integrate the two. Ideally, we would 
like to have the web application run the model and analyze the user's input, but we did not have enough time to explore this.

Accomplishments that we're proud of: 
We are proud of being able to accomplish the two parts of the project separately, with both being functional and presentable on their own. Building these entirely from 
scratch was difficult, but we were able to accomplish these and learn a lot along the way.

What we learned: 
We learned how to use a text classification model and how to construct a neural network. We also learned how to continuously re-fit/improve the model based on its 
performance and normalize the results so that we could interpet them. For the web app, we learned how to use Node, Materialize, and more in order to build the page 
and make it look polished.
