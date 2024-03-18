import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { store } from "../../app/store";
import { notesApiSlice } from "../notes/notesApiSlice";
import { usersApiSlice } from "../users/usersApiSlice";

import React from "react";

function Prefetch() {
  useEffect(() => {
    console.log("subscribng");
    const notes = store.dispatch(notesApiSlice.endpoints.getNotes.initiate);
    const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate);

    return () => {
      console.log("unsibscribing");
      notes.unsubscribe();
      users.unsubscribe();
    };
  });
  return <Outlet />;
}

export default Prefetch;
