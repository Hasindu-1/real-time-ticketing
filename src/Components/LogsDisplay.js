import { useEffect, useState } from "react";

function TicketPool(){

    const[message, setMessage] = useState([]);

    useEffect(() =>{
        const intervalId = setInterval(() =>{
            fetchMessages();

        },100);
        
        return() => clearInterval(intervalId);
    },[]);

    const fetchMessages = async () => {
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
    <div className="Ticket-display">
    <h1 className="ticketpool-header">Ticket Pool</h1>
        <div className="Ticket-Pool">
            <ul className="message">
               {message.map((message,index) => (
                <li className="messages" key={index}>{message}</li>
               ))}
            </ul>
        </div>
        </div>
    );

}
export default TicketPool