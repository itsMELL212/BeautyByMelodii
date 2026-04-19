import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/Navigation/NavigationStack";

export default function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <NavigationContainer>
      <NavigationStack
        users={users}
        setUsers={setUsers}
        setCurrentUser={setCurrentUser}
      />
    </NavigationContainer>
  );
}