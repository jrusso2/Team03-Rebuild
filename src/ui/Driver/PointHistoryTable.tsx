import { useEffect, useState } from 'react';
import { fetchUserAttributes } from 'aws-amplify/auth';

import "./pointhistory.css";

export type Transaction = {
    trans_id: number;
    driver_id: number;
    sponsor_id: number;
    sponsor_fname: string;
    sponsor_lname: string;
    sponsor_email: string;
    addOrSub:string;
    amount:number;
    reason:string;
    time:string;
};


export default function PointHistoryTable()
{
    const formatDate = (timestamp: string) => {
        const date = new Date(timestamp);
        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date
            .getDate()
            .toString()
            .padStart(2, "0")} ${date.getHours().toString().padStart(2, "0")}:${date
            .getMinutes()
            .toString()
            .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
        };

    const [transactions, settransactions] = useState<Transaction[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, _setError] = useState<any>(null);

    //TODO:maybe get rid of this
    //const [user_email, setEmail] = useState<string>("");
    

    useEffect(() => {
    // fetcing user's email
    const fetchEmail = async () =>{
        const attributes = await fetchUserAttributes();
        let email;
        email = await attributes['email'];
        if(!email) return "";
        //setEmail(email);
        return email as string;
    };
    const fetchData = async (email:string) => {
        //now, to fetch the transactions that belong to the driver
        try {
            const response = await fetch('https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/test/getPointHistoryForDriverWithEmail?driverEmail=' + email);
            const data = await response.json(); 
            const parsed = JSON.parse(data.body) as Transaction[];
            //console.log()
            settransactions(parsed);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }

    };

    const doTasks = async () => {
        let email = await fetchEmail();
        
        await fetchData(email as string);
    }

    doTasks();
    }, []); // Empty dependency array means this effect runs once on mount

    if (loading) {
    return <div>Loading...</div>;
    }

    if (error) {
    return <div>Error loading transactions: {error.message}</div>;
    }

    if (!transactions) {
    return <div>No transactions available</div>;
    }
    else
    {
        //return <div>{user?.signInDetails?.loginId}</div>
    }

    //TODO: fix table so that it has right amount of columns
    return (
        
        //TODO: clean up this old tailwind
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Your transactions
                <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">View your transactions</p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Sponsor Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Point Change
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Reason
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Time/Date
                    </th>
                    
                </tr>
            </thead>
            <tbody>
                {transactions.map( (transaction) => (
                    <tr key={transaction.trans_id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                        <td className='px-6 py-4'>{transaction.sponsor_fname + ' ' + transaction.sponsor_lname}</td>
                        <td className='px-6 py-4'>{transaction.addOrSub === "add" ? '+' : '-'} {transaction.amount}</td>
                        <td className='px-6 py-4'>{transaction.reason}</td>
                        <td className='px-6 py-4'>{formatDate(transaction.time)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);}