/*
Documents and resources:
Supbase Auth - https://supabase.com/docs/guides/auth/users
*/
'use client'

import { useEffect, useState } from 'react';
import { supabase } from "@/lib/supabaseClient";

export default function DashboardPage(){
    const [user, setUser] = useState(null);

    // Retrieve user's name from Supabase Auth everytime new user signs in 
    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabase.auth.getUser();
            setUser(data.user);
        }
        getUser();
    }, [supabase]);

    if (!user) {
        return (
            <div className="flex min-h-screen items-center justify-center text-xl">
                Loading...
            </div>
        )
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold">
                Hello, {user.user_metadata.full_name || user.email}! 👋
            </h1>
        </div>
    )
};