'use client'

import styles from "./page.module.css";
import { signOut, useSession } from "next-auth/react";


export default function Home() {
  const { data: session } = useSession();
  return (
    <div className={styles.page}>
      Home page
      <br/>
      {session?.user? 
        session.user.name
       : "not connected yet"}
       <div onClick={signOut}>Signout</div>
    </div>
  );
}
