"use client";

import tasksData from "@/data/tasksData";
import TasksTable from "./TasksTable";
import { useEffect } from "react";

export default function Page() {
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await fetch("https://9buy272svi.execute-api.eu-central-1.amazonaws.com/test/task", {
                    method: "GET",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer eyJraWQiOiI3Vk00QVR6Yld1Z1p3TWx4MnJob3FpMmk4SWV3KzNOZVdueXNmMlpCQndVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2MzE0ODg0Mi0yMDgxLTcwOWMtODNlZi1iZTlkN2ZjMzExOTciLCJjb2duaXRvOmdyb3VwcyI6WyJhZG1pbiJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb21cL2V1LWNlbnRyYWwtMV9FT2MxQkwzTWciLCJjb2duaXRvOnVzZXJuYW1lIjoia3BvbnlvamRrIiwib3JpZ2luX2p0aSI6ImE5ZTEzYWVhLTIwNGEtNGQ4ZS05NjgwLWRjYjg3OGFmYjVjNiIsImF1ZCI6IjdrN2g2M2lubm52ZW9rMjQ2MW12ZHBzYmllIiwiZXZlbnRfaWQiOiI3NjJjNTcxYy04ODFjLTQyNTctYmY3MS0zMjljMWMxZTY2NGEiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTc0NTk1MTkxOSwiZXhwIjoxNzQ1OTU1NTE5LCJpYXQiOjE3NDU5NTE5MTksImp0aSI6IjVjYTg1MzdhLWVlNGQtNGQ5ZC1iYTJiLTIyNWU2MmJjM2I5MyIsImVtYWlsIjoiam9obi5rcG9ueW9AYW1hbGl0ZWNoLmNvbSJ9.Q2yXVHRdDSUXdM3HBz48yUsInOOhDgSxzAANRMspBismEpC2ci7jqhogQ271KY8ERQEk-S2YKnm7uxLfisxYkWmmkkJg-K6axKuE58bN3YRPZO-by8_TnBS8C8RF0z9h0bv66KTt9QyinYl1qIFaMQib2nQgm11WWoc9scLP9oOwooNpIncWfBC3dOd52et208txpJNkEAQBZRZeF4LqgWfVngWmhtRaAD7kHl3hEgCxB6PhUXZUcZkIlS7J4VITzQQfJYlCvweHfEIDdxXmUjpNXmhadRTwMZpyfhZw3cyEVxOdjUtOAah0K8dQ23tSUWK_i3rGY1j8mj7UToWQ_g`,
                    },
                });
                console.log("Response:", response);
                const data = await response.json();
                tasksData.push(...data);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };

        fetchTasks();
    }, []);
    return (
        <main className="h-full">
            <TasksTable tasks={tasksData} />
        </main>
    );
}
