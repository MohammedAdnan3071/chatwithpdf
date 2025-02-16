"use client";

import { Dialog, DialogTrigger,DialogContent } from "./ui/dialog";
import { useState } from "react"
import {Button} from "@/components/ui/button";


const UploadButton = () =>{
    const [ isOpen, setIsOpen] = useState<boolean>(false);
    

    return (
        <Dialog open={isOpen} onOpenChange={(v)=>{
            if(!v){
                setIsOpen(v);
            }
        }}> 
        <DialogTrigger  onClick={ () =>{
            setIsOpen(true)
        }} asChild>
            <Button> Upload PDF</Button>
        </DialogTrigger>
        
            <DialogContent>
                Example Content
            </DialogContent>
        

        </Dialog>
    )

}


export default UploadButton;