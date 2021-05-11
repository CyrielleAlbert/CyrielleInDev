# I built an Machine Learning model for Cardiovascular risk prediction & a Telegram bot to use it.

Hi there! 

I have recently started to learn machine learning with Python. As always, I decided to build my project to make it less abstract in my head. 
I got a dataset for Cardiovascular risk prediction from a teacher. It is a really interesting one as it shows different criteria for CVR prediction such as the glucose level, BMI, or age.

So here is how I've built the program from A to Z. I don't think you should see this as an online course or a tutorial. Even if I will try to explain as much as possible, I can't go in-depth into the different ML algorithms, encoders, and helpful functions. You would probably need some basic knowledge to understand it.

I'm also not going to explain how to build a Telegram Bot, because there's a lot of good tutorials for that. I will only explain what I did once everything is set up.

## **I. Building the classifier (the hardest part)**

Before starting, for this project I used these libraries: 
**Numpy** (np), **Pandas** (pd), **Sklearn**, **Matplotlib.pylot** (plt)

There is a lot of different algorithms & parameters for building an ML model and here the goal is to achieve the best accuracy. To reach that, I divided my program into 4 big steps.

1. **Data visualization  & analysis**
2. **Algorithms evaluations**
3. **Algorithm tuning**
4. **Final model conception**

All 4 steps are important to find the best algorithm.

### **1. Data visualization & analysis**

When you receive a dataset, it is important to analyze the data to check the quality. 
This part is the one I prefer because that's where I can play with the data.

#### **a) Data types**

One of the most important things I check when I start is the data types and understand how was built the dataset.

![Alt text](/Images/CVRPredictor/data_types.png)

It is important to get an idea of what you are using and how you are going to process the data.

You can also display the firsts lines of your dataset. 

![Alt text](/Images/CVRPredictor/data_visualisation.png)

The columns we want to predict is the column called target. We can see that is it is a category feature. We will talk more about what it implies later but it is important information.
In addition to that, we can notice that 3 categories are quantitative features (age, BMI, and glucose level) and that the other ones are category features.


#### **b) Quality of the values**

Another thing we could analyze take a look at is the quality of the values.

We can check if there are **NaN values** (equivalent to missing data or "Not a Number" values).

![Alt text](/Images/CVRPredictor/Nan_values.png)

Here we can see that there are some NaN values. Compared to the size of the dataset (499 data), 44 is not much. We don't need to remove them. However, we need to deal with it later.


We can also check if there are some **unexpected categories** or values out of the range.

![Alt text](/Images/CVRPredictor/abberant_values.png)

![Alt text](/Images/CVRPredictor/aberrant_values_plot.png)

