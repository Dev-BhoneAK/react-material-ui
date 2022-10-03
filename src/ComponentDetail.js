import * as React from "react";
import { useParams } from "react-router-dom";
import DetailAppBar from "./components/app-bar/DetailAppBar";
import component_lists from "./utils/_DATA.js";

export default function ComponentDetail() {
  let params = useParams();
  const component_id = params.component_id;
  const component = component_lists.filter(
    (component) => component.id == component_id
  )[0];
  console.log("component ", component.name);
  return <DetailAppBar />;
}
