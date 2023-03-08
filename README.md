<img src="./assets/logo.png"/>

# track-it

A tracker app designed to build habits and gain insights into your daily behaviour and mood

## features

With the track-it app you can:
* create any custom behavioural category you would like to track
* set daily and weekly goals
* log your mood and activities throughout the day
* review your goal completion rate and current streak
* review your activity level per category (or subcategory) throughout the week or month
* review how your daily mood correlates with this activity level

<img src="./assets/mockups.png"/>

## technologies

Track-it is a React Native application built with Expo and a Firebase backend.
The firebase database is set up in a way that each user has their own subcollection of activities, (behavioural) categories, goals and moods.
Goals and activities are linked to a category. Which means that whenever a user updates, for example the icon of a category, it does not need to be changed for every goal and activities but will instead get pulled from the category.
Whenever the user deletes a category, all related goals and activities are deleted as well.

To increase the speed of the app, manuel retrieval of the data from the database is performed after every time a user adds, edits or deletes an item.
This was preferred over a snapshot that automatically listens to any changes within the database, as this caused an abundance of state re-renders.

<img src="https://img.shields.io/badge/-React%20Native-78C77C"/> <img src="https://img.shields.io/badge/-Expo-FFAE94"/> <img src="https://img.shields.io/badge/-Firebase-79BEEE"/>


