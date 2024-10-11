"use client"

import { createAction } from "@/app/action";
import SubmitButton from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { startTransition, SyntheticEvent, useState } from "react";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
    const [state,setState]=useState('ready');
    
   async function handleOnsubmit(event:SyntheticEvent){
        event.preventDefault();
        if(state==='pending') return;
        setState('pending'); 
        const target=event.target as HTMLFormElement;
        startTransition(async ()=>{
            const formData=new FormData(target);
            await createAction(formData)     
        })
        
    }
     
  return (
    <main className=" flex flex-col justify-center h-full  gap-6 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold">Create Invoice</h1>
      <div>
        
        <form action={createAction} onSubmit={handleOnsubmit} className="grid gap-4 max-w-xs">
            <div>
                <Label htmlFor="name" className="block font-semibold mb-2">Billing Name</Label>
                <Input type="text" name="name" id="name"/>
            </div>
            <div>
                <Label  htmlFor="email" className="block font-semibold mb-2">Billing email</Label>
                <Input type="email" name="email" id="email"/>
            </div>
            <div>
                <Label htmlFor="value" className="block font-semibold mb-2">Value</Label>
                <Input type="text" name="value" id="value" />
            </div>
            <div>
                <Label htmlFor="description" className="block font-semibold mb-2">Description</Label>
                <Textarea name="description" id="description"></Textarea>
            </div>
            <div>
                <SubmitButton/>
            </div>
            
        </form>
      </div>
    </main>
  );
}
