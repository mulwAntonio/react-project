import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { RootDispatchType, RootStateType } from "./store";

export const useAppDispatch: () => RootDispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
