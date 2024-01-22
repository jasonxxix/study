import React, { useEffect, useState } from "react";
import { z } from "zod";

const API_ADDRESS = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';

const zodEmployee = z.object({
    id: z.number(),
    imageUrl: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    contactNumber: z.string(),
    age: z.number(),
    dob: z.string(),
    salary: z.number(),
    address: z.string(),
})

type Employee = z.infer<typeof zodEmployee>

export function FetchSample() {
    const [ names, setNames ] = useState<string[]|undefined>();
    
    useEffect(()=>{
        const getData = async () => {
            const fetchRequest = await fetch(API_ADDRESS)
            const names = await fetchRequest.json().then((datas: Employee[])=>{
                return datas.reduce((names: string[], employee: Employee)=>{
                    try {
                        zodEmployee.parse(employee);
                        const {firstName, lastName} = employee;
                        names.push(`${firstName} ${lastName}`);
                    } catch(error) {
                        console.error("Err::", error)
                    }
    
                    return names
                }, []);
            }).catch((err)=>{
                console.error("ERR::", err)
                return [];
            })
            setNames(names);
        }
        getData();
    }, [])

    return <React.Fragment>
        {names?.map((name)=><div key={name}>{name}</div>)}
        {!names && <div>Fetching...</div>}
    </React.Fragment>
}


export default FetchSample;