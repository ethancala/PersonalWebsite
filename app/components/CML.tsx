import { div } from "framer-motion/client";
import { useState } from "react";

interface CommandMap {
    [command: string] : string | (() => string);
}

const commands: CommandMap = {
    help: "Available commands",
    whoami: "Available commands",
    skills: "Available commands",
    contact: "Available commands",
    date: "Available commands"
};

export default function CML(){
   return <div><p>test</p></div>
}