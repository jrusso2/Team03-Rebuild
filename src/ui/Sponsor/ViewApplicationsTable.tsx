import { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchUserAttributes } from 'aws-amplify/auth';


export type Application = {
    driver_id: number;
    driver_fname: string;
    driver_lname: string;
    app_id:number;
};



export default function ViewDriversTable()
{
    
    const [drivers, setDrivers] = useState<Application[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, _setError] = useState<any>(null);
   
    let email:string;
    //const [email, setEmail] = useState<string | null>("");

    useEffect(() => {
    const fetchEmail = async () =>{
        const attributes = await fetchUserAttributes();
        let user_email;
        user_email = await attributes['email'];
        if(!user_email) return "";
        return user_email as string;
    };
    

    // fetching Drivers from db 
    const fetchData = async (email:string) => {
        //await fetchEmail();
        console.log(email);
        //now, to fetch the drivers that belong to the sponsor
        try {
            const response = await fetch('https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/test/getOpenApplicationsForSponsor?sponsorEmail=' + email);
            const data = await response.json();
            //console.log(data.body);
            setDrivers(JSON.parse(data.body) as Application[]);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
        
    };

    const doTasks = async () => {
        email = await fetchEmail();
        
        await fetchData(email as string);
    }
    doTasks();
    }, []); // Empty dependency array means this effect runs once on mount

    if (loading) {
    return <div>Loading...</div>;
    }

    if (error) {
    return <div>Error loading applications: {error.message}</div>;
    }

    if (!drivers) {
        return <div>No applications available</div>;
    }
    else
    {
       //return <div>{email}</div>
    }

    //const drivers:Application[] = [{driver_fname: 'Michael', id: 1, driver_lname:'Schwab',balance:5},{driver_fname: 'Michael', id: 1, driver_lname:'Schwab',balance:5},{driver_fname: 'Michael', id: 1, driver_lname:'Schwab',balance:5}];
    
    const handleAcceptApplication = async (sponsorId: number) => {
        console.log(sponsorId);
        try {
          {/**TODO: This should almost definitely be a POST, not a get, but I could only get a GET to work for now */}
          const response = await axios.get(
            `https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/test/Applications/acceptApplication`,
            {
              params: {
                applicationID: sponsorId,
              },
            }
          );
          alert(`Application accepted successfully!`);
          console.log(response);
          //TODO: something more elegant to get clear something from list
          window.location.reload();
        } catch (err: any) {
          alert(`Failed to apply to accept application... Error: ${err.message}`);
        }
      };

      const handleRejectApplication = async (sponsorId: number) => {
        try {
          {/**TODO: This should almost definitely be a POST, not a get, but I could only get a GET to work for now */}
          const response = await axios.get(
            `https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/test/Applications/rejectApplication`,
            {
              params: {
                applicationID: sponsorId
              },
            }
          );
          alert(`Application to Sponsor ID: ${sponsorId} submitted successfully!`);
          console.log(response);
          //TODO: something more elegant to get clear something from list
          window.location.reload();
        } catch (err: any) {
          alert(`Failed to apply to Sponsor ID: ${sponsorId}. Error: ${err.message}`);
        }
      };

    
    return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Your Applications
                <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">View pending applications</p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Driver Name
                    </th>
                    
                    <th scope="col" className="px-6 py-3">
                        Accept
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Reject
                    </th>
                </tr>
            </thead>
            <tbody>
                {drivers.map( (app) => (
                    <tr key={app.app_id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                        <td className='px-6 py-4'>{app.driver_fname + ' ' + app.driver_lname}</td>
                        <td className='px-6 py-4'>
                            <button
                                onClick={() => handleAcceptApplication(app.app_id)}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Accept
                            </button>
                        </td> 
                        {/*TODO: Add button so that */ }
                        <td className='px-6 py-4'>
                            <button
                                onClick={() => handleRejectApplication(app.app_id)}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Reject
                            </button>
                        </td> 
                        
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);}