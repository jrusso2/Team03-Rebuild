import React, { useEffect, useState } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';

export type Driver = {
    driver_id: number;
    fname: string;
    lname: string;
    balance: string;
};


export default function ViewDriversTable()
{
    const { user } = useAuthenticator();
    const [drivers, setDrivers] = useState<Driver[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);
    

    useEffect(() => {
    // fetching Drivers from db
    const fetchData = async () => {

        //now, to fetch the drivers that belong to the sponsor
        try {
            const response = await fetch('https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/test/getDriversForSponsor?sponsorEmail=' + user?.signInDetails?.loginId);
            const data = await response.json();
            console.log(data.body);
            setDrivers(JSON.parse(data.body) as Driver[]);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

    };

    fetchData();
    }, []); // Empty dependency array means this effect runs once on mount

    if (loading) {
    return <div>Loading...</div>;
    }

    if (error) {
    return <div>Error loading drivers: {error.message}</div>;
    }

    if (!drivers) {
    return <div>No drivers available</div>;
    }
    else
    {
        //return <div>{user?.signInDetails?.loginId}</div>
    }

    //const drivers:Driver[] = [{fname: 'Michael', id: 1, lname:'Schwab',balance:5},{fname: 'Michael', id: 1, lname:'Schwab',balance:5},{fname: 'Michael', id: 1, lname:'Schwab',balance:5}];
    
    
    return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Your Drivers
                <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">View your drivers</p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Driver Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Point Balance
                    </th>
                    <th scope="col" className="px-6 py-3">
                        ...
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Remove?
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">...</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {drivers.map( (driver) => (
                    <tr key={driver.driver_id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                        <td className='px-6 py-4'>{driver.fname + ' ' + driver.lname}</td>
                        <td className='px-6 py-4'>{driver.balance}</td>
                        <td className='px-6 py-4'></td>
                        <td className='px-6 py-4'></td>
                        {/*TODO: Add button so that */ }
                        <td className='px-6 py-4'>Remove</td> 
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);}
