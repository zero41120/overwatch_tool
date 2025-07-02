import { useAppDispatch, useAppSelector } from "../../hooks";
import { addAvoid, toggleAvoidEnabled } from "../../slices/inputSlice";
import type { Item } from "../../types";
import ItemCardList from "../shared/ItemCardList";

interface Props {
  eqItems: Item[];
  resultItems: Item[];
}

export default function FinalBuildList({ eqItems, resultItems }: Props) {
  const dispatch = useAppDispatch();
  const avoidEnabled = useAppSelector((state) => state.input.present.avoidEnabled);

  const items = [...eqItems, ...resultItems];

  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200">Final Build</h3>
      <ItemCardList
        items={items}
        onAvoid={(it) => {
          if (!avoidEnabled) dispatch(toggleAvoidEnabled());
          dispatch(addAvoid(it.id || it.name));
        }}
      />
    </div>
  );
}
