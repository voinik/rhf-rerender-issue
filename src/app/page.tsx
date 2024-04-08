import { TestFormControlled } from "./TestFormControlled";
import { TestFormShadcn } from "./TestFormShadcn";
import { TestFormUncontrolled } from "./TestFormUncontrolled";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className="flex flex-col gap-16">
                {/* <div className="flex flex-col gap-2">
                    <h1 className="text-2xl">Uncontrolled form</h1>
                    <TestFormUncontrolled />
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl">Controlled form</h1>
                    <TestFormControlled />
                </div>*/}
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl">Controlled Shadcn form</h1>
                    <TestFormShadcn />
                </div>
            </div>
        </main>
    );
}
