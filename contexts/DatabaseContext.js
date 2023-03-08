import React, { createContext, useState, useEffect } from "react";

const DatabaseContext = createContext();

export function DatabaseProvider({
  children,
  user,
  activitiesData,
  goalsData,
  moodsData,
  categoriesData,
  dataIsLoaded,
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activities, setActivities] = useState(activitiesData);
  const [moods, setMoods] = useState(moodsData);
  const [goals, setGoals] = useState(goalsData);
  const [categories, setCategories] = useState(categoriesData);
  const [isLoaded, setIsLoaded] = useState(dataIsLoaded);
  useEffect(() => {
    console.log("is running");
    setActivities(activitiesData);
    setGoals(goalsData);
    setMoods(moodsData);
    setCategories(categoriesData);
    setIsLoaded(dataIsLoaded);
  }, [dataIsLoaded]);

  return (
    <DatabaseContext.Provider
      value={{
        user: user,
        isLoaded: isLoaded,
        setIsLoaded,
        activities,
        setActivities,
        moods,
        setMoods,
        goals,
        setGoals,
        categories,
        setCategories,
        selectedDate,
        setSelectedDate,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
}

export default DatabaseContext;
