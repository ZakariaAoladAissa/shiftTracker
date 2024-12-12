'use client'

import Card from "@/components/Card";
import InfoCard from "@/components/InfoCard";
import { useSession } from "next-auth/react";

export default function Dashboard() {
    const { data: session } = useSession();
    console.log(session)
  return (
    <div className="dashboard">
        
        <div className="dashboard-content">
            <div>
               <h2>Welcome Back, Zakaria</h2> 
            </div>
            <br/>
            <div className="change-date">
                <div className="line">
                    <div className="filter">
                       <i className="fa-solid fa-filter"></i>
                        Filter By : days 
                    </div>
                    
                </div>
                <div className="date-change">
                    <button>prev </button>
                    10/12/2024 {/** liste deroulante to get date easily ?? */}
                    <button>next </button>
                </div>
                
            </div>
            <br/>
            <div className="cards">
                <Card/>
                <Card/>    
            </div>
        </div>
        
        <div className="totals">
            <div className="add">
                + Add new Workplace
            </div>
            <InfoCard/>
        </div>
    </div>
  );
}
