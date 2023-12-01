const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Create users
  const user1 = await prisma.user.create({
    data: {
      first_name: "John",
      last_name: "Doe",
      username: "johndoe",
      email: "john.doe@example.com",
      password: "password123",
      photo: "path/to/photo.jpg",
      todo: {
        create: [
          {
            title: "Complete task 1",
            body: "Lorem ipsum...",
            due_date: new Date(),
            reminder_at: new Date(),
            category: {
              create: { name: "Work" },
            },
          },
          {
            title: "Complete task 2",
            body: "Lorem ipsum...",
            due_date: new Date(),
            reminder_at: new Date(),
            category: {
              create: { name: "Personal" },
            },
          },
        ],
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      first_name: "Jane",
      last_name: "Doe",
      username: "janedoe",
      email: "jane.doe@example.com",
      password: "password456",
      todo: {
        create: [
          {
            title: "Complete task 3",
            body: "Lorem ipsum...",
            due_date: new Date(),
            reminder_at: new Date(),
            category: {
              create: { name: "Study" },
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
