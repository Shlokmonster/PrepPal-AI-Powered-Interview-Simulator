import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const MockInterview = pgTable("mockinterview", {
    id: serial("id").primaryKey(),
    years_of_experience: varchar("years_of_experience").notNull(), 
    job_role: varchar("job_role").notNull(), 
    job_description: text("job_description").notNull(),
    created_by: varchar("created_by").notNull(), // ✅ Add this column
    created_at: varchar("created_at") // ✅ Add this column
});

export const UserAnswer = pgTable("userAnswer", {
    id: serial("id").primaryKey(),
    mockIdRef: varchar("mockId").notNull(),
    question: varchar("question").notNull(),
    correctAns: text("correctAns"),
    userAns: text("userAns"),
    feedback: text("feedback"),
    rating: varchar("rating"),
    userEmail: varchar("userEmail"),
    createdAt: varchar("createdAt")
});
