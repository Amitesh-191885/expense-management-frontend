import React from "react";
import NoInternet from "../components/utils/NoInternet.Tsx";

function MainOutlet() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  return isOnline ? (
    <div></div>
  ) : (
    <div>
      <NoInternet />
    </div>
  );
}

export default MainOutlet;
