import { FC } from "react";
import Button from "../../components/button/Button";

const TaskCreateCard: FC = () => {
  return (
    <div className="h-[200px] w-[300px] rounded-[20px] bg-black">
      some content
      <Button>Сохранить</Button>
      <Button type="error">Закрыть</Button>
    </div>
  );
};

export default TaskCreateCard;
