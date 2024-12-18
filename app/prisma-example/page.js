import prisma from '@/utils/db';

const prismaHandlers = async () => {
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return allTasks;
};

const PrismaExamplePage = async () => {
  const tasks = await prismaHandlers();
  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No tasks to show...</h2>;
  }

  return (
    <div>
      <h1 className="text-7xl">PrismaExample Page</h1>
      {tasks.map((task) => {
        return (
          <h1 key={task.id} className="text-xl py-2">
            ✔{task.content}
          </h1>
        );
      })}
    </div>
  );
};

export default PrismaExamplePage;
