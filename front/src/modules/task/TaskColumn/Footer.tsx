import Button from "../../../components/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FC, forwardRef } from "react";

interface NormalFooterProps {
  enableEditing: () => void;
}

interface EditingFooterProps {
  save: () => void;
}

interface FooterProps extends NormalFooterProps, EditingFooterProps {
  editing: boolean;
}

const Footer = forwardRef<HTMLButtonElement, FooterProps>(
  ({ enableEditing, save, editing }, ref) => {
    return (
      <div className="w-full">
        {editing ? (
          <EditingFooter save={save} ref={ref} />
        ) : (
          <NormalFooter enableEditing={enableEditing} />
        )}
      </div>
    );
  },
);

const EditingFooter = forwardRef<HTMLButtonElement, EditingFooterProps>(
  ({ save }, ref) => {
    return (
      <>
        <Button
          ref={ref}
          type="primary"
          onClick={save}
          className="mr-[5%] w-[80%] text-start text-stone-300"
        >
          Сохранить
        </Button>
      </>
    );
  },
);

const NormalFooter: FC<NormalFooterProps> = ({ enableEditing }) => {
  return (
    <>
      <Button
        onClick={enableEditing}
        type="transparent"
        className="mr-[5%] w-[80%] text-start text-stone-300"
      >
        <FontAwesomeIcon icon={faPlus} className="mr-[10px]" />
        <span className="">Добавить задачу</span>
      </Button>

      <Button type="transparent" className="w-[15%]">
        <FontAwesomeIcon icon={faPlus} className="" />
      </Button>
    </>
  );
};

export default Footer;
