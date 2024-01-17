"use client";

import Card from '@/app/components/Card/Card';
import { useEffect, useState } from "react";

const Vandalism = () => {
    const [vandalisms, setVandalisms] = useState([]);
    const getVandalismCues = async () => {
        const response = await fetch('http://localhost:8080/vandalism', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        setVandalisms(json.result);
    }

    useEffect(() => {
        getVandalismCues();
    }, []);
  return (
    <>
        {vandalisms && vandalisms.map(vandalism => {
            return (
                <Card data={vandalism} key={vandalism._id} />
            );
        })
        }
    </>
  )
}

export default Vandalism