import { toast } from "react-toastify";
import styles from "./toast.module.scss";
import Close from "../../public/icons/close.svg";

interface ToastMessageProps {
  type: "success" | "error" | "warn" | "info";
  msg: string;
  position?:
    | "top-right"
    | "top-center"
    | "top-left"
    | "bottom-right"
    | "bottom-center"
    | "bottom-left";
}
export function toastMessage({
  type,
  msg,
  position = "top-right",
}: ToastMessageProps) {
  const types = {
    success: () =>
      toast.success(msg, {
        position: position,
        className: styles.container,
      }),
    error: () =>
      toast.error(msg, {
        position: position,
        className: styles.container,
        closeButton: (props) => (
          <div className={styles.iconContainer}>
            <Close />{" "}
          </div>
        ),
      }),

    warn: () =>
      toast.warn(msg, {
        position: position,
        className: styles.container,
      }),

    info: () =>
      toast.info(msg, {
        position: position,
        className: styles.container,
      }),
  };

  types[type]();
}
