import "./Configure.css"; 
import { useState } from "react"

function Configure(){
    const[formData,setFormData] = useState({
            totalTickets:"",
            ticketReleaseRate:"",
            customerRetrievalRate:"",
            maxTicketCapacity:"",
        });
    const handleChange = (e) =>{
        const{name,value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:8080/configure/save",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"

                },
                body: JSON.stringify(formData),
            });
            if(response.ok){
                alert("configuration saved successfully");
            }else{
                alert("failed to save")
            }
        }catch(error){
            console.error("error saving : ", error)
            alert("an error occurred")
        }
    };
    return(
        
        <form onSubmit={handleSubmit}>
            <div className="form">
            <h2>Configuration Form</h2>
            <div className="formItem">
                <label htmlFor="totalTicket">Total Tickets : </label>
                <br/>
                <input
                className="box"
                type="number"
                id="totalTicket"
                name="totalTickets"
                value={formData.totalTickets}
                onChange={handleChange}
                required />
            </div>
            <div className="formItem">
                <label htmlFor="ticketReleaseRate">Ticket Release Rate (ms): </label>
                <br/>
                <input 
                className="box"
                type="number"
                id="ticketReleaseRate"
                name="ticketReleaseRate"
                value={formData.ticketReleaseRate}
                onChange={handleChange}
                required />
            </div>
            <div className="formItem">
                <label htmlFor="customerRetrievalRate">Customer Retrieval Rate (ms): </label>
                <br/>
                <input 
                className="box"
                type="number"
                id="customerRetrievalRate"
                name="customerRetrievalRate"
                value={formData.customerRetrievalRate}
                onChange={handleChange}
                required />
            </div>
            <div className="formItem">
                <label htmlFor="maxTicketCapacity">Max Ticket Capacity : </label>
                <br/>
                <input 
                className="box"
                type="number"
                id="maxTicketCapacity"
                name="maxTicketCapacity"
                value={formData.maxTicketCapacity}
                onChange={handleChange}
                required />
            </div>
           
            <button className="savebuT" type="submit">Save Configuration</button>
            </div>
        </form>
        

    );

}
export default Configure