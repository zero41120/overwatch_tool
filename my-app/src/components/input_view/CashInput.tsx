import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCash } from '../../slices/inputSlice';
import NumberInput from '../shared/NumberInput';

export default function CashInput() {
  const cash = useAppSelector(state => state.input.present.cash);
  const dispatch = useAppDispatch();
  return (
    <div>
      <label htmlFor="total-cash" className="block text-sm font-medium dark:text-gray-300">
        Total Cash
      </label>
      <NumberInput
        value={cash}
        onChange={v => dispatch(setCash(v))}
        min={0}
        label="Total Cash"
        className="mt-1"
      />
    </div>
  );
}
