"use client"
import React from 'react';
import Step from "@/components/Step";

interface StepsProps {
    steps:[{}]
}
function Steps({steps}:StepsProps) {
    return (
        <div className="rounded-lg col-span-full md:col-span-4 bg-blue-600 px-6 py-10 flex flex-row justify-between md:flex-col md:justify-start gap-6 flex-wrap">

            {steps.map((step, i) => {
                return <Step key={i} step={step}/>
            })}
        </div>
    );
}

export default Steps;