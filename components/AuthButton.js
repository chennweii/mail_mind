"use client";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AuthButton() {
    const [open, setOpen] = useState(false);

    async function signInWithGoogle() {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${location.origin}/dashboard`,
            },
        });

        if (error) console.log("Error logging in: ", error.message);
    }

    async function signOut() {
        await supabase.auth.signOut();
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            
            <DialogTrigger asChild>
            <Button variant="outline" className="relative z-10">Sign In</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                    <DialogTitle>Login</DialogTitle>
                    <DialogDescription>
                        Sign in to your MailMind account.
                    </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col gap-4">
                    <Button onClick={signInWithGoogle} className="bg-blue-600 text-white">
                        Continue with Google
                    </Button>

                    <Button onClick={signOut} className="bg-red-500 text-white">
                        Sign Out
                    </Button>
                </div>
            </DialogContent>

        </Dialog>

            

    
        
        
    );
};