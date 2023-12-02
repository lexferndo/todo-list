const prisma = require("../src/lib/prisma");

async function main() {
  // Create users
  const user1 = await prisma.user.create({
    data: {
      first_name: "John",
      last_name: "Doe",
      username: "johndoe",
      email: "john@example.com",
      password: "password123",
      photo: "path/to/photo.jpg",
      categories: {
        create: [
          {
            name: "Work",
            todos: {
              create: [
                {
                  title: "Finish project",
                  body: "Complete the project by the deadline",
                  due_date: new Date("2023-12-31"),
                  reminder_at: new Date("2023-12-30"),
                  status: "onprogress",
                  user: { connect: { id: 1 } },
                },
                {
                  title: "Meeting",
                  body: "Attend the team meeting",
                  due_date: new Date("2023-12-15"),
                  reminder_at: new Date("2023-12-14"),
                  status: "onprogress",
                  user: { connect: { id: 1 } },
                },
              ],
            },
          },
          {
            name: "Personal",
            todos: {
              create: [
                {
                  title: "Exercise",
                  body: "Go for a run",
                  due_date: new Date("2023-12-10"),
                  reminder_at: new Date("2023-12-09"),
                  status: "onprogress",
                  user: { connect: { id: 1 } },
                },
                {
                  title: "Read a book",
                  body: "Read a chapter of a book",
                  due_date: new Date("2023-12-20"),
                  reminder_at: new Date("2023-12-19"),
                  status: "onprogress",
                  user: { connect: { id: 1 } },
                },
                {
                  title: "Buy groceries",
                  body: "Milk, eggs, bread",
                  due_date: new Date("2023-12-15T12:00:00Z"),
                  reminder_at: new Date("2023-12-14T18:00:00Z"),
                  status: "onprogress",
                  user: { connect: { id: 1 } },
                },
                {
                  title: "Workout",
                  body: "30 minutes of cardio",
                  due_date: new Date("2023-12-16T08:00:00Z"),
                  reminder_at: new Date("2023-12-15T20:00:00Z"),
                  status: "onprogress",
                  user: { connect: { id: 1 } },
                },
              ],
            },
          },
        ],
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      first_name: "Jane",
      last_name: "Smith",
      username: "janesmith",
      email: "jane@example.com",
      password: "password456",
      photo: "path/to/photo2.jpg",
      categories: {
        create: [
          {
            name: "Study",
            todos: {
              create: [
                {
                  title: "Prepare for exam",
                  body: "Study for the upcoming exam",
                  due_date: new Date("2023-12-25"),
                  reminder_at: new Date("2023-12-23"),
                  status: "onprogress",
                  user: { connect: { id: 2 } },
                },
                {
                  title: "Research paper",
                  body: "Work on the research paper",
                  due_date: new Date("2023-12-18"),
                  reminder_at: new Date("2023-12-16"),
                  status: "onprogress",
                  user: { connect: { id: 2 } },
                },
                {
                  title: "Read a book",
                  body: "Complete chapter 1 and 2",
                  due_date: new Date("2023-12-18T14:00:00Z"),
                  reminder_at: new Date("2023-12-17T20:00:00Z"),
                  status: "onprogress",
                  user: { connect: { id: 2 } },
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.log("Dummy data seeded successfully!");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
