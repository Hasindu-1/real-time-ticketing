import { useEffect, useState } from "react";
import  "./LogsDisplay.css";


function LogsDisplay(){

    const[message, setMessage] = useState([]);

    useEffect(() =>{
        const intervalId = setInterval(() =>{
            fetchList();

        },100);
        
        return() => clearInterval(intervalId);
    },[]);

    const fetchList = async () => {
        try{
            const response = await fetch("http://localhost:8080/logs/get");
            if(response.ok){
                const data = await response.json();
                setMessage(data);
            }else{
                console.error("error fetching message");
            }
        }catch(error){
            console.error('error', error)

        }
    };

    return(
    <div className="Logsdisplay">
    <h1 className="log-header">LogsDisplay</h1>
        <div className="log">
            <ul className="message">
               {message.map((message,index) => (
                <li className="messages" key={index}>{message}</li>
               ))}
            </ul>
        </div>
        </div>
    );

}
export default LogsDisplay