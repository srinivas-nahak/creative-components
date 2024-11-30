import { motionVariantActions } from "@/store/motionVariantSlice";
import { useDispatch } from "react-redux";

function useCursorVariant() {
  const dispatch = useDispatch();

  const mouseEnterHandler = (motionVariantType: string) => {
    dispatch(motionVariantActions.setMotionVariant(motionVariantType));
  };

  const mouseLeaveHandler = (_: string) => {
    dispatch(motionVariantActions.setMotionVariant("default"));
  };

  return [mouseEnterHandler, mouseLeaveHandler];
}

export default useCursorVariant;
