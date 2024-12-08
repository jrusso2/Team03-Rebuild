import { useEffect, useState } from 'react';
import { fetchUserAttributes } from 'aws-amplify/auth';



export type Sponsor = {
    sponsor_id: number;
    fname: string;
    lname: string;
    balance: string;
};


export default function ViewSponsorsTable()
{
    
    const [sponsors, setSponsors] = useState<Sponsor[] | null>(null);
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
        //now, to fetch the sponsors that belong to the driver
        try {
            const response = await fetch('https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/test/getSponsorsForDriver?driverEmail=' + email);
            const data = await response.json(); 
            const parsed = JSON.parse(data.body) as Sponsor[];
            //console.log()
            setSponsors(parsed);
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
    return <div>Error loading sponsors: {error.message}</div>;
    }

    if (!sponsors) {
    return <div>No sponsors available</div>;
    }
    else
    {
        //return <div>{user?.signInDetails?.loginId}</div>
    }

    //TODO: Remove dead code?
    /*
    const handleRemoveDriver = async (driverId: number) => {
        
        try {
          {/**TODO: This should almost definitely be a POST, not a get, but I could only get a GET to work for now * /}
          const response = await axios.get(
            `https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/test/unlinkDriverFromSponsor`,
            {
              params: {
                driverID: driverId,
                sponsorEmail: user_email,
              },
            }
          );
          alert(`Removed driver with id=${driverId}`);
          console.log(response);
        } catch (err: any) {
          alert(`Failed to remove driver. Error: ${err.message}`);
        }
      };
      */

    //const drivers:Driver[] = [{fname: 'Michael', id: 1, lname:'Schwab',balance:5},{fname: 'Michael', id: 1, lname:'Schwab',balance:5},{fname: 'Michael', id: 1, lname:'Schwab',balance:5}];
    
   
    //TODO: fix table so that it has right amount of columns
    return (
        
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Your Sponsors
                <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">View your sponsors</p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Sponsor Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Point Balance
                    </th>
                    <th scope="col" className="px-6 py-3">
                        ...
                    </th>
                    <th scope="col" className="px-6 py-3">
                        ...
                    </th>
                    
                </tr>
            </thead>
            <tbody>
                {sponsors.map( (sponsor) => (
                    <tr key={sponsor.sponsor_id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                        <td className='px-6 py-4'>{sponsor.fname + ' ' + sponsor.lname}</td>
                        <td className='px-6 py-4'>{sponsor.balance}</td>
                        <td className='px-6 py-4'></td>
                        <td className='px-6 py-4'></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);}