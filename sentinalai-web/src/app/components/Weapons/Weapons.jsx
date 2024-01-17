"use client";

import WeaponCard from '@/app/components/Card/Card';
import { useEffect, useState } from "react";

const Weapons = () => {
    const [weapons, setWeapons] = useState([]);
    const getWeaponCues = async () => {
        const response = await fetch('http://localhost:8080/weapons', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        setWeapons(json.result);
    }

    useEffect(() => {
        getWeaponCues();
    }, []);
  return (
    <>
        {weapons && weapons.map(weapon => {
            return (
                <WeaponCard data={weapon} key={weapon._id} />
            );
        })
        }
    </>
  )
}

export default Weapons