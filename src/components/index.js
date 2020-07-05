import React from "react";
import { Switch, Route } from "react-router-dom";
import { map, values } from "lodash";
import Routes from "../utils/Routes";

const Main = () => {

  const pages = values(Routes);

  return (
    <Switch>
      {map(pages, (page, key) => 
        <Route 
          key={key} 
          path={page.path} 
          component={page.C} 
        />
      )}
      {/* <Route component={Routes.notFound} /> */}
    </Switch>
  )
}

export default Main;