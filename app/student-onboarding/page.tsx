import React from 'react';
import Steps from "@/components/MutiStepForm/Steps";
import StepForm from "@/components/MutiStepForm/StepForm";

function StudentOnboardingPage() {

    const steps = [
        {
            number: 1,
            title: "Personal Info",
        },
        {
            number: 2,
            title: "Education Background",
        },
        {
            number: 3,
            title: "Programming Experience",
        },
        {
            number: 4,
            title: "Preferred Programing Languages",
        },
        {
            number: 5,
            title: "Technical Skills Assessments",
        },
        {
            number: 6,
            title: "Submit and Confirmation",
        },

    ];
    return (
        <div className="bg-blue-50 min-h-screen p-4">
            <div className="mx-auto w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow sm:p-4 md:p-6 dark:bg-gray-800 dark:border-gray-700 grid grid-cols-12 gap-4 min-h-screen">
            {/*    steps*/}

                <Steps steps={steps}/>
            {/*    <Steps step={steps}/> */}
            {/*    Form*/}

                <div className="rounded-lg col-span-full md:col-span-8">

                    <StepForm/>
                    {/*   Step Form*/}
                </div>
            </div>
        </div>
    );
}

export default StudentOnboardingPage;