Here, I took the example of gender and age. We can see that there is only two genders and that the age of the people seems to be more or less within the normal range (we don't see values above 150).

There are plenty of other things you could take a look at, but the most important are **the type of the data** or **type of the features**, **NaN values** and **aberrant values**.

### 2. Algorithms evaluations
In this part, we will try different machine learning algorithms and we will evaluate the potential accuracy of each algorithm.

From now, we will use the library Sklearn. It will include all the functions we need to build the ML model.

#### a) Train-Test Split

As explained before, the column we want to predict is the one called Target. The others are called features. 
However, if you want to build an accurate machine learning model, you have to split your dataset to have some data to build the model on and some data to test it on. If you don't do that, it's likely that the model will fit well to your data, but won't fit to new data coming. The ideal split is said to be 80/20, which means 80% of the dataset used for the training and 20% for the test.
However, it depends on the size of your dataset.


Sklearn provides a good function for splitting your dataset.
![Alt text](/Images/CVRPredictor/train_test_split.png)

Once the data are split, we need to prepare the data for the model. Indeed, when we analyzed the data in step 1, we realized that there are both quantitative and categorical features, but also that there were some missing values.

First, we need to replace the NaN values. But which value to choose? It depends on the type of feature. If it is a quantitative feature, then you can choose to replace it with the median value of the whole feature, the mean value or the most frequent value, or a constant.

For example, let's say there is one missing value in the feature representing the age. You could choose to replace it with the mean value of the total population (55 y.o.), the median (60 y.o), the most frequent value (52 y.o), or a constant that you choose (20 y.o).


If it's a categorical feature, you can't replace the missing value with a median or a mean value. What would be the mean value between 'Rural' and 'Urban'? That's why we are more limited and we can only choose to replace it with the most frequent value or a constant like 'Rural'.


The next step is to encode the categorical features. Indeed, the SKlearn library does not understant objects. There are different ways to encode, I mostly use Label encoding, which encodes the strings to integer, and One Hot encoding, which encodes the strings to a binary number.

You can also rescale the numerical features as you want (normalize, standard scale, robust scaling for outliers data...).
I have used the standardScaler. It transforms the data so that it looks more or less like standard normally distributed data.

In this case, we use the SKlearn preprocessing library, which will provide us with functions **SimpleImputer** for replacing the NaN values, **OneHotEncoder** for One hot encoding, and **StandardScaler** for standard scaling of the data.

Preparing the data for the model is tantamount to create a **Pipeline**. 

![alt text](/Images/CVRPredictor/data_preparation_cv.png)

Preparing the data for the model is tantamount to create a Pipeline.
The last line of code creates a transformer that regroups each feature with its preprocessing pipeline to conform to the SKlearn ML algorithms requirements.

#### b) Cross-Validation
As explained when we checked the data types, it is important to know whether the targeted prediction is supposed to be a category or a quantity. Indeed, supervised learning includes two big parts, a classification which is about predicting a label, and regression which is about predicting a quantity. As a consequence, the type of model that we want to build needs to fit the type of learning we want to do. In our case, as the prediction needs to be a category (based on the dataset we've got), we are going to create a classifier.

There are different well-known classifiers, but I have decided to evaluate only 3 of them (Logistic Regression, Support Vector Machine, and Decision Tree Classifiers) as that's the one I fully understand. To evaluate the classifiers, we are going to use the K-fold cross-validation technique. It consists of splitting the training data into smaller folds and create & test each classifier that fits each fold. It will return a list with the accuracy of each classifier. 

![alt text](/Images/CVRPredictor/Cross_validation.png)

#### c) Compare algorithm
To be able to choose the best classifier, we can calculate the mean value and the standard deviation of the accuracies per classifier. The classifier with the highest mean accuracy and lowest accuracy deviation is most likely to be the right one to use.
We can also visualize the distribution of the accuracies for each classifier.

![alt text](/Images/CVRPredictor/algo_comparison.png)

After analyzing the previous results, we will choose the **Logistic Regression Classifier**. However, the Support Vector Classifier could also have been chosen as the accuracy is high enough (higher than 0.7).

### 3. Algorithm tuning

Now that we have chosen the classifier, we need to find the best parameters to **tune** it.
The function **GridSearchCV** will create and fit each classifier with the different parameters we will choose to test.
Then it will sort the classifiers by accuracy and it uses the cross-validation method.

First, we need to define which parameters we want to test. 
After reading the [Sklearn documentation](https://scikit-learn.org/stable/supervised_learning.html#supervised-learning), few parameters seem to be interesting. 
I have chosen to test the **C value**, the type of **penalty**, the type of **solver**, and the **number of iteration**. The l1_ratio is a parameter used to modify a type of penalty, the elastic net.
In that part, I tested different iterations before finding the interesting range.

![alt text](/Images/CVRPredictor/Grid_search.png)

The best score and best params for the logistic regression are stored in the GridSearchCV attributes **best_score** and **best_params**.

![alt text](/Images/CVRPredictor/grid_search_best_score.png)
![alt text](/Images/CVRPredictor/grid_search_best_params.png)

### 4. Final model conception

Now we know which type of classifier to use and which parameters are the best. We just need to build the new model and train it on the data we have.

![alt text](/Images/CVRPredictor/final_model.png)


After testing it, the model's accuracy is 0.78. 
It is lower than it was with the default parameters but that's normal as it shows that this model is likely to be the best on average. So, when testing it on other batches of data, the accuracy might be higher or lower.

Only these few lines of code will be used in the Telegram bot. Indeed, now we know which model is the best so we don't need to do it again in the telegram bot. 

## **II. Building the Telegram bot (the easiest and most exciting part)**

Now we are going to make the model useful. What we want to do with this model is to predict cardiovascular risks.
The few steps are the following:

1. **Encode the dataset**
2. **Build the ML model**
3. **Gather the user information**
4. **Predict**

### 1. Dataset encoding

The first step is to manually encode the dataset. Indeed, as we are going to gather the user information after the ML model will be built, there is a risk that the users' information won't be encoded the same way the dataset will be.
The idea is to attribute a number to each categorical value in each categorical feature, and **keep** the encoding keys as we need to use the same one when we will encode the user information before predicting.

Here is how I encoded the dataset:

![alt text](/Images/CVRPredictor/encoding_key.png)

I did it quickly with the replace function of an IDE.

As we don't need to test the model again, I only kept in the dataset the data we used to build the model previously (the 80% first data).

### 2. ML model building

Once the dataset is encoded, we can build the **Logistic Regression model** with the parameters found before.

![alt text](/Images/CVRPredictor/telegram_build_model.png)

You can notice that **we have removed the encoding technic** from the Simple Imputer of the categorical pipeline.

### 3. Gathering the user information

Now the model is ready, we only need to create the Telegram bot and get the token. 
Everything is explained [here](https://core.telegram.org/bots#:~:text=for%20existing%20ones.-,Creating%20a%20new%20bot,mentions%20and%20t.me%20links.).

To ensure better security, you shouldn't hardcode the token, especially if you want to share the code on GitHub.

To build the backend of the Telegram bot, we are going to use the library [python-telegram-bot](https://python-telegram-bot.readthedocs.io/en/stable/).

#### a) Connect the bot to the backend & define the commands

First, we need to initialize the bot.

![alt text](/Images/CVRPredictor/init_bot.png)

The first step is to define the **Updater** and the **Dispatcher**. The Updater will update the telegram bot on the user side while the dispatcher will update the backend of the bot. They are the tunnels between our code and the user phone.

Then we need to define the **commands**. The commands are the different actions you want your bot to do. 

In this case, we want a command /start, to welcome the users and guide them, and a command /predict to start gathering info and predict cardiovascular risks. 
When the user will send a command, on the backend, the function associated with the command will be triggered.
So if the user sends us "/start", the function called start in our program will start, and if the user sends us "/predict", the function called predict will start.

In our poll, we will use **buttons** and we will ask the user to **write some answers**. We also need to handle that. 
So whenever a user writes down something that is not a command, the function getWrittenAnswers will be triggered, and when a user will press a button, the function buttonHandler will be triggered.

Finally, we start the updater to start the bot.

Now the bot is **ready**, we only have to program the different functions.

#### b) Send a welcoming message (/start)

Most of the bot have a command /start to guide the user. We are going to build one that will get the username and send a message back that will explain what to do to start the prediction.

![alt text](/Images/CVRPredictor/start_bot.png)

For each handler, we will access **update** and **context**. Update gives information about the last message received, and context information about the discussion.
Thus, we can access the username in the update object and we will send a message using the context object.

#### c) Start the poll (/predict)

Before starting the poll code, we need to create the questions and answers.
The questions asked are **related** to the columns of the dataset we have built our model on and need to be in the same order, and the answers need to be **similar** to the one in the dataset.

To make the bot more flexible, we will create a JSON file that will contain the questions and another JSON file that will contain the answers tp each categorical question. 

In the answers JSON file, we will make sure that the **position of the answer** in the list of possible answers is the same as its **encoding key**. Thus we will only need to access the position of the answer and we won't need to encode the string value of the answer.


##### Now, we can start the poll. 


For each categorical question, we will ask the user to chose between different choices with **buttons**.
For each numerical question, the user will be asked to **write the answer**.

![alt text](/Images/CVRPredictor/ask_question.png)

To handle the answers, we need to handle the reception of messages and the buttons' activations.
Each answer will be stored in the global variable temp_user_data, which is a list, at the index of the question.


For the buttons' activations, as we made sure the index of the answer is the same as the encoding value, we can store the index value of the button and go to the next question.
We will just make sure that the question is a categorical question to avoid any error.

![alt text](/Images/CVRPredictor/button_handler.png)


For the written answers, as they can appear at any moment in the discussion and not only after a question, we need to **handle different cases**. 

In the case the question number is defined and it is not a categorical question (**successful case**), then we'll get the string and try to convert it to float. If it works, then we store the value and go to the next question. 

If we can't convert it to float, it might be because the user doesn't know the answer. Indeed some questions are really specific. Thus, we asked them to write "null", which can't be converted to float. If it's the case, then we store the mean value of the dataset for this answer so that it does not impact much the prediction.

If it doesn't include null then we ask the user to send it again with syntax guidelines.

In the case the question number is not defined, we redirect the user to /predict to start the prediction.
In the case the question is categorical, we remind the user to press a button and not write the answer.

![alt text](/Images/CVRPredictor/written_ans_handler.png)


To go to the next question, we simply increment the question number and call the function ask_question again. However, if there are no more questions then we will call the function prediction to predict cardiovascular risks.

![alt text](/Images/CVRPredictor/next_question.png)


### Prediction of cardiovascular risks

Once we have all the data required, we can start the prediction. 
As it is a categorical prediction, the answer will be binary.
If it appears to be 0, then there is no risk, otherwise, there is a risk.

We need to format the data before prediction as the function needs a dataframe with the name of the columns. 
As we sorted the answers the same way the dataset was sorted, the columns of the dataframe will be the same as the columns of the dataset.

Using the model we have built at the beginning and the predict function on the user data, we are now able to predict cardiovascular risks.

![alt text](/Images/CVRPredictor/prediction.png)



## Resources: 

**SKlearn**:  [Sklearn documentation](https://scikit-learn.org/stable/supervised_learning.html#supervised-learning)

**Numpy**: [Numpy documentation](https://numpy.org/)

**Pandas**: [Pandas documentation](https://pandas.pydata.org/)

**Matplotlib**: [Matplotlib documentation](https://matplotlib.org/)

**Python Telegram Bot**: [Python Telegram Bot documentation](https://python-telegram-bot.readthedocs.io/en/stable/)

**The whole jupyter notebook for the part I**: [Github repository ML](https://github.com/CyrielleAlbert/CVRPrediction)

**The whole python script for the part II**: [Github repository bot](https://github.com/CyrielleAlbert/TelegramCVRPrediction)