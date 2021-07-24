import Task from './task';

export default interface Student {
  name: string;
  mail: string;
  completedTasks: Task[];
  incompleteTasks: Task[];
}
