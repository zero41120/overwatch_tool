import { useAppDispatch, useAppSelector } from "../../hooks";
import { toggleUseOverrides } from "../../slices/inputSlice";

export default function OverrideToggle() {
  const enabled = useAppSelector((s) => s.input.present.useOverrides);
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center gap-2">
      <input
        id="override-toggle"
        type="checkbox"
        checked={enabled}
        onChange={() => dispatch(toggleUseOverrides())}
        className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
      />
      <label htmlFor="override-toggle" className="text-sm dark:text-gray-300 select-none">
        Enable Editor Overrides
      </label>
    </div>
  );
}